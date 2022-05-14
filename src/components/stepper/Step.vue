<template>
  <div class="gv-item" :class="{ active: b.active }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-step",
  props: {
    icon: String,
    note: String,
    header: String,
    error: Boolean,
    success: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      index: -1,
      b: {
        error: false,
        active: false,
        visited: false,
      },
    };
  },
  computed: {
    hasError() {
      return (!this.disabled && this.error) || this.b.error;
    },
    hasSuccess() {
      return !this.hasError && (this.success || this.visited);
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-stepper";
    },
    visited() {
      return (
        (!this.disabled && !this.$parent.inline && this.b.visited) ||
        this.$parent.selected > this.index
      );
    },
  },
  mounted() {
    this.index = this.$utils.node.indexOf(this.$el);
    if (this.hasParent) {
      this.$parent.append(this);
    }
  },
  methods: {
    select: function () {
      this.b.active = true;
    },
    unselect: function () {
      this.b.active = false;
      this.b.visited = true;
    },
    set: function (error) {
      this.b.error = error;
    },
  },
};
</script>
