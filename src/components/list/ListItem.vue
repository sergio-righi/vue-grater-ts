<template>
  <li v-if="tree" :class="{ closed: b.hidden, opened: !b.hidden }">
    <span @click="onClick">
      <slot name="trigger" />
    </span>
    <slot name="content" />
  </li>
  <li v-else>
    <slot name="trigger" />
    <slot name="content" />
  </li>
</template>

<script>
export default {
  name: "gv-li",
  props: {
    tree: Boolean,
    hidden: Boolean
  },
  data() {
    return {
      b: {
        hidden: this.hidden
      }
    };
  },
  methods: {
    onClick: function() {
      this.b.hidden = !this.b.hidden;
    }
  }
};
</script>
