<template>
  <gv-row>
    <gv-col>
      <gv-button @onclick="clickCallback">Show</gv-button>
      <gv-modal
        ref="modal"
        :active="active"
        :ready="ready"
        @onclose="closeCallback"
      >
        <template #header>Lorem ipsum dolor sit amet</template>
        <template #content>
          <div v-html="content"></div>
        </template>
        <template #footer>Lorem ipsum dolor sit amet</template>
      </gv-modal>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      ready: false,
      active: false,
      content: null
    };
  },
  methods: {
    clickCallback() {
      this.active = !this.active;
      setInterval(() => {
        this.content = `<p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          consequat odio. Suspendisse sit amet nibh id nibh vestibulum
          facilisis. Ut at purus tempus, pellentesque orci at, tincidunt lacus.
          Duis rhoncus quis neque a dignissim.
        </p>`;
        this.ready = true;
      }, 1500);
    },
    closeCallback() {
      this.ready = false;
      this.active = false;
    }
  }
};
</script>
