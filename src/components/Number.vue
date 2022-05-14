<template>
  <gv-input
    ref="element"
    v-bind="$attrs"
    v-model="input"
    type="number"
    v-mask="'#*'"
    :step="step"
    :min="min"
    :max="max"
    :disabled="disabled"
    @onblur="onBlur"
  >
    <template #leading>
      <gv-icon value="pound" />
    </template>
    <template #trailing v-if="!disabled">
      <gv-icon
        value="minus-circle"
        class="c-pointer"
        @mouseup.native="onMouseUpLeave"
        @mouseleave.native="onMouseUpLeave"
        :class="{ 'p-events-none': isMinusDisabled, disabled: isMinusDisabled }"
        @mousedown.native="onMouseDown(decrease)"
      >
      </gv-icon>
      <gv-icon
        value="plus-circle"
        class="c-pointer"
        @mouseup.native="onMouseUpLeave"
        @mouseleave.native="onMouseUpLeave"
        :class="{ 'p-events-none': isPlusDisabled, disabled: isPlusDisabled }"
        @mousedown.native="onMouseDown(increase)"
      >
      </gv-icon>
    </template>
  </gv-input>
</template>

<script>
export default {
  name: "gv-number",
  inheritAttrs: false,
  props: {
    min: {
      default: 0,
      type: [Number, String],
    },
    max: {
      default: 0,
      type: [Number, String],
    },
    step: {
      default: 1,
      type: [Number, String],
    },
    value: {
      default: 0,
      type: [Number, String],
    },
    loop: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      input: this.value,
    };
  },
  mounted() {
    this.validate();
  },
  computed: {
    element() {
      return this.$refs.element;
    },
    fmin() {
      return Number(Number(this.min) < Number(this.max) ? this.min : this.max);
    },
    fmax() {
      return Number(Number(this.min) > Number(this.max) ? this.min : this.max);
    },
    isMinusDisabled() {
      const disabled = this.disabled || this.input === this.fmin;
      if (disabled) clearInterval(this.timer);
      return disabled;
    },
    isPlusDisabled() {
      const disabled = this.disabled || this.input === this.fmax;
      if (disabled) clearInterval(this.timer);
      return disabled;
    },
  },
  watch: {
    value(val) {
      this.input = Number(val);
    },
  },
  methods: {
    onBlur: function () {
      this.validate();
      this.$emit("input", this.input);
    },
    onMouseDown: function (callback) {
      callback();
      this.timer = setInterval(() => callback(), 100);
    },
    onMouseUpLeave: function () {
      clearInterval(this.timer);
    },
    increase: function () {
      this.input += Number(this.step);
      this.validate();
    },
    decrease: function () {
      this.input -= Number(this.step);
      this.validate();
    },
    validate: function () {
      if (Number(this.input) > Number(this.fmax)) {
        this.input = Number(this.loop ? this.fmin : this.fmax);
      } else if (Number(this.input) < Number(this.fmin)) {
        this.input = Number(this.loop ? this.fmax : this.fmin);
      } else if (!this.$utils.boolean.isNumber(this.input)) {
        this.input = Number(this.fmin);
      }
    },
  },
};
</script>
