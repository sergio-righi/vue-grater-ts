<template>
  <div class="gv-discussion">
    <div class="gv-content" v-if="hasContent">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-discussion",
  data() {
    return {
      items: []
    };
  },
  computed: {
    hasHeader() {
      return !!this.$slots.header;
    },
    hasContent() {
      return !!this.$slots.content;
    }
  },
  methods: {
    append: function(item) {
      this.items.push(item);
    }
  }
};
</script>
