<template>
  <div class="gv-form-group" :class="{ error: b.error, required: required }">
    <label v-if="label">{{ label }}</label>
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-form-group",
  props: {
    label: String,
    error: Boolean,
    required: Boolean
  },
  data() {
    return {
      b: {
        error: this.error
      }
    };
  },
  watch: {
    error(val) {
      this.b.error = val;
    }
  }
};
</script>
