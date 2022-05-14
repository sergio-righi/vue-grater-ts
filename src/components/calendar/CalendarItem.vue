<template>
  <div
    class="gv-item"
    :class="{
      today: item.today,
      highlight: hasEvent,
      pointer: hasDescription,
      disabled: item.disabled,
      selected: item.selected
    }"
    @click.prevent="onClick"
  >
    <slot />
    <div v-if="hasCategory" class="gv-group">
      <div
        v-for="category in item.categories"
        :key="category.id"
        class="gv-category"
        :style="{
          '--current-background-color': category
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-calendar-item",
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: -1
    }
  },
  computed: {
    hasEvent() {
      return this.item.events === undefined
        ? false
        : this.item.events.length > 0;
    },
    hasCategory() {
      return this.item.categories === undefined
        ? false
        : this.item.categories.length > 0;
    },
    hasDescription() {
      return this.item.description;
    }
  },
  methods: {
    onClick: function() {
      this.item.selected = true;
      this.$parent.onClick(this.item);
    }
  }
};
</script>
