<template>
  <li>
    <gv-link v-if="href" :href="href" :target="target">{{ label }}</gv-link>
    <span v-else>{{ label }}</span>
  </li>
</template>

<script>
export default {
  name: "gv-breadcrumb-item",
  props: {
    href: [String, Object, Function],
    label: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: "_self"
    }
  }
};
</script>
