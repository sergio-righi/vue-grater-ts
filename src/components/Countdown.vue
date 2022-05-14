<template>
  <div class="gv-countdown">
    <div v-if="f.day > 0" class="gv-unit">{{ f.day }}</div>
    <div v-if="f.hour > 0" class="gv-unit">{{ pad(f.hour) }}</div>
    <div class="gv-unit">{{ pad(f.minute) }}</div>
    <div class="gv-unit">{{ pad(f.second) }}</div>
  </div>
</template>

<script>
export default {
  name: "gv-countdown",
  props: {
    value: {
      required: true,
      type: [Date, Number],
    },
  },
  data() {
    return {
      f: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        remaining: 0,
      },
    };
  },
  created() {
    if (this.value instanceof Date) {
      this.f.remaining = (this.value - new Date()) / 1000;
    } else {
      this.f.remaining = this.value + 1;
    }
    this.start();
  },
  methods: {
    start: function () {
      const interval = setInterval(() => {
        this.thick(--this.f.remaining);
        if (this.f.remaining === 0) {
          clearInterval(interval);
          this.$emit("ontimeup", this.$el);
        }
      }, 1000);
    },
    thick: function (second) {
      const day = second / (24 * 3600);
      second = second % (24 * 3600);
      const hour = second / 3600;
      second %= 3600;
      const minute = second / 60;
      second %= 60;

      this.f.day = Math.floor(day);
      this.f.hour = Math.floor(hour);
      this.f.minute = Math.floor(minute);
      this.f.second = Math.floor(second);
    },
    pad: function (value) {
      return this.$utils.number.pad(value);
    },
  },
};
</script>
