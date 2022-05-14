<template>
  <gv-link
    v-if="hasParent"
    class="gv-item"
    :class="{ header: header, selected: bselected }"
    :href="href"
    :target="target"
    @click.native="onClick"
    @mousedown.native="onMousedown"
  >
    <slot />
  </gv-link>
</template>

<script>
export default {
  name: "gv-dropdown-item",
  props: {
    href: [String, Object, Function],
    target: {
      type: String,
      default: "_self"
    },
    header: Boolean,
    selected: Boolean
  },
  data() {
    return {
      bselected: this.selected
    };
  },
  watch: {
    selected(val) {
      this.bselected = val;
    }
  },
  computed: {
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-dropdown";
    }
  },
  methods: {
    onClick: function(event) {
      this.$parent.close();
      this.$emit("onclick", event);
    },
    onMousedown: function(event) {
      this.$emit("onmousedown", event);
    }
  }
};
</script>
