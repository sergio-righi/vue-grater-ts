<template>
  <div :class="{ 'ph-h-center': horizontal, 'ph-v-center': vertical }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-placeholder-align",
  props: {
    vertical: Boolean,
    horizontal: Boolean
  }
};
</script>
