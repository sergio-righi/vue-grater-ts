<template>
  <gv-row>
    <gv-col>
      <gv-button @onclick="clickCallback">Show</gv-button>
      <gv-dialog ref="dialog" @onmove="nextCallback" @onclose="closeCallback">
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
        </gv-dialog-item>
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
            <gv-button @onclick="dialog.close()">No</gv-button>
            <gv-button primary @onclick="dialog.close()">Yes</gv-button>
          </template>
        </gv-dialog-item>
        <gv-dialog-item embed>
          <template #content>
            <gv-embed
              src="https://www.youtube.com/embed/zcBZgGwbDxA?rel=0"
              widescreen
            />
          </template>
        </gv-dialog-item>
        <gv-dialog-item embed>
          <template #header>
            Lorem ipsum dolor sit amet
          </template>
          <template #content>
            <gv-image src="/img/landscape/img_11.jpg" />
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
    },
    nextCallback: function(response) {
      console.log(response);
    },
    closeCallback: function(response) {
      console.log(response);
    }
  }
};
</script>
