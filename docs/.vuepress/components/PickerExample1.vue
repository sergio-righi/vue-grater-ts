<template>
  <gv-row>
    <gv-col>
      <gv-picker v-model="value" locale="en-CA" label="Date" />
    </gv-col>
    <gv-col>
      <gv-picker v-model="value" locale="en-CA" label="Date" error />
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      value: null
    };
  }
};
</script>
