<template>
  <Block :structure="false">
    <template #toolbar>
      <gv-icon value="pencil" />
    </template>
    <template #content>
      <form>
        <input name="url" />
        <input name="ratio" />
        <button>Submit</button>
      </form>
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
