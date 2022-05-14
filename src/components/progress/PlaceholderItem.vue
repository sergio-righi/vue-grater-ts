<template>
  <div v-if="image" class="ph-image" :class="{ sm: sm }"></div>
  <div v-else-if="gap" class="ph-gap"></div>
  <div v-else-if="avatar" class="ph-avatar" :class="{ sm: sm }"></div>
</template>

<script>
export default {
  name: "gv-placeholder-item",
  props: {
    sm: Boolean,
    gap: Boolean,
    image: Boolean,
    avatar: Boolean
  }
};
</script>
