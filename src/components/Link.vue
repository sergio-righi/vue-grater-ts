<template>
  <div v-if="!href">
    <slot />
  </div>
  <a v-else-if="isURL" :href="href" :target="target" :class="{ muted: muted }">
    <slot />
  </a>
  <component
    v-else-if="isComponent"
    :is="component"
    :to="href"
    :class="{ muted: muted }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "gv-link",
  props: {
    href: {
      required: false,
      validator: (value) =>
        ["string", "object", "function"].includes(typeof value) ||
        value === null,
    },
    target: {
      type: String,
      default: "_self",
      validator: (value) =>
        ["_self", "_blank", "_parent", "_top", null].includes(value),
    },
    muted: Boolean,
  },
  computed: {
    isURL() {
      return this.href && this.$utils.boolean.isURL(this.href);
    },
    isComponent() {
      return this.isNuxt || this.isRouter;
    },
    isNuxt() {
      return !!this.$nuxt;
    },
    isRouter() {
      return !!this.$router;
    },
    component() {
      return this.isNuxt ? "nuxt-link" : "router-link";
    },
  },
};
</script>
