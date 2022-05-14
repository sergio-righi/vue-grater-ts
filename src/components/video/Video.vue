<template>
  <div class="gv-video">
    <div
      class="gv-content"
      :class="{ undocked: active.undocked }"
      @contextmenu.prevent
      @mousemove="onContainerMousemove"
      @mouseenter="onContainerMouseenter"
      @mouseleave="onContainerMouseleave"
    >
      <video
        ref="video"
        tabindex="1"
        controls
        :muted="isMuted"
        :loop="active.loop"
        :autoplay="feature.autoplay"
        :src="videoSrc"
        @play="onPlay"
        @pause="onPause"
        @ended="onEnded"
        @seeked="onSeeked"
        @waiting="onWaiting"
        @playing="onPlaying"
        @click.self="onClick"
        @loadeddata="onLoadeddata"
        @dblclick.self="onDblClick"
        @timeupdate="onTimeupUpdate"
      >
        <slot />
      </video>
      <div class="gv-dismiss" @click="onClickClose"></div>
      <div
        class="gv-poster"
        :class="{ active: bposter }"
        :style="{ 'background-image': posterSrc }"
        @click.self="onClick"
        @dblclick.self="onDblClick"
      ></div>
      <div class="gv-process" :class="{ active: isProcess }">
        <gv-progress-circle indeterminate :size="80" :width="3" color="white" />
      </div>
      <div
        class="gv-pip"
        :class="{ active: active.pip }"
        @click="onClickPopup"
      ></div>
      <div v-if="hasToolbar" class="gv-toolbar" :class="{ active: isToolbar }">
        <gv-video-progress
          ref="progress"
          v-model="data.time"
          :buffer="data.buffer"
          :paused="!status.running"
          :duration="data.duration"
        />
        <gv-button
          class="gv-control"
          :class="{
            replay: status.ended,
            play: !status.running && !status.ended,
            pause: status.running && !status.ended,
          }"
          @onclick="manageState"
        ></gv-button>
        <gv-video-volume ref="volume" v-model="data.volume" />
        <div class="gv-time">
          <span class="gv-current">{{ scurrent }}</span>
          <span class="gv-separator"></span>
          <span class="gv-duration">{{ sduration }}</span>
        </div>
        <gv-button
          class="gv-control configuration"
          :class="{ active: active.configuration }"
          @onclick="onClickConfiguration"
        />
        <gv-button
          v-if="feature.pip"
          class="gv-control popup"
          @onclick="onClickPopup"
        />
        <gv-video-fullscreen ref="fullscreen" />
      </div>
      <gv-video-configuration
        :class="{ active: active.configuration }"
        :supported-resolution="supportedResolution"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-video",
  props: {
    volume: {
      default: 1,
      type: [String, Number],
    },
    poster: [String, Object],
    time: {
      default: 0,
      type: [String, Number],
    },
    loop: Boolean,
    undock: Boolean,
    autoplay: Boolean,
  },
  data() {
    return {
      items: {},
      timeout: null,
      supportedResolution: [],
      data: {
        time: 0,
        speed: 1,
        volume: 1,
        buffer: 0,
        duration: 0,
        resolution: null,
      },
      feature: {
        pip: false,
        undock: false,
        autoplay: false,
      },
      active: {
        pip: false,
        loop: false,
        volume: false,
        toolbar: false,
        undocked: false,
        fullscreen: false,
        configuration: false,
      },
      status: {
        ready: false,
        ended: false,
        loaded: false,
        running: false,
        buffering: false,
      },
    };
  },
  computed: {
    isLoaded() {
      return this.status.loaded;
    },
    isMuted() {
      return this.data.volume === 0;
    },
    isProcess() {
      return !this.status.loaded || this.status.buffering;
    },
    isToolbar() {
      return this.active.toolbar || this.active.volume;
    },
    hasToolbar() {
      return this.status.loaded && !this.active.pip;
    },
    bposter() {
      return (
        this.status.ended ||
        (!this.autoplay && !this.status.running && this.data.time === 0)
      );
    },
    scurrent() {
      return this.$utils.number.toTimeString(this.data.time);
    },
    sduration() {
      return this.$utils.number.toTimeString(this.data.duration);
    },
    videoSrc() {
      return this.items[this.data.resolution];
    },
    posterSrc() {
      return this.$utils.boolean.isString(this.poster)
        ? `url(${this.poster})`
        : "none";
    },
  },
  watch: {
    "data.volume": function (val) {
      this.$refs.video.volume = val;
    },
    "data.speed": function (val) {
      this.$refs.video.playbackRate = val;
    },
    "data.resolution": function () {
      this.$refs.video.pause();
      this.status.loaded = false;
      // this.status.running = false;
      this.status.buffering = true;
      this.feature.autoplay = false;
      this.data.time = this.$refs.video.currentTime;
    },
    "status.ready": function () {
      this.setup();
    },
  },
  beforeDestroy() {
    const video = this.$refs.video;
    video.removeEventListener(
      "leavepictureinpicture",
      this.handleExitPip,
      false
    );
    video.removeEventListener(
      "enterpictureinpicture",
      this.handleEnterPip,
      false
    );

    window.removeEventListener("scroll", this.handleWindowScroll);
    window.removeEventListener("keydown", this.handleWindowKeydown);
  },
  methods: {
    append: function (item) {
      this.items = Object.assign(this.items, item);
      this.status.ready = true;
    },
    setup: function () {
      this.supportedResolution = Object.keys(this.items);

      this.active.loop = this.loop;
      this.feature.undock = this.undock;
      this.feature.autoplay = this.autoplay;

      this.data.volume = Number(this.volume);
      this.data.time =
        this.time > this.data.duration ? this.data.duration : this.time;
      this.data.resolution =
        this.data.resolution ?? this.supportedResolution[0];

      this.bind();
      this.checkPopup();
    },
    checkPopup: function () {
      const video = this.$refs.video;
      const setPipButton = () => {
        this.feature.pip = document.pictureInPictureEnabled;

        video.removeEventListener("emptied", setPipButton);
        video.removeEventListener("loadedmetadata", setPipButton);
      };

      if ("pictureInPictureEnabled" in document) {
        setPipButton();
        video.addEventListener("emptied", setPipButton);
        video.addEventListener("loadedmetadata", setPipButton);
      } else {
        this.feature.pip = false;
      }
    },
    onPlay: function () {
      if (!this.status.loaded) return;
      this.status.ended = false;
      this.status.running = true;
      this.manageToolbar();
    },
    onPause: function () {
      this.active.toolbar = true;
      this.status.running = false;
      clearTimeout(this.timeout);
    },
    onEnded: function () {
      this.status.ended = true;
      this.active.undocked = false;
      this.active.configuration = false;
      if (this.active.loop) {
        this.data.time = 0;
      }
    },
    onSeeked: function (event) {
      this.status.loaded = true;
      if (event.target.buffered) {
        this.data.buffer = event.target.buffered.end(0) / this.fduration;
        if (this.status.running) {
          event.target.play();
        }
        this.status.buffering = false;
      }
    },
    onWaiting: function () {
      this.status.running = false;
      this.status.buffering = true;
    },
    onPlaying: function () {
      this.status.running = true;
      this.status.buffering = false;
    },
    onLoadeddata: function (event) {
      event.target.currentTime = this.data.time;
      this.data.duration = event.target.duration;
    },
    onTimeupUpdate: function (event) {
      if (this.status.loaded && this.status.running) {
        this.data.time = event.target.currentTime;
      }
    },
    onClick: function () {
      if (this.active.configuration) {
        this.active.configuration = false;
      } else if (this.active.undocked) {
        this.$el.scrollIntoView();
      } else {
        this.manageState();
      }
    },
    onDblClick: function () {
      this.$refs.fullscreen.manageFullscreen();
    },
    onContainerMousemove: function () {
      clearTimeout(this.timeout);
      this.manageToolbar();
    },
    onContainerMouseenter: function () {
      this.active.toolbar = true;
    },
    onContainerMouseleave: function () {
      if (this.status.running && !this.active.configuration) {
        this.active.toolbar = false;
      }
    },
    onClickClose: function () {
      this.$refs.video.pause();

      this.feature.undock = false;
      this.active.undocked = false;
    },
    onClickConfiguration: function () {
      this.active.configuration = !this.active.configuration;
      if (this.active.configuration) {
        clearTimeout(this.timeout);
      } else {
        this.manageToolbar();
      }
    },
    onClickPopup: async function () {
      this.active.configuration = false;
      if (this.$refs.video !== document.pictureInPictureElement) {
        await this.$refs.video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    },
    bind: function () {
      const video = this.$refs.video;
      video.addEventListener(
        "leavepictureinpicture",
        this.handleExitPip,
        false
      );
      video.addEventListener(
        "enterpictureinpicture",
        this.handleEnterPip,
        false
      );

      window.addEventListener("scroll", this.handleWindowScroll);
      window.addEventListener("keydown", this.handleWindowKeydown);
    },
    manageState: function () {
      if (this.status.loaded) {
        this.status.running
          ? this.$refs.video.pause()
          : this.$refs.video.play();
      }
    },
    manageToolbar: function () {
      if (this.status.running) {
        this.active.toolbar = true;
        this.timeout = setTimeout(() => {
          if (!this.active.configuration && this.active.volume) {
            this.active.toolbar = false;
          }
        }, 4000);
      }
    },
    handleEnterPip: function () {
      this.active.pip = true;
    },
    handleExitPip: function () {
      this.active.pip = false;
    },
    handleWindowKeydown: function (event) {
      if (this.status.running) {
        if (this.$refs.video === document.activeElement) {
          const keycode = this.$utils.keycode;
          event.preventDefault();
          const key = event.which;
          switch (key) {
            case keycode.k:
            case keycode.space:
              this.manageState();
              break;
            case keycode.f:
              this.$children[2].manageFullscreen();
              break;
            case keycode.m:
              this.$children[1].manageVolume();
              break;
            case keycode.up:
              this.data.volume = Math.min((this.data.volume += 0.1), 1);
              break;
            case keycode.down:
              this.data.volume = Math.max((this.data.volume -= 0.1), 0);
              break;
            case keycode.left:
              this.data.time = Math.max((this.data.time -= 5), 0);
              this.$refs.video.currentTime = this.data.time;
              break;
            case keycode.right:
              this.data.time = Math.min(
                (this.data.time += 5),
                this.data.duration
              );
              this.$refs.video.currentTime = this.data.time;
              break;
          }
        }
      }
    },
    handleWindowScroll: function () {
      if (this.feature.undock && this.status.running) {
        if (this.$utils.node.inViewport(this.$el)) {
          this.active.undocked = false;
          this.$el.removeAttribute("style");
        } else {
          this.active.undocked = true;
          this.active.configuration = false;
          this.$el.style.height = `${this.$el.clientHeight}px`;
        }
      }
    },
  },
};
</script>
