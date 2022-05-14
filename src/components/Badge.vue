<template>
  <div class="gv-badge">
    <slot />
    <div
      v-if="hasIcon"
      class="gv-badge-icon"
      :class="[
        background,
        fontColor,
        {
          square: square,
          circle: isCircle,
          round: round,
          dot: isDot,
          left: left,
          bottom: bottom,
          inline: inline,
          overlap: overlap,
        },
      ]"
    >
      {{ counter }}
    </div>
  </div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-badge",
  props: {
    bg: String,
    color: String,
    value: [String, Number],
    dot: Boolean,
    left: Boolean,
    bottom: Boolean,
    inline: Boolean,
    round: Boolean,
    square: Boolean,
    overlap: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
    hasIcon() {
      return this.value > 0 || this.isDot;
    },
    counter() {
      return typeof this.value === "string"
        ? this.value
        : this.value > 0
        ? this.value
        : null;
    },
    isCircle() {
      return !this.square && !this.round;
    },
    isDot() {
      return this.dot && !this.value && !this.inline;
    },
  },
};
</script>
