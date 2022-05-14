<template>
  <div
    class="gv-switch"
    :class="{ sm: sm, 'has-focus': b.focused, 'is-checked': b.checked }"
    :style="styleSwitch"
  >
    <input
      type="checkbox"
      v-model="b.checked"
      :value="val"
      :name="gname"
      v-bind="$attrs"
      :checked="b.checked"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
    <div class="gv-circle">
      <slot name="circle" />
    </div>
    <div class="gv-on" :class="fontColor">
      <slot name="on" />
    </div>
    <div class="gv-off">
      <slot name="off" />
    </div>
    <div class="gv-bg" :class="background" v-if="background && b.checked"></div>
    <div class="gv-bg" v-else></div>
  </div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-switch",
  inheritAttrs: false,
  props: {
    val: {
      required: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    bg: String,
    sm: Boolean,
    name: String,
    color: String,
    disabled: Boolean,
  },
  data() {
    return {
      b: {
        focused: false,
        checked: this.value,
      },
    };
  },
  watch: {
    value(val) {
      this.b.checked = val;
    },
  },
  computed: {
    gname() {
      return this.name || this.uniqueId;
    },
    uniqueId() {
      return this.$utils.string.uniqueId();
    },
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
    styleSwitch() {
      return this.b.checked && this.bg
        ? [{ "--current-background-color": `var(--gv-color-${this.bg})` }]
        : null;
    },
  },
  methods: {
    onInput: function (event) {
      this.$emit("input", event.target.checked);
    },
    onFocus: function () {
      this.b.focused = true;
    },
    onBlur: function () {
      this.b.focused = false;
    },
  },
};
</script>
