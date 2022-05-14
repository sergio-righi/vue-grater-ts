<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-countdown :value="date" />
      </gv-flexbox>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    };
  },
  created() {
    this.date.setDate(this.date.getDate() + 15);
  }
};
</script>
