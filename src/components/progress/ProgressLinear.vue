<template>
  <div class="gv-progress-linear">
    <div
      class="gv-progress"
      :class="{error: error, success: isSuccess, dismissed: isDismissible}"
    >
      <div
        v-if="buffer"
        class="gv-buffer"
        :style="`width:${Math.min(buffer, 100)}%`"
      ></div>
      <div v-if="stream" class="gv-stream"></div>
      <div
        class="gv-bar"
        :class="{indeterminate: isIndeterminate}"
        :style="`width:${Math.min(percentage, 100)}%`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gv-progress-linear',
  props: {
    percentage: {
      default: 0,
      type: [String, Number],
      validator: (value) => Number.isInteger(Number(value)),
    },
    buffer: {
      default: 0,
      type: [String, Number],
      validator: (value) => Number.isInteger(Number(value)),
    },
    query: Boolean,
    error: Boolean,
    stream: Boolean,
    success: Boolean,
    dismissible: Boolean,
    indeterminate: Boolean,
  },
  computed: {
    isIndeterminate() {
      return this.indeterminate || (this.query && this.percentage > 0);
    },
    isDismissible() {
      return this.dismissible && this.percentage >= 100;
    },
    isSuccess() {
      return this.success && this.percentage >= 100;
    },
  },
};
</script>
