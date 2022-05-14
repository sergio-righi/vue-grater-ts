<template>
  <gv-row>
    <gv-col>
      <gv-input id="element_id" label="Name" readonly value="Myla Kane">
        <template #trailing>
          <gv-button
            primary
            sm
            v-clipboard.target.value="'#element_id'"
            @oncopy="copyCallback"
          >
            <gv-icon value="clipboard" />
          </gv-button>
        </template>
      </gv-input>
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
