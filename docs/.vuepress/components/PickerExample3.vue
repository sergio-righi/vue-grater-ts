<template>
  <gv-picker v-model="value" is-month locale="en-CA" label="Month" />
</template>

<script>
export default {
  data() {
    return {
      value: 5
    };
  }
};
</script>
