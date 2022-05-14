<template>
  <gv-link
    :tabindex="focusable ? 0 : null"
    :target="target"
    class="gv-chip"
    :href="href"
    :class="[
      background,
      fontColor,
      {
        lg: lg,
        sm: sm,
        round: round,
        square: square,
        outline: outline,
        active: active,
      },
    ]"
    :style="styleChip"
  >
    <div v-if="hasLeading" class="gv-leading">
      <slot name="leading" />
    </div>
    <div v-if="hasContent" class="gv-label">
      <slot name="content" />
    </div>
    <gv-button
      v-if="dismissible"
      class="gv-trailing"
      sm
      plain
      @onclick="onDismiss"
    >
      <gv-icon value="close-circle" />
    </gv-button>
  </gv-link>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-chip",
  props: {
    href: [String, Object, Function],
    target: {
      type: String,
      default: "_self",
    },
    bg: String,
    sm: Boolean,
    lg: Boolean,
    color: String,
    round: Boolean,
    square: Boolean,
    message: String,
    active: Boolean,
    outline: Boolean,
    focusable: Boolean,
    dismissible: Boolean,
  },
  computed: {
    background() {
      return this.outline ? null : color.getBackground(this.bg);
    },
    fontColor() {
      return this.outline ? null : color.getFontColor(this.color);
    },
    hasLeading() {
      return !!this.$slots.leading;
    },
    hasContent() {
      return !!this.$slots.content;
    },
    styleChip() {
      return this.bg && this.outline
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
    onDismiss: function () {
      if (this.message) {
        const confirm = window.confirm(this.message);
        if (!confirm) return;
      }
      this.$emit("ondismiss", this.$el);
      this.$el.parentNode.removeChild(this.$el);
    },
  },
};
</script>
