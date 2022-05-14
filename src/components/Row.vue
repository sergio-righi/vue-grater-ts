<template>
  <div class="row" :class="{ condensed: condensed, inherit: inherit }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-row",
  props: {
    inherit: Boolean,
    condensed: Boolean
  }
};
</script>
