<template>
  <div class="gv-item" :class="{ title: title }" :data-section="letter">
    <div class="gv-header" v-if="!hidden">{{ header }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-indexer-item",
  props: {
    header: {
      type: String,
      required: true,
    },
    hidden: Boolean,
    title: Boolean,
  },
  computed: {
    letter() {
      return this.$utils.string
        .normalize(this.header.substring(0, 1))
        .toUpperCase();
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-indexer";
    },
  },
  mounted() {
    if (this.hasParent) {
      this.$parent.ready(this);
    }
  },
};
</script>
