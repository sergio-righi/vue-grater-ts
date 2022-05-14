<template>
  <div
    class="gv-volume"
    :class="{ active: active && !isMobile }"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <div
      class="gv-control"
      :class="{
        'volume-off': volume === 0,
        'volume-low': volume <= 0.3,
        'volume-medium': volume <= 0.7,
        'volume-high': volume > 0.7,
      }"
      @click="onClick"
    ></div>
    <div class="gv-progress" @mousedown="onMousedown">
      <div class="gv-bar" :style="{ width: volume * 100 + '%' }">
        <div class="gv-pointer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-video-volume",
  props: {
    value: Number,
  },
  data() {
    return {
      temp: null,
      active: false,
      prevent: false,
      volume: this.value,
    };
  },
  computed: {
    isMobile() {
      return this.$utils.boolean.isMobile();
    },
  },
  methods: {
    onClick: function () {
      if (this.volume === 0) {
        this.volume = this.temp ?? 1;
        this.temp = null;
      } else {
        this.temp = this.volume;
        this.volume = 0;
      }
    },
    onMouseleave: function () {
      if (!this.prevent) this.active = false;
    },
    onMouseenter: function () {
      this.active = true;
    },
    onMousedown: function (event) {
      const self = this;
      const target = event.target.classList.contains("gv-progress")
        ? event.target
        : event.target.closest(".gv-progress");
      const width = target.clientWidth;
      const progress = target.lastElementChild;
      const startX = event.pageX || event.touches[0].pageX;
      const { left } = this.$utils.node.offset(progress);
      const diff = Math.min(startX - left, width);

      this.prevent = true;

      this.$parent.active.volume = true;
      this.volume = Math.max(diff / width, 0);

      window.addEventListener("mouseup", onMouseup);
      window.addEventListener("mousemove", onMousemove);

      function onMousemove(event) {
        const currentX = event.pageX || event.touches[0].pageX;
        const position = this.$utils.number.between(
          currentX - startX + diff,
          0,
          width
        );

        self.volume = position / width;
      }

      function onMouseup() {
        self.active = false;
        self.prevent = false;
        self.$parent.active.volume = false;

        window.removeEventListener("mouseup", onMouseup);
        window.removeEventListener("mousemove", onMousemove);
      }
    },
  },
  watch: {
    value(val) {
      this.volume = val;
    },
    volume(val) {
      this.$emit("input", val);
    },
  },
};
</script>
