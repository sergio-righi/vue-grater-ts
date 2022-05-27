<template>
  <Block :structure="false">
    <template #toolbar>
      <template>
        <gv-icon value="format-bold" />
        <gv-icon value="format-italic" />
        <gv-icon value="format-underline" />
      </template>
      <template>
        <gv-icon value="format-align-left" />
        <gv-icon value="format-align-center" />
        <gv-icon value="format-align-right" />
        <gv-icon value="format-align-justify" />
      </template>
      <gv-icon value="link-variant" />
    </template>
    <template #content>
      <p contenteditable="true"></p>
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
