<template>
  <Block :structure="false">
    <template #toolbar>
      <gv-icon value="format-header-1" />
      <gv-icon value="format-header-2" />
      <gv-icon value="format-header-3" />
      <gv-icon value="format-header-4" />
      <gv-icon value="format-header-5" />
      <gv-icon value="format-header-6" />
    </template>
    <template #content>
      <h1 contenteditable="true"></h1>
    </template>
  </Block>
</template>

<script>
import Block from './Block.vue';
export default {
  components: {
    Block,
  },
};
</script>
