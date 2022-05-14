<template>
  <data :data-src="src" :data-resolution="resolution" />
</template>

<script>
export default {
  name: "gv-video-item",
  props: {
    src: {
      required: true
    },
    resolution: {
      type: String,
      required: true
    },
    selected: Boolean
  },
  computed: {
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-video";
    }
  },
  created() {
    if (this.hasParent) {
      this.$parent.append({ [this.resolution]: this.src });
    }
  }
};
</script>
