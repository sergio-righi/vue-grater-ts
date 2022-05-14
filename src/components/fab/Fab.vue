<template>
  <div
    class="gv-fab"
    :class="[
      background,
      fontColor,
      { sm: sm, lg: lg, active: active || hasControl, horizontal: horizontal },
    ]"
  >
    <slot name="content" />
    <div v-if="!hasControl" class="gv-trigger" @click.prevent="toggle">
      <div class="fab-on">
        <slot v-if="hasOpen" name="open" />
        <gv-icon v-else value="plus" />
      </div>
      <div class="fab-off">
        <slot v-if="hasClose" name="close"></slot>
        <gv-icon value="close" />
      </div>
    </div>
    <div v-else class="gv-trigger">
      <div class="fab-icon">
        <slot name="control" />
      </div>
    </div>
  </div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-fab",
  props: {
    bg: String,
    sm: Boolean,
    lg: Boolean,
    color: String,
    horizontal: Boolean,
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    hasOpen() {
      return !!this.$slots.open;
    },
    hasClose() {
      return !!this.$slots.close;
    },
    hasControl() {
      return !!this.$slots.control;
    },
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  methods: {
    toggle: function () {
      this.active = !this.active;
    },
    open: function () {
      this.active = true;
      this.$emit("onopen", this.$el);
    },
    close: function () {
      this.active = false;
      this.$emit("onclose", this.$el);
    },
    handleOutsideClick: function (event) {
      if (!this.$el.contains(event.target)) {
        this.close();
      }
    },
  },
};
</script>
