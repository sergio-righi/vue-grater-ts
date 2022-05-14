<template>
  <gv-row>
    <gv-col :sm="6" align="center">
      <gv-clock bg="indigo" color="white" center />
    </gv-col>
    <gv-col :sm="6" align="center">
      <gv-clock
        color="black"
        image="/img/user_f.png"
        center
        :value="unitedkingdom"
      />
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  computed: {
    southkorea() {
      const date = new Date();
      date.setHours(date.getUTCHours() + 10);
      return date;
    },
    unitedkingdom() {
      const date = new Date();
      date.setHours(date.getUTCHours() + 1);
      return date;
    }
  }
};
</script>
