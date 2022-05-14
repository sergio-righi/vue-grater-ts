<template>
  <div class="gv-month-picker">
    <div v-if="!embed" class="gv-header">
      <span class="gv-month">{{ month }}</span>
    </div>
    <div class="gv-content">
      <div ref="items" class="gv-items">
        <div
          v-for="item in months"
          :key="item.id"
          class="gv-item"
          :class="{
            disabled: isDisabled(item.key),
            active: !isDisabled(item.key) && item.key === selected,
            current: !isDisabled(item.key) && item.key === current,
          }"
          @click="onClick(item.key)"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { date } from "@/utils";
export default {
  name: "gv-month",
  props: {
    value: Number,
    embed: Boolean,
    disabled: {
      type: Array,
      default: () => [],
    },
    locale: {
      type: String,
      default: "en-CA",
    },
  },
  data() {
    return {
      current: null,
      selected: null,
    };
  },
  computed: {
    months() {
      return Array.from(Array(12).keys()).map((item) => ({
        key: item,
        value: date.toMonthString(item, this.locale),
      }));
    },
    month() {
      return Number.isInteger(this.selected)
        ? date.toMonthString(this.selected, this.locale, "long")
        : "-";
    },
  },
  watch: {
    value(val) {
      this.selected = val;
    },
  },
  created() {
    this.current = new Date().getMonth();
  },
  methods: {
    onClick: function (val) {
      this.$emit("input", val);
      this.selected = val;
    },
    isDisabled: function (val) {
      return this.disabled.includes(val);
    },
  },
};
</script>
