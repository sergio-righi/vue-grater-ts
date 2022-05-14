<template>
  <gv-row>
    <gv-col>
      <gv-form-group label="Default">
        <gv-slider v-model="input" :min="1" :max="20" :step="1" />
      </gv-form-group>
      <gv-form-group label="Disabled">
        <gv-slider :max="100" :value="15" disabled />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      input: 15
    };
  }
};
</script>
