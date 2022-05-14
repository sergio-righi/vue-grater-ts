<template>
  <div class="gv-item" :class="{ active: bactive }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-tab-item",
  props: {
    icon: String,
    header: String,
    disabled: Boolean
  },
  data() {
    return {
      bactive: false
    };
  },
  mounted() {
    if (this.hasParent) {
      this.$parent.append(this);
    }
  },
  computed: {
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-tab";
    }
  },
  methods: {
    show: function() {
      this.bactive = true;
      this.$emit("onshow", this.$el);
    },
    hide: function() {
      this.bactive = false;
      this.$emit("onhide", this.$el);
    }
  }
};
</script>
