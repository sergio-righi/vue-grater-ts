<template>
  <div class="ph-row" :class="{ empty: empty, thick: thick }"></div>
</template>

<script>
export default {
  name: "gv-placeholder-row",
  props: {
    empty: Boolean,
    thick: Boolean
  }
};
</script>
