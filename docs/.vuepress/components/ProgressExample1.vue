<template>
  <gv-row>
    <gv-col>
      <gv-progress-linear indeterminate />
      <br />
      <gv-progress-linear :percentage="50" />
      <br />
      <gv-progress-linear :percentage="35" :buffer="60" />
      <br />
      <gv-progress-linear :percentage="100" success />
      <br />
      <gv-progress-linear :percentage="100" error />
      <br />
      <gv-progress-linear :percentage="45" stream />
      <br />
      <gv-progress-linear :percentage="percentage" dismissible />
      <br />
    </gv-col>
  </gv-row>
</template>

<script>
import { number } from "@/utils";
export default {
  data() {
    return {
      percentage: 15,
    };
  },
  created() {
    this.simulation();
  },
  methods: {
    simulation() {
      const timer = setInterval(() => {
        this.percentage += this.$utils.number.random(1, 5);
        if (this.percentage >= 100) clearInterval(timer);
      }, 300);
    },
  },
};
</script>
