<template>
  <div
    class="gv-divider"
    :class="[
      border,
      {
        sm: sm,
        md: md,
        lg: lg,
        gap: gap,
        vertical: vertical,
        horizontal: !vertical,
      },
    ]"
    :style="style"
  ></div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-divider",
  props: {
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    gap: Boolean,
    size: String,
    color: String,
    vertical: Boolean,
  },
  computed: {
    border() {
      return color.getBorderColor(this.color);
    },
    style() {
      return this.size ? { "border-width": this.size } : null;
    },
  },
};
</script>
