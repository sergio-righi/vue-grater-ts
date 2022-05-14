<template>
  <div class="gv-input-box" :class="{ checkbox: !radio, radio: radio }">
    <input
      :value="val"
      ref="element"
      :id="uniqueId"
      v-bind="$attrs"
      @change="onChange"
      :checked="isChecked"
      :type="radio ? 'radio' : 'checkbox'"
    />
    <label :for="uniqueId">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "gv-input-box",
  inheritAttrs: false,
  props: {
    radio: Boolean,
    checked: Boolean,
    val: {
      default: false,
      type: [Number, String, Boolean, Object],
    },
    value: {
      default: false,
      type: [Array, Number, String, Object, Boolean],
    },
  },
  data() {
    return {
      input: this.value,
    };
  },
  computed: {
    element() {
      return this.$refs.element;
    },
    uniqueId() {
      return this.$utils.string.uniqueId();
    },
    isChecked() {
      if (Array.isArray(this.value)) {
        return this.value.includes(this.val);
      } else if (typeof this.value === "boolean") {
        return this.checked || this.value;
      }
      return this.value === this.val;
    },
  },
  created() {
    if (this.checked) {
      this.set(this.checked);
    }
  },
  methods: {
    set: function (status) {
      if (Array.isArray(this.input)) {
        const index = this.input.indexOf(this.val);
        if (index === -1 && status) {
          this.input.push(this.val);
        } else if (index !== -1 && !status) {
          this.input.splice(index, 1);
        }
      } else if (typeof this.input === "boolean") {
        this.input = status;
      } else {
        if (!status) return;
        this.input = this.val;
      }
      this.$emit("input", this.input);
    },
    focus: function () {
      this.element.focus();
    },
    blur: function () {
      this.element.blur();
    },
    onChange: function (event) {
      this.set(event.target.checked);
      this.$emit("change", event);
    },
  },
  watch: {
    value(val) {
      this.input = val;
    },
    checked(val) {
      this.set(val);
    },
  },
};
</script>
