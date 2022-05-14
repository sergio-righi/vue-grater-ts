<template>
  <gv-row>
    <gv-col>
      <gv-form-group>
        <!-- <gv-input label="Range" v-validation.number="{ range: [15, 30] }" /> -->
        <gv-picker v-model="xxx" v-validation.required locale="en-CA" />
      </gv-form-group>
    </gv-col>
    <gv-col>
      <gv-form-group>
        <gv-select
          label="Required"
          v-validation.required
          placeholder="Select an option"
        >
          <option value="1">First</option>
          <option value="2">Second</option>
          <option value="3">Thrid</option>
        </gv-select>
      </gv-form-group>
    </gv-col>
    <gv-col>
      <gv-form-group>
        <gv-input
          label="Max length"
          multiline
          v-validation="{ maxLength: 50 }"
        />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      xxx: null
    };
  }
};
</script>
