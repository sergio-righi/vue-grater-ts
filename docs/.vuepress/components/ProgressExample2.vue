<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-progress-circle
          :percentage="percentage"
          success
          display
          :size="120"
        />
        <gv-progress-circle
          :percentage="percentage"
          :width="3"
          color="orange"
        />
        <gv-progress-circle :percentage="percentage" dismissible :size="30" />
      </gv-flexbox>
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
