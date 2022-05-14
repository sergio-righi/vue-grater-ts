<template>
  <gv-row>
    <gv-col>
      <gv-button @onclick="clickCallback">Show</gv-button>
      <gv-dialog ref="dialog" @onclose="closeCallback">
        <gv-dialog-item>
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
            <gv-input-box>
              Do not show it again
            </gv-input-box>
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
    },
    closeCallback: function(response) {
      console.log(response);
    }
  }
};
</script>
