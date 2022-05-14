<template>
  <gv-form-group label="Lorem ipsum dolor sit amet">
    <gv-radio-group>
      <gv-col :sm="6" :md="4">
        <gv-input-box name="radio_group" v-model="input" :val="1" radio>
          Selected
        </gv-input-box>
      </gv-col>
      <gv-col :sm="6" :md="4">
        <gv-input-box name="radio_group" v-model="input" :val="2" disabled radio>
          Disabled
        </gv-input-box>
      </gv-col>
      <gv-col :sm="6" :md="4">
        <gv-input-box name="radio_group" v-model="input" :val="3" radio>
          Unchecked
        </gv-input-box>
      </gv-col>
    </gv-radio-group>
  </gv-form-group>
</template>

<script>
export default {
  data() {
    return {
      input: 3
    };
  }
};
</script>
