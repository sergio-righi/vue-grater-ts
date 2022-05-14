<template>
  <div
    class="gv-position"
    :class="[
      background,
      fontColor,
      {
        sm: sm,
        md: md,
        lg: lg,
        gap: gap,
        top: top,
        right: right,
        center: center,
        overlay: overlay,
        vertical: vertical,
        horizontal: horizontal,
      },
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
  name: "gv-position",
  props: {
    bg: String,
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    gap: Boolean,
    top: Boolean,
    color: String,
    right: Boolean,
    center: Boolean,
    overlay: Boolean,
    vertical: Boolean,
    horizontal: Boolean,
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
