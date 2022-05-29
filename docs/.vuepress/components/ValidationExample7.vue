<template>
  <gv-row>
    <form @submit.prevent="onSubmit">
      <gv-input v-validation.required />
      <form @submit.prevent="onSubmitNested">
        <gv-input v-validation.required />
        <gv-button submit>Inner</gv-button>
      </form>
      <br />
      <gv-button submit>Outter</gv-button>
    </form>
  </gv-row>
</template>

<script>
export default {
  methods: {
    onSubmit: function () {
      console.log('outter');
    },
    onSubmitNested: function () {
      console.log('inner');
    },
  },
};
</script>
