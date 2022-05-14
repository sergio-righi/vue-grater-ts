<template>
  <gv-link
    class="gv-item"
    :href="href"
    :target="target"
    @click.native.prevent="onClick"
  >
    <slot />
  </gv-link>
</template>

<script>
export default {
  name: "gv-fab-item",
  props: {
    href: [String, Object, Function],
    target: {
      type: String,
      default: "_self"
    }
  },
  computed: {
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-fab";
    }
  },
  methods: {
    onClick: function(event) {
      if (this.hasParent) {
        this.$parent.close();
        this.$emit("onclick", event);
      }
    }
  }
};
</script>
