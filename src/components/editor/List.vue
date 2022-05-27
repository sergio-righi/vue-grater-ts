<template>
  <Block :structure="false">
    <template #toolbar>
      <template>
        <gv-icon value="format-list-bulleted" />
        <gv-icon value="format-list-numbered" />
      </template>
      <template>
        <gv-icon value="format-indent-increase" />
        <gv-icon value="format-indent-decrease" />
      </template>
      <gv-icon value="link-variant" />
    </template>
    <template #content>
      <ul contenteditable="true">
        <li>&nbsp;</li>
      </ul>
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
