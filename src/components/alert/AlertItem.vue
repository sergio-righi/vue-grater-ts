<template>
  <gv-link
    v-if="hasParent"
    :href="href"
    :target="target"
    class="gv-item"
    :class="[
      background,
      fontColor,
      {
        info: info,
        error: error,
        active: b.active,
        primary: primary,
        warning: warning,
        success: success,
      },
    ]"
    :style="styleAlert"
  >
    <div class="gv-main">
      <div class="gv-leading" v-if="hasLeading || hasIcon">
        <slot v-if="hasLeading" name="leading" />
        <gv-icon v-else :value="icon" />
      </div>
      <div class="gv-content">
        <div class="gv-title" v-if="hasHeader">
          <slot name="header" />
        </div>
        <div class="gv-description" v-if="hasContent">
          <slot name="content" />
        </div>
      </div>
      <div class="gv-trailing" v-if="hasTrailing">
        <slot name="trailing" />
      </div>
    </div>
    <div class="gv-side" v-if="hasSide">
      <div class="gv-control" v-if="hasControl">
        <gv-icon
          value="chevron-left"
          @onclick="prev"
          :class="{ disabled: !hasPrev }"
        />
        <span @click.prevent>{{ selected }}/{{ size }}</span>
        <gv-icon
          value="chevron-right"
          @onclick="next"
          :class="{ disabled: !hasNext }"
        />
      </div>
      <gv-button
        plain
        sm
        class="gv-dismiss"
        v-if="hasDismissible"
        @onclick="dismiss"
      >
        {{ t("alert.dismiss") }}
      </gv-button>
    </div>
  </gv-link>
</template>

<script>
import { i18n, color } from "@/utils";
export default {
  name: "gv-alert-item",
  props: {
    target: {
      type: String,
      default: "_self",
    },
    bg: String,
    color: String,
    info: Boolean,
    error: Boolean,
    active: Boolean,
    success: Boolean,
    warning: Boolean,
    primary: Boolean,
    href: [String, Object, Function],
  },
  data() {
    return {
      b: {
        active: this.active,
      },
    };
  },
  watch: {
    active(val) {
      this.b.active = val;
    },
  },
  mounted() {
    if (this.hasParent) this.$parent.append(this);
  },
  computed: {
    hasSide() {
      return this.hasDismissible || this.hasControl;
    },
    hasControl() {
      return this.hasParent ? this.$parent.hasControl : false;
    },
    hasDismissible() {
      return this.hasParent ? this.$parent.dismissible : false;
    },
    hasPrev() {
      return this.hasParent ? this.$parent.hasPrev : false;
    },
    hasNext() {
      return this.hasParent ? this.$parent.hasNext : false;
    },
    hasIcon() {
      return this.icon;
    },
    hasLeading() {
      return !!this.$slots.leading;
    },
    hasHeader() {
      return !!this.$slots.header;
    },
    hasContent() {
      return !!this.$slots.content;
    },
    hasTrailing() {
      return !!this.$slots.trailing;
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-alert";
    },
    size() {
      return this.hasParent ? this.$parent.alerts.length : 0;
    },
    selected() {
      return this.hasParent ? this.$parent.selected + 1 : 0;
    },
    icon() {
      return this.success
        ? "check-circle"
        : this.error
        ? "close-circle"
        : this.warning
        ? "alert-circle"
        : this.info
        ? "information"
        : null;
    },
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
    styleAlert() {
      return this.bg
        ? [
            // { "--current-color": "green" },
            { "--current-background-color": `var(--gv-color-${this.bg})` },
          ]
        : null;
    },
  },
  methods: {
    prev: function (event) {
      event.preventDefault();
      this.$parent.prev();
    },
    next: function (event) {
      event.preventDefault();
      this.$parent.next();
    },
    dismiss: function (event) {
      event.preventDefault();
      this.$parent.dismiss();
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
};
</script>
