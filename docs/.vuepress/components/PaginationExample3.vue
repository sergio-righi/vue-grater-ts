<template>
  <gv-pagination v-model="selected" :total="total" arrow-only loop>
    <span>{{ selected }} / {{ total }}</span>
  </gv-pagination>
</template>

<script>
export default {
  data() {
    return {
      total: 15,
      selected: 7,
    };
  }
};
</script>
