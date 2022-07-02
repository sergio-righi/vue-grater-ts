<template>
  <div
    class="gv-progress-circle"
    :class="{
      error: error,
      success: isSuccess,
      dismissed: isDismissible,
      indeterminate: indeterminate,
    }"
  >
    <svg :width="size" :height="size">
      <circle
        :stroke="stroke"
        :stroke-width="width"
        :stroke-dashoffset="offset"
        :stroke-dasharray="circunference"
        :r="radius"
        :cx="position"
        :cy="position"
      ></circle>
    </svg>
    <div class="gv-info">
      <span v-if="hasInfo" :style="{fontSize: size / 3 + 'px'}">
        {{ Math.min(percentage, 100) }}
      </span>
      <slot v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: 'gv-progress-circle',
  props: {
    color: {
      type: String,
      default: 'gray',
    },
    percentage: {
      default: 0,
      type: [String, Number],
      validator: (value) => !isNaN(parseFloat(value)) && isFinite(value),
    },
    size: {
      default: 60,
      type: [String, Number],
      validator: (value) => !isNaN(parseFloat(value)) && isFinite(value),
    },
    width: {
      default: 2,
      type: [String, Number],
      validator: (value) =>
        !isNaN(parseFloat(value)) && isFinite(value) && value >= 1 && value <= 6,
    },
    error: Boolean,
    success: Boolean,
    display: Boolean,
    dismissible: Boolean,
    indeterminate: Boolean,
  },
  data() {
    return {
      stroke: null,
    };
  },
  computed: {
    offset() {
      if (this.indeterminate) return this.circunference * 0.3;
      else {
        const percentage = Math.min(this.percentage, 100);
        return this.circunference - (percentage / 100) * this.circunference;
      }
    },
    hasInfo() {
      return this.display && !this.indeterminate && this.size >= 60;
    },
    isSuccess() {
      return !this.error && this.success && this.percentage >= 100;
    },
    isDismissible() {
      return this.dismissible && this.percentage >= 100;
    },
    position() {
      return this.size / 2;
    },
    radius() {
      return this.size * 0.4;
    },
    circunference() {
      return 2 * Math.PI * this.radius;
    },
  },
  watch: {
    color(value) {
      this.setStrokeColor(value);
    },
    isSuccess(success) {
      if (success && this.success) {
        this.setStrokeColor(this.success);
      }
    },
  },
  mounted() {
    this.setStrokeColor(this.color);
  },
  methods: {
    setStrokeColor: function (color) {
      if (/^\w/gi.test(color)) {
        this.$el.classList.add(`bg-${color}`);
        const css = window.getComputedStyle(this.$el);
        this.stroke = css.getPropertyValue('background-color');
        this.$el.classList.remove(`bg-${color}`);
      } else {
        this.stroke = `bg-${color}`;
      }
    },
  },
};
</script>
