<template>
  <gv-row>
    <gv-col>
      <gv-button @onclick="clickCallback">Show</gv-button>
      <gv-dialog ref="dialog" dismissible>
        <gv-dialog-item required>
          <template #header>
            Lorem ipsum dolor sit amet
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget consequat odio. Suspendisse sit amet nibh id nibh vestibulum
              facilisis. Ut at purus tempus, pellentesque orci at, tincidunt
              lacus. Duis rhoncus quis neque a dignissim.
            </p>
          </template>
          <template #footer>
            <gv-button @onclick="dialog.close()" primary>Agree</gv-button>
          </template>
        </gv-dialog-item>
      </gv-dialog>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  computed: {
    dialog: function() {
      return this.$refs.dialog;
    }
  },
  methods: {
    clickCallback: function() {
      this.dialog.open();
    }
  }
};
</script>
