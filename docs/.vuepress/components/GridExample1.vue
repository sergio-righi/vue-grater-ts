<template>
  <gv-grid :responsive="responsive">
    <div
      v-for="i in 15"
      :key="i.id"
      class="item bg-gray-200 color-white d-flex align-items-center justify-content-center a-center"
      :style="{ height: randomNumber() + 'px' }"
    >
      <span>{{ i }}</span>
    </div>
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
      return this.$utils.number.random(150, 250);
    },
  },
};
</script>
