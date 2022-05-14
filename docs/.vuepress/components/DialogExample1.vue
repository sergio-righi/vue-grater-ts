<template>
  <gv-row>
    <gv-col>
      <gv-button @onclick="clickCallback">Show</gv-button>
      <gv-dialog ref="dialog">
        <gv-dialog-item>
          <template #header>
            Lorem ipsum dolor sit amet
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget consequat odio.
            </p>
          </template>
        </gv-dialog-item>
      </gv-dialog>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  methods: {
    clickCallback: function() {
      this.$refs.dialog.open();
    }
  }
};
</script>
