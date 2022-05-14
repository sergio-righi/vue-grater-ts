<template>
  <i :class="[icon, fontColor]" :style="style" @click="onClick"></i>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-icon",
  props: {
    value: {
      type: String,
      required: true,
    },
    size: String,
    color: String,
  },
  data() {
    return {
      prefix: "mdi mdi",
    };
  },
  computed: {
    icon() {
      return `${this.prefix}-${this.value}`;
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
    style() {
      return this.size ? { "font-size": this.size } : null;
    },
  },
  methods: {
    onClick: function (event) {
      this.$emit("onclick", event);
    },
  },
};
</script>
