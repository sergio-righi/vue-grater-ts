<template>
  <div
    v-if="hasParent"
    class="gv-item"
    :class="{
      error: error,
      active: active,
      success: success,
      warning: warning,
      disabled: disabled
    }"
  >
    <div class="gv-divider">
      <div class="gv-icon" :class="{ sm: sm, lg: lg }">
        <gv-icon v-if="icon" :value="icon" />
        <gv-image v-else-if="image" :src="image" />
        <div v-else class="gv-dot"></div>
      </div>
    </div>
    <div class="gv-content">
      <div v-if="header" class="gv-header">{{ header }}</div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-timeline-item",
  props: {
    lg: Boolean,
    sm: Boolean,
    icon: String,
    image: String,
    header: String,
    error: Boolean,
    active: Boolean,
    warning: Boolean,
    success: Boolean,
    disabled: Boolean
  },
  computed: {
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-timeline";
    }
  }
};
</script>
