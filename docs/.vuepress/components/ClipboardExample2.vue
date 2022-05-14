<template>
  <gv-row>
    <gv-col>
      <p v-clipboard.self @oncopy="copyCallback">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
        dignissim justo, id eleifend massa. Curabitur tellus tortor, ornare a
        metus bibendum, dictum dignissim ante. Donec sollicitudin condimentum
        nisl, sit amet rutrum justo aliquam in.
      </p>
      <gv-snackbar ref="snackbar" message="copied to the clipboard" />
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  computed: {
    snackbar() {
      return this.$refs.snackbar;
    }
  },
  methods: {
    copyCallback() {
      this.snackbar.show();
    }
  }
};
</script>
