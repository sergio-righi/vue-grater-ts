<template>
  <gv-link
    class="gv-tile"
    :href="href"
    :target="target"
    :class="[
      background,
      fontColor,
      { header: header },
      { active: b.active },
      { disabled: disabled },
      { condensed: condensed },
      { activatable: !disabled && (hasExpandable || isActivatable) },
    ]"
  >
    <div class="gv-wrap" @click="onClick">
      <div v-if="hasLeading" class="gv-leading">
        <slot name="leading" />
      </div>
      <div v-if="hasContent" class="gv-content">
        <slot name="content" />
      </div>
      <div v-if="hasTrailing || hasExpandable" class="gv-trailing">
        <slot name="trailing" />
        <template v-if="hasExpandable">
          <gv-icon v-if="b.expanded" value="chevron-up" />
          <gv-icon v-else value="chevron-down" />
        </template>
      </div>
    </div>
    <div
      v-if="hasExpandable"
      class="gv-expandable"
      :class="{ active: b.expanded }"
    >
      <slot name="expandable" />
    </div>
  </gv-link>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-tile",
  props: {
    bg: String,
    color: String,
    href: [String, Object, Function],
    target: {
      type: String,
      default: "_self",
    },
    active: Boolean,
    header: Boolean,
    disabled: Boolean,
    condensed: Boolean,
  },
  data() {
    return {
      elm: null,
      b: {
        active: false,
        expanded: this.active,
      },
    };
  },
  computed: {
    isActivatable() {
      return !!this.elm;
    },
    hasLeading() {
      return !!this.$slots.leading;
    },
    hasContent() {
      return !!this.$slots.content;
    },
    hasTrailing() {
      return !!this.$slots.trailing;
    },
    hasExpandable() {
      return !!this.$slots.expandable;
    },
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
  },
  beforeDestroy() {
    this.$el.removeEventListener("click", this.handleClick);
    this.elm?.removeEventListener("change", this.handleChange);
  },
  mounted() {
    this.elm = this.$el.querySelector(
      "input[type='radio'], input[type='checkbox']"
    );

    if (this.disabled) this.check();
    else if (this.isActivatable) this.config();
  },
  methods: {
    onClick: function () {
      if (this.hasExpandable) {
        this.b.expanded = !this.b.expanded;
      }
    },
    config: function () {
      if (!this.elm) return;
      this.$el.addEventListener("click", this.handleClick);
      this.elm.addEventListener("change", this.handleChange);
      this.b.active = this.elm.checked;
    },
    check: function () {
      if (!this.elm) return;
      this.elm.setAttribute("disabled", "disabled");
    },
    handleClick: function (event) {
      event.preventDefault();

      if (this.elm.type === "radio") {
        this.b.active = true;
      } else {
        this.b.active = !this.b.active;
      }
      this.elm.checked = this.b.active;

      this.$el.parentNode
        .querySelectorAll(`input[name="${this.elm.name}"]`)
        .forEach((item) => {
          this.$utils.node.trigger(item, "change");
        });
    },
    handleChange: function (event) {
      event.preventDefault();
      this.b.active = this.elm.checked;
      this.elm.checked = this.b.active;
    },
  },
  watch: {
    active(val) {
      this.b.expanded = val;
    },
  },
};
</script>
