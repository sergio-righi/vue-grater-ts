<template>
  <div class="gv-gap" :class="{ sm: sm, lg: lg }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-gap",
  props: {
    sm: Boolean,
    lg: Boolean
  }
};
</script>
