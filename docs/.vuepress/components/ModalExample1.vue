<template>
  <gv-row>
    <gv-col>
      <gv-button @onclick="clickCallback">Show</gv-button>
      <gv-modal ref="modal">
        <template #header>Lorem ipsum dolor sit amet</template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            consequat odio. Suspendisse sit amet nibh id nibh vestibulum
            facilisis. Ut at purus tempus, pellentesque orci at, tincidunt
            lacus. Duis rhoncus quis neque a dignissim.
          </p>
        </template>
        <template #footer>Lorem ipsum dolor sit amet</template>
      </gv-modal>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  methods: {
    clickCallback() {
      this.$refs.modal.open();
    }
  }
};
</script>
