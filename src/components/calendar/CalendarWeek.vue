<template>
  <div class="gv-week">
    <gv-calendar-item
      v-for="(item, index) in items"
      :key="item.id"
      :item="item"
      :index="index"
      >{{ item.day }}</gv-calendar-item
    >
  </div>
</template>

<script>
export default {
  name: "gv-calendar-week",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    onClick: function(item) {
      this.$parent.select(item);
    }
  }
};
</script>
