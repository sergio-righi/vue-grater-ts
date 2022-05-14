<template>
  <div>
    <gv-button v-responsive.md.on="responsive" sm>Show MD onwards</gv-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responsive: {
        md: 768
      }
    };
  }
};
</script>
