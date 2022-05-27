<template>
  <Block :structure="false">
    <template #toolbar>
      <template>
        <gv-icon value="table-row-plus-after" />
        <gv-icon value="table-row-remove" />
      </template>
      <template>
        <gv-icon value="table-column-plus-after" />
        <gv-icon value="table-column-remove" />
      </template>
      <gv-icon value="link-variant" />
    </template>
    <template #content>
      <form>
        <input name="rows" />
        <input name="columns" />
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
