<template>
  <div
    class="gv-story"
    :class="{'c-pointer': !isDone}"
    :style="{height: `${containerHeight}px`}"
  >
    <div v-if="!isDone" class="gv-progress">
      <div class="gv-item" v-for="(item, index) in items" :key="item.id">
        <div
          class="gv-bar"
          :style="{
            transform:
              currentIndex > index
                ? 'scale(1, 1)'
                : currentIndex === index
                ? `scale(${progress}, 1)`
                : 'scale(0, 1)',
          }"
        ></div>
      </div>
    </div>
    <div class="gv-content">
      <slot v-if="hasFallback" name="fallback" />
      <div v-if="!isDone" class="gv-wrapper" @click="onClick">
        <slot />
      </div>
    </div>
    <div v-if="!isDone" class="gv-toolbar">
      <gv-icon
        v-if="video"
        :value="muted ? 'volume-variant-off' : 'volume-high'"
        @onclick="mute"
      />
      <gv-icon :value="paused ? 'play' : 'pause'" @onclick="pause" />
      <slot v-if="hasToolbar" name="toolbar" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'gv-story',
  props: {
    ratioX: {
      default: 9,
      type: [Number, String],
    },
    ratioY: {
      default: 16,
      type: [Number, String],
    },
    duration: {
      default: 3000,
      type: Number,
    },
  },
  data() {
    return {
      width: 0,
      frame: 0,
      progress: 0,
      muted: true,
      video: false,
      paused: false,
      currentIndex: 0,
      animation: null,
      containerHeight: 0,
    };
  },
  mounted() {
    this.bind();
    this.calculateHeight();
    this.run();
  },
  beforeDestroy() {
    this.unbind();
  },
  computed: {
    isDone() {
      return this.items.length === this.currentIndex;
    },
    hasFallback() {
      return this.isDone && !!this.$slots.fallback;
    },
    hasToolbar() {
      return !!this.$slots.toolbar;
    },
    items() {
      return this.$slots.default.filter((item) => item.tag);
    },
  },
  methods: {
    bind: function () {
      window.addEventListener('resize', this.calculateHeight);
    },
    unbind: function () {
      window.removeEventListener('resize', this.calculateHeight);
    },
    indexOf: function (el) {
      return this.$utils.node.indexOf(el);
    },
    run: function () {
      const instance = this.items[this.currentIndex].componentInstance;
      this.video = instance.isVideo;
      this.muted = instance.isMuted;
      const interval = setInterval(() => {
        if (instance.isImage || (instance.isVideo && instance.duration)) {
          if (instance.isVideo) {
            instance.play();
          }
          this.animateProgress(instance.duration ?? this.duration);
          clearInterval(interval);
        }
      }, 100);
    },
    pause: function () {
      const instance = this.items[this.currentIndex].componentInstance;
      !this.paused ? clearInterval(this.animation) : this.run();
      this.paused = !this.paused;
      if (instance && instance.isVideo) {
        this.paused ? instance.pause() : instance.play();
      }
    },
    mute: function () {
      const instance = this.items[this.currentIndex].componentInstance;
      if (instance && instance.isVideo) {
        this.muted = !this.muted;
        this.muted ? instance.mute() : instance.unmute();
      }
    },
    move: function (direction) {
      clearInterval(this.animation);
      const instance = this.items[this.currentIndex].componentInstance;
      if (instance && instance.isVideo) {
        instance.restart();
      }
      direction ? this.next() : this.prev();
      this.paused = false;
      this.progress = 0;
      this.frame = 0;
      !this.isDone ? this.run() : null;
    },
    prev: function () {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
    },
    next: function () {
      this.currentIndex = Math.min(this.items.length, this.currentIndex + 1);
    },
    restart: function () {
      this.frame = 0;
      this.progress = 0;
      this.paused = false;
      this.currentIndex = 0;
      this.run();
    },
    calculateHeight: function () {
      ({width: this.width} = this.$el.getBoundingClientRect());
      this.containerHeight = Math.round(
        (this.width / Number(this.ratioX)) * Number(this.ratioY),
      );
    },
    animateProgress: function (duration) {
      const countTo = 1;
      const frameDuration = 1000 / 60;
      const animationDuration = duration;
      const totalFrames = Math.round(animationDuration / frameDuration);

      this.animation = setInterval(() => {
        this.frame++;
        this.progress = Math.min(countTo, countTo * (this.frame / totalFrames));

        if (this.frame === totalFrames || this.progress === countTo) {
          this.move(true);
        }
      }, frameDuration);
    },
    onClick: function ({target, clientX}) {
      const {left} = target.getBoundingClientRect();
      this.move(this.width / 2 < clientX - left);
    },
  },
  watch: {
    isDone(val) {
      if (val) {
        this.$emit('ondone');
      }
    },
  },
};
</script>
