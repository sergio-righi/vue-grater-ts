<template>
  <gv-row>
    <gv-col>
      <gv-slider v-model="range" text="%" :max="100" :step="5" />
    </gv-col>
    <gv-col>
      <gv-slider v-model="input" :icon="icon" :max="1" :step="0.1" />
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      input: 0.7,
      range: [10, 20]
    };
  },
  computed: {
    icon() {
      return this.input === 0
        ? "volume-off"
        : this.input < 0.3
        ? "volume-low"
        : this.input < 0.7
        ? "volume-medium"
        : "volume-high";
    }
  }
};
</script>
