<template>
  <span v-if="isText" class="gv-animate-caret">{{
    value.substring(from, to)
  }}</span>
  <span v-else>{{ to }}<slot /></span>
</template>

<script>
import { animation } from "@/utils";
export default {
  name: "gv-animate",
  props: {
    from: {
      default: 0,
      type: Number,
    },
    value: {
      default: 0,
      type: [String, Number],
    },
    duration: {
      type: Number,
      default: 3000,
    },
    name: {
      type: String,
      default: "ease-out-circ",
    },
    scroll: Boolean,
  },
  data() {
    return {
      to: 0,
    };
  },
  computed: {
    fvalue() {
      return this.isText ? this.value.length : this.value;
    },
    isInteger() {
      return this.value % 1 === 0;
    },
    isText() {
      return /[a-zA-Z]+/g.test(this.value);
    },
  },
  mounted() {
    if (this.scroll) {
      this.checkState();
      window.addEventListener("scroll", this.handleWindowScroll);
    } else {
      this.start();
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  },
  methods: {
    animate: function (easing) {
      if (typeof easing !== "function") return;
      const frameDuration = 1000 / 60;
      const animationDuration = this.duration;
      const totalFrames = Math.round(animationDuration / frameDuration);

      let frame = this.from;
      const countTo = this.fvalue;
      const counter = setInterval(() => {
        frame++;
        const progress = easing(frame / totalFrames);
        const currentCount = this.isInteger
          ? Math.round(countTo * progress)
          : (countTo * progress).toFixed(2);
        if (this.to !== currentCount) {
          this.to = currentCount;
        }
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    },
    start: function () {
      if (this.isText) {
        this.animate(animation.easeInSine);
      } else {
        if (this.name in animation.animations) {
          this.animate(animation.animations[this.name]);
        } else {
          this.to = this.fvalue;
        }
      }
    },
    checkState: function () {
      if (this.$utils.node.inViewport(this.$el)) {
        window.removeEventListener("scroll", this.handleWindowScroll);
        this.start();
      }
    },
    handleWindowScroll: function () {
      this.checkState();
    },
  },
};
</script>
