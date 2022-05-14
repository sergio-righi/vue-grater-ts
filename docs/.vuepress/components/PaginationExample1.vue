<template>
  <div>
    <gv-pagination v-model="page" :total="3" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  }
};
</script>
