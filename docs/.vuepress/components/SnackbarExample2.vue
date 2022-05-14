<template>
  <gv-row>
    <gv-col>
      <gv-snackbar
        ref="snackbar"
        :timeout="0"
        :message="message"
        action="Undo"
        @onclick="clickCallback"
        @onshow="showCallback"
        @onhide="hideCallback"
      />
      <gv-button @onclick="snackbar.show()">Show</gv-button>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      message: "Lorem ipsum dolor sit amet"
    };
  },
  computed: {
    snackbar() {
      return this.$refs.snackbar;
    }
  },
  methods: {
    clickCallback() {},
    showCallback() {},
    hideCallback() {}
  }
};
</script>
