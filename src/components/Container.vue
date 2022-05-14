<template>
  <div :class="[fluid ? 'container-fluid' : 'container', { inherit: inherit }]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-container",
  props: {
    fluid: Boolean,
    inherit: Boolean
  }
};
</script>
