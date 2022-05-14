<template>
  <gv-link
    class="gv-item"
    :class="{ active: active }"
    v-if="hasParent && item"
    :href="item.href"
    :label="item.label"
    v-tooltip.bottom="hasTooltip ? item.tooltip : ''"
  >
    <gv-dropdown v-if="isDropdown" left>
      <template #trigger>
        <gv-icon v-if="isIcon" :value="item.icon" />
        <gv-image v-else-if="isImage" :src="item.image" circle />
        {{ item.label }}
      </template>
      <template #content>
        <slot v-for="value in item.values">
          <gv-dropdown-item
            v-if="value.click"
            :key="value.id"
            @onclick="value.click"
          >
            {{ value.label }}
          </gv-dropdown-item>
          <gv-dropdown-item
            v-else
            :key="value.id"
            :href="value.href"
            :target="value.target"
          >
            {{ value.label }}
          </gv-dropdown-item>
        </slot>
      </template>
    </gv-dropdown>
    <slot v-else-if="isCallback">
      <gv-icon
        v-if="isIcon"
        :value="item.icon"
        @onclick="item.click"
        clickable
      />
      <gv-image
        v-else-if="isImage"
        :src="item.image"
        @onclick="item.click"
        circle
      />
    </slot>
    <gv-icon v-else-if="isIcon" :value="item.icon" />
    <gv-image v-else-if="isImage" :src="item.image" circle />
  </gv-link>
  <gv-link
    class="gv-item"
    :class="{ active: active }"
    :href="href"
    :target="target"
    @click.native="onClick"
    v-else
  >
    <slot />
  </gv-link>
</template>

<script>
export default {
  name: "gv-navbar-item",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    href: [String, Object, Function],
    target: {
      type: String,
      default: "_self",
    },
    active: Boolean,
  },
  computed: {
    isIcon() {
      return "icon" in this.item;
    },
    isImage() {
      return "image" in this.item;
    },
    isDropdown() {
      return "values" in this.item;
    },
    isCallback() {
      return "click" in this.item;
    },
    hasTooltip() {
      return "tooltip" in this.item;
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-navbar";
    },
  },
  methods: {
    onClick: function (event) {
      this.$parent.close();
      this.$emit("onclick", event);
    },
  },
};
</script>
