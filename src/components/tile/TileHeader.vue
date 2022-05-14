<template>
  <div class="gv-header" :class="{ sm: sm, sub: sub }" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-tile-header",
  props: {
    sm: Boolean,
    sub: Boolean
  },
  methods: {
    onClick: function(event) {
      this.$emit("onclick", event);
    }
  }
};
</script>
