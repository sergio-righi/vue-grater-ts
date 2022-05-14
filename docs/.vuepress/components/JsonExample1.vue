<template>
  <gv-json v-model="data" />
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "Nora Stone",
        birthday: "+1999-05-03T00:00:00Z",
        occupation: "Software Developer",
        country: ""
      }
    };
  }
};
</script>
