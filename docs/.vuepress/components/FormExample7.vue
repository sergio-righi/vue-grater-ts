<template>
  <gv-form-group label="Lorem ipsum dolor sit amet">
    <gv-row>
      <gv-col :sm="6" :md="4">
        <gv-input-box v-model="input" :val="1"> Selected </gv-input-box>
      </gv-col>
      <gv-col :sm="6" :md="4">
        <gv-input-box v-model="input" :val="2" disabled>
          Disabled
        </gv-input-box>
      </gv-col>
      <gv-col :sm="6" :md="4">
        <gv-input-box v-model="input" :val="3"> Unchecked </gv-input-box>
      </gv-col>
    </gv-row>
  </gv-form-group>
</template>

<script>
export default {
  data() {
    return {
      input: [1],
    };
  },
};
</script>
