<template>
  <gv-link
    class="gv-card"
    :href="href"
    :target="target"
    :class="[
      background,
      fontColor,
      borderColor,
      { flex: flex, embed: embed, overflow: overflow },
    ]"
  >
    <div class="gv-header" v-if="hasHeader">
      <slot name="header" />
    </div>
    <div class="gv-content">
      <slot name="content" />
    </div>
    <div class="gv-footer" v-if="hasFooter">
      <slot name="footer" />
    </div>
  </gv-link>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-card",
  props: {
    bg: String,
    color: String,
    border: String,
    href: [String, Object, Function],
    target: {
      type: String,
      default: "_self",
    },
    flex: Boolean,
    embed: Boolean,
    overflow: Boolean,
  },
  computed: {
    hasHeader() {
      return !!this.$slots.header;
    },
    hasFooter() {
      return !!this.$slots.footer;
    },
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
    borderColor() {
      return color.getBorderColor(this.border);
    },
  },
};
</script>
