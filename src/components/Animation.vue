<template>
  <div
    class="gv-animation"
    :class="[name, { animatable: !animated, animated: animated }]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-animation",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      animated: false,
    };
  },
  mounted() {
    this.checkState();
    window.addEventListener("scroll", this.handleWindowScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  },
  methods: {
    checkState: function () {
      if (!this.animated && this.$utils.node.inViewport(this.$el)) {
        this.animated = true;
        window.removeEventListener("scroll", this.handleWindowScroll);
      }
    },
    handleWindowScroll: function () {
      this.checkState();
    },
  },
};
</script>
