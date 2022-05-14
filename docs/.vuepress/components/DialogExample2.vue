<template>
  <gv-row>
    <gv-col>
      <gv-button @onclick="clickCallback">Show</gv-button>
      <gv-dialog :active="active" @onclose="closeCallback" dismissible>
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
      </gv-dialog>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  methods: {
    clickCallback: function() {
      this.active = !this.active;
    },
    closeCallback: function() {
      this.active = false;
    }
  }
};
</script>
