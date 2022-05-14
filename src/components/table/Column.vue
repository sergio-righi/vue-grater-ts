<template>
  <td :class="{ fit: fit, active: active }">
    <slot />
  </td>
</template>

<script>
export default {
  name: "gv-td",
  props: {
    fit: Boolean,
    active: Boolean
  }
};
</script>
