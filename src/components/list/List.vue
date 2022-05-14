<template>
  <component
    v-if="items.length"
    :is="component"
    class="gv-list"
    :class="{ tree: tree }"
  >
    <slot v-for="item in items">
      <li v-if="isString(item)" :key="item.id">{{ item }}</li>
      <slot v-else-if="isPairValue(item)">
        <gv-li :key="item.id" hidden v-bind="{ tree: tree }">
          <template #trigger>{{ Object.keys(item)[0] }}</template>
          <template #content>
            <gv-list v-bind="$props" :items="Object.values(item)[0]" />
          </template>
        </gv-li>
      </slot>
      <li v-else-if="isObject(item)" :key="item.id">
        <gv-link v-bind="item" muted>{{ item.text }}</gv-link>
      </li>
    </slot>
  </component>
  <component :is="component" v-else class="gv-list">
    <slot />
  </component>
</template>

<script>
export default {
  name: "gv-list",
  props: {
    ol: Boolean,
    tree: Boolean,
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    component() {
      return this.ol ? "ol" : "ul";
    },
  },
  methods: {
    isString: function (value) {
      return this.$utils.boolean.isString(value);
    },
    isPairValue: function (value) {
      return this.isObject(value) && Array.isArray(Object.values(value)[0]);
    },
    isObject: function (value) {
      return this.$utils.boolean.isObject(value);
    },
  },
};
</script>
