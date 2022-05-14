<template>
  <span class="gv-highlight">
    <slot />
  </span>
</template>

<script>
export default {
  name: "gv-highlight",
  mounted() {
    this.checkState();
    window.addEventListener("scroll", this.handleWindowScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  },
  methods: {
    checkState: function () {
      if (this.$utils.node.inViewport(this.$el)) {
        window.removeEventListener("scroll", this.handleWindowScroll);
        this.$el.classList.add("highlighted");
      }
    },
    handleWindowScroll: function () {
      this.checkState();
    },
  },
};
</script>
