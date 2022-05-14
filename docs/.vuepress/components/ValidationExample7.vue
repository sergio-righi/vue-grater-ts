<template>
  <gv-row>
    <gv-col>
      <gv-input v-validation="{ required: required, ...validation }" placeholder="some hint for example" />
    </gv-col>
    <gv-col>
      <gv-flexbox>
        <gv-gap lg>
          <gv-switch v-model="error" bg="red" color="white">
            <template #on>
              error
            </template>
            <template #off>
              success
            </template>
          </gv-switch>
          <gv-switch v-model="required" bg="teal" color="white">
            <template #on>
              required
            </template>
            <template #off>
              optional
            </template>
          </gv-switch>
        </gv-gap>
      </gv-flexbox>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      required: false
    };
  },
  computed: {
    validation() {
      return { error: { value: this.error, message: "custom error message" } };
    }
  }
};
</script>
