<template>
  <div
    class="gv-space"
    :class="{
      x: x,
      y: y,
      sm: sm,
      md: md,
      lg: lg,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      margin: margin || onlyMargin,
      'no-padding': onlyMargin
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-space",
  props: {
    x: Boolean,
    y: Boolean,
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    top: Boolean,
    left: Boolean,
    right: Boolean,
    bottom: Boolean,
    margin: Boolean,
    onlyMargin: Boolean
  }
};
</script>
