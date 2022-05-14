<template>
  <div
    class="gv-rating"
    :class="[
      fontColor,
      { disabled: disabled, readonly: readonly, hidden: hidden },
    ]"
    :style="style"
  >
    <div
      v-for="(item, index) in length"
      :key="item.id"
      class="gv-item"
      @click="onClick(getIndex(index))"
    >
      <div class="item-icon">
        <gv-icon v-if="isFull(getIndex(index))" :value="icon" />
        <gv-icon v-else-if="isHalf(getIndex(index))" :value="half" />
      </div>
      <div class="item-color">
        <gv-icon :value="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-rating",
  props: {
    color: String,
    value: {
      default: 0,
      type: Number,
      validator: (value) => value >= 0,
    },
    icon: {
      type: String,
      default: "star",
    },
    size: String,
    ten: Boolean,
    hidden: Boolean,
    decimal: Boolean,
    disabled: Boolean,
    readonly: Boolean,
  },
  data() {
    return {
      input: null,
    };
  },
  watch: {
    value(val) {
      this.setValue(val);
    },
  },
  created() {
    this.setValue(this.value);
  },
  computed: {
    style() {
      return this.size ? { "font-size": this.size } : null;
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
    half() {
      return this.icon ? `${this.icon}-half` : null;
    },
    length() {
      return this.ten ? 10 : 5;
    },
  },
  methods: {
    isFull: function (value) {
      return this.input >= value;
    },
    isHalf: function (value) {
      return this.decimal && this.input > value - 1 && this.input < value;
    },
    hasFontColor: function (value) {
      return this.color && (this.isFull(value) || this.isHalf(value))
        ? color.getFontColor(this.color)
        : null;
    },
    getIndex: function (index) {
      return this.length - index;
    },
    setValue: function (value) {
      let val =
        this.ten && value > 10 ? 10 : !this.ten && value > 5 ? 5 : value;
      if (this.decimal) {
        val = (Math.round(val * 2) / 2).toFixed(1);
      } else {
        val = parseInt(val, 10);
      }
      this.input = Number(val);
    },
    onClick: function (value) {
      if (!this.disabled && !this.readonly) {
        if (!this.decimal) {
          if (this.input === value) {
            this.input--;
          } else {
            this.input = value;
          }
        } else {
          const rest = this.input % 1;
          if (this.input === value || this.input + rest === value) {
            this.input -= 0.5;
          } else {
            this.input = value;
          }
        }
        this.$emit("input", this.input);
      }
    },
  },
};
</script>
