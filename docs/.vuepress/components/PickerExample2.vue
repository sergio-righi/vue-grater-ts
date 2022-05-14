<template>
  <gv-picker v-model="value" is-year locale="en-CA" label="Year" />
</template>

<script>
export default {
  data() {
    return {
      value: 2020
    };
  }
};
</script>
