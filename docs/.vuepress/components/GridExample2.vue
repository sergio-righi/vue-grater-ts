<template>
  <gv-grid :responsive="responsive">
    <slot v-for="i in 10">
      <gv-image
        :key="i.id"
        :src="`/img/portrait/img_${i}.jpg`"
        :style="{ height: randomNumber() + 'px' }"
      />
    </slot>
  </gv-grid>
</template>

<script>
import { number } from "@/utils";
export default {
  data() {
    return {
      responsive: [
        { width: 768, columns: 2 },
        { width: 992, columns: 3 },
        { width: 1200, columns: 4 },
        { width: 1440, columns: 5 },
      ],
    };
  },
  methods: {
    randomNumber() {
      return this.$utils.number.random(200, 300);
    },
  },
};
</script>
