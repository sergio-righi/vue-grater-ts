<template>
  <div
    :class="{
      'd-flex': !inline,
      'h-inherit': flex,
      'w-inherit': flex,
      'd-inline-flex': inline
    }"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-flexbox",
  props: {
    flex: Boolean,
    inline: Boolean,
    direction: {
      type: String,
      default: "row",
      validator: value =>
        ["row", "row-reverse", "column", "column-reverse"].includes(value)
    },
    wrap: {
      type: String,
      default: "nowrap",
      validator: value => ["nowrap", "wrap", "wrap-reverse"].includes(value)
    },
    justify: {
      type: String,
      default: "flex-start",
      validator: value =>
        [
          "flex-start",
          "flex-end",
          "center",
          "space-between",
          "space-around",
          "space-evenly"
        ].includes(value)
    },
    align: {
      type: String,
      default: "stretch",
      validator: value =>
        [
          "stretch",
          "flex-start",
          "flex-end",
          "center",
          "baseline",
          "start",
          "end",
          "self-start",
          "self-end"
        ].includes(value)
    },
    basis: {
      type: String,
      default: "auto"
    },
    grow: {
      type: [Number, String],
      default: 0,
      validator: value => !Number.isNaN(value) && Number(value) >= 0
    },
    shrink: {
      type: [Number, String],
      default: 1,
      validator: value => !Number.isNaN(value) && Number(value) >= 0
    },
    order: {
      type: [Number, String],
      validator: value => !Number.isNaN(value)
    }
  },
  computed: {
    style() {
      return {
        "flex-direction":
          "direction" in this.$options.propsData ? this.direction : null,
        "flex-wrap": "wrap" in this.$options.propsData ? this.wrap : null,
        "justify-content":
          "justify" in this.$options.propsData ? this.justify : null,
        "align-items": "align" in this.$options.propsData ? this.align : null,
        "flex-basis": "basis" in this.$options.propsData ? this.basis : null,
        "flex-grow": "grow" in this.$options.propsData ? this.grow : null,
        "flex-shrink": "shrink" in this.$options.propsData ? this.shrink : null,
        order: "order" in this.$options.propsData ? this.order : null
      };
    }
  }
};
</script>
