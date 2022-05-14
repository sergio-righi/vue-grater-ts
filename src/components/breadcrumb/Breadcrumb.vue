<template>
  <ol class="gv-breadcrumb">
    <slot />
    <li>{{ title }}</li>
  </ol>
</template>

<script>
export default {
  name: "gv-breadcrumb",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
