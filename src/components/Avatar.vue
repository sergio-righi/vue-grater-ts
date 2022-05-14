<template>
  <div
    class="gv-avatar"
    :class="[
      background,
      fontColor,
      { sm: sm, lg: lg, round: round, square: square, outline: outline },
    ]"
  >
    <div class="gv-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-avatar",
  props: {
    bg: String,
    sm: Boolean,
    lg: Boolean,
    color: String,
    round: Boolean,
    square: Boolean,
    outline: Boolean,
  },
  computed: {
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
  },
};
</script>
