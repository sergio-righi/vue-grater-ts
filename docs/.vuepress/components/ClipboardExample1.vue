<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-icon
          value="email"
          size="32px"
          @oncopy="copyCallback"
          v-clipboard="'emailaddress@example.com'"
        />
        <gv-icon
          value="phone"
          size="32px"
          v-clipboard="'+1 999 999 9999'"
          @oncopy="copyCallback"
        />
      </gv-flexbox>
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
