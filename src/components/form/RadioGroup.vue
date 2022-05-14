<template>
  <div class="gv-radio-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-radio-group",
  props: {
    name: String,
  },
  computed: {
    uniqueId() {
      return this.$utils.string.uniqueId();
    },
  },
  mounted() {
    this.$children.forEach((radio) => {
      radio.gname = this.uniqueId;
    });
  },
};
</script>
