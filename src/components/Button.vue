<template>
  <component
    :is="component"
    class="gv-btn"
    :href="href"
    :type="this.href ? null : type"
    :class="[
      background,
      fontColor,
      {
        sm: sm,
        lg: lg,
        flat: flat,
        info: info,
        plain: plain,
        round: round,
        error: error,
        muted: muted,
        inline: inline,
        square: square,
        stretch: stretch,
        outline: outline,
        process: process,
        success: success,
        warning: warning,
        primary: primary,
        active: selected,
        checked: checked,
      },
    ]"
    :style="styleButton"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-button",
  props: {
    bg: String,
    sm: Boolean,
    lg: Boolean,
    href: String,
    color: String,
    flat: Boolean,
    info: Boolean,
    plain: Boolean,
    round: Boolean,
    error: Boolean,
    muted: Boolean,
    inline: Boolean,
    submit: Boolean,
    square: Boolean,
    active: Boolean,
    outline: Boolean,
    process: Boolean,
    primary: Boolean,
    success: Boolean,
    warning: Boolean,
    checked: Boolean,
    stretch: Boolean,
  },
  data() {
    return {
      selected: false,
    };
  },
  watch: {
    active(val) {
      this.selected = val;
      this.toggle(this.selected);
    },
  },
  mounted() {
    this.selected = this.active;
    this.toggle(this.selected);
  },
  computed: {
    type() {
      return this.submit ? "submit" : "button";
    },
    component() {
      return this.href ? "gv-link" : "button";
    },
    background() {
      return this.outline ? null : color.getBackground(this.bg);
    },
    fontColor() {
      return this.outline ? null : color.getFontColor(this.color);
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-button-group";
    },
    styleButton() {
      return this.bg && !this.outline
        ? [{ "--current-background-color": `var(--gv-color-${this.bg})` }]
        : this.bg && this.outline
        ? [
            {
              "--current-color": `var(--gv-color-${this.bg})`,
              "--current-color-focus": `var(--gv-color-${this.color})`,
              "--current-border-color": `var(--gv-color-${this.bg})`,
            },
          ]
        : null;
    },
  },
  methods: {
    onClick: function (event) {
      this.toggle(!this.selected);
      this.$emit("onclick", event);
    },
    toggle: function (state) {
      if (this.hasParent) this.$parent.toggle(this.$el, state);
    },
    select: function (state) {
      this.selected = state;
    },
  },
};
</script>
