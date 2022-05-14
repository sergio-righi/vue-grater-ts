<template>
  <gv-row>
    <gv-col>
      <gv-snackbar ref="snackbar" :message="message" />
      <gv-button @onclick="snackbar.show()">Show</gv-button>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      message: "Lorem ipsum dolor sit amet"
    };
  },
  computed: {
    snackbar() {
      return this.$refs.snackbar;
    }
  }
};
</script>
