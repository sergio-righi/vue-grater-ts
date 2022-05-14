<template>
  <th :class="{ fit: fit, active: active }">
    {{ label }}
  </th>
</template>

<script>
export default {
  name: "gv-th",
  props: {
    prop: String,
    fit: Boolean,
    label: String,
    active: Boolean
  }
};
</script>
