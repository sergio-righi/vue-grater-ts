<template>
  <gv-pagination v-model="selected" :total="20" hide-arrow center condensed />
</template>

<script>
export default {
  data() {
    return {
      selected: 1
    };
  }
};
</script>
