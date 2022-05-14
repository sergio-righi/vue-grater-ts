<template>
  <div
    ref="progress"
    class="gv-progress"
    :class="{ active: active.progress, dragging: is.dragging }"
    @mousedown="onMousedown"
    @touchstart="onMousedown"
  >
    <div
      class="gv-padding"
      @mousemove="onMousemove"
      @touchmove="onMousemove"
      @mouseleave="onMouseleave"
      @touchend="onMouseleave"
    ></div>
    <div class="gv-buffer" :style="{ width: buffer * 100 + '%' }"></div>
    <div ref="progressbar" class="gv-bar" :style="{ width: width + '%' }">
      <div class="gv-pointer"></div>
    </div>
    <div
      ref="frame"
      class="gv-frame"
      :class="{ active: active.frame }"
      :style="{ left: data.position + 'px' }"
      :aria-value="timeframe"
    ></div>
  </div>
</template>

<script>
export default {
  name: "gv-video-progress",
  props: {
    value: Number,
    buffer: Number,
    paused: Boolean,
    duration: Number,
  },
  data() {
    return {
      data: {
        frame: 0,
        position: 0,
        time: this.value,
      },
      active: {
        frame: false,
        progress: false,
      },
      is: {
        dragging: false,
      },
    };
  },
  computed: {
    width() {
      return (this.data.time / this.duration) * 100;
    },
    timeframe() {
      return this.$utils.number.toTimeString(this.data.frame);
    },
    frame() {
      return this.$refs.frame;
    },
    progressbar() {
      return this.$refs.progressbar;
    },
    progress() {
      return this.$refs.progress;
    },
    video() {
      return this.$parent.$refs.video;
    },
  },
  methods: {
    onMousedown: function (event) {
      event.preventDefault();

      const self = this;

      this.is.dragging = true;
      this.active.progress = true;

      const paused = this.paused;

      this.video.pause();

      const progress = this.progressbar;
      const width = event.target.clientWidth;
      const start = event.touches ? event.touches[0] : event;
      const { left } = this.$utils.node.offset(progress);
      const diff = Math.min(start.clientX - left, width);

      this.data.time = Math.max(diff / width, 0) * this.duration;
      this.video.currentTime = this.data.time;

      window.addEventListener("mouseup", onMouseup);
      window.addEventListener("touchend", onMouseup);
      window.addEventListener("mousemove", onMousemove);
      window.addEventListener("touchmove", onMousemove);

      function onMousemove(event) {
        const current = event.touches ? event.touches[0] : event;
        const position = self.$utils.number.between(
          current.clientX - start.clientX + diff,
          0,
          width
        );

        self.data.time = (position / width) * self.duration;
        self.video.currentTime = self.data.time;
      }

      function onMouseup() {
        self.is.dragging = false;
        self.active.progress = false;

        if (!paused) self.video.play();

        window.removeEventListener("mouseup", onMouseup);
        window.removeEventListener("touchend", onMouseup);
        window.removeEventListener("mousemove", onMousemove);
        window.removeEventListener("touchmove", onMousemove);
      }
    },
    onMousemove: function (event) {
      this.active.frame = true;
      this.active.progress = true;

      const width = this.progress.clientWidth;
      const { left } = this.progressbar.getBoundingClientRect();
      const position =
        (event.pageX || event.touches[0].pageX) - Math.round(left);
      this.data.frame = Math.floor((position / width) * this.duration);
      this.data.position = this.$utils.number.between(
        position - this.frame.clientWidth / 2,
        0,
        width - this.frame.clientWidth
      );
    },
    onMouseleave: function () {
      this.active.frame = false;
      this.active.progress = this.is.dragging;
    },
  },
  watch: {
    value(val) {
      this.data.time = val;
    },
    "data.time": function () {
      this.data.left = this.progressbar?.clientWidth + 12;
    },
  },
};
</script>
