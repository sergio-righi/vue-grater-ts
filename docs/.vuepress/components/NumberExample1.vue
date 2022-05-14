<template>
  <gv-row>
    <gv-col>
      <gv-form-group>
        <gv-number
          label="Default"
          v-model="value"
          :min="0"
          :max="100"
          :step="1"
        />
      </gv-form-group>
      <gv-form-group>
        <gv-number
          label="Error"
          :min="0"
          :max="100"
          :step="1"
          :value="error"
          error
        />
      </gv-form-group>
      <gv-form-group>
        <gv-number
          label="Disabled"
          :min="0"
          :max="100"
          :step="1"
          :value="20"
          disabled
        />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      error: 15,
      value: 26
    };
  }
};
</script>
