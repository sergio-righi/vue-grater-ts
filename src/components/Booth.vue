<template>
  <div class="gv-booth" v-if="items.length" :style="boothStyle">
    <slot v-for="(item, index) in items">
      <div
        class="gv-item"
        @click="onClick(index)"
        :key="item.id"
        v-if="embed"
      >
        <div class="gv-wrap">
          <gv-image :src="item.src" />
          <div class="gv-overlay"></div>
        </div>
      </div>
      <gv-image :src="item.src" v-else />
    </slot>
  </div>
  <div class="gv-booth" :style="boothStyle" v-else>
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-booth",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    gap: {
      type: Number,
      default: 10
    },
    embed: Boolean
  },
  computed: {
    boothStyle() {
      return { gap: `${this.gap}px` };
    },
    children() {
      return this.$el.children;
    }
  },
  methods: {
    onClick: function(index) {
      this.$emit("onclick", index);
    },
    get: function(index) {
      if (index === undefined) return null;
      const item = this.children[index];
      if (item !== undefined) {
        return item.querySelectorAll("img")[0];
      }
      return null;
    }
  }
};
</script>
