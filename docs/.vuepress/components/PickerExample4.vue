<template>
  <gv-picker
    v-model="value"
    is-time
    :is-date="false"
    locale="en-CA"
    label="Clock"
  />
</template>

<script>
export default {
  data() {
    return {
      value: new Date(2012, 2, 13, 12, 30)
    };
  }
};
</script>
