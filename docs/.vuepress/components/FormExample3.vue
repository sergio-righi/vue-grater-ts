<template>
  <gv-form-group>
    <gv-input
      multiline
      v-model="input"
      :maxLength="250"
      label="Name"
    />
  </gv-form-group>
</template>

<script>
export default {
  data() {
    return {
      input: null
    };
  }
};
</script>
