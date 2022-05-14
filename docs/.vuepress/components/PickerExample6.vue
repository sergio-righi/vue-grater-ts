<template>
  <gv-picker v-model="value" is-time is-popup locale="en-CA" label="Date" />
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    };
  }
};
</script>
