<template>
  <gv-sortable v-model="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, value: "Item 1" },
        { id: 1, value: "Item 2" },
        { id: 2, value: "Item 3" },
        { id: 3, value: "Item 4" },
        { id: 4, value: "Item 5", disabled: true },
        { id: 5, value: "Item 6" },
        { id: 6, value: "Item 7" },
        { id: 7, value: "Item 8" }
      ]
    };
  }
};
</script>
