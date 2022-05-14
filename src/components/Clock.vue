<template>
  <div class="gv-clock" :class="{ center: center }">
    <div v-if="digital" ref="digital" class="gv-digital" :class="fontColor">
      <span class="gv-unit">{{ hourText }}</span>
      <span class="gv-separator">:</span>
      <span class="gv-unit">{{ minuteText }}</span>
      <span class="gv-separator">:</span>
      <span class="gv-unit">{{ secondText }}</span>
      <div v-if="ampm" class="gv-ampm">
        <div class="gv-period" :class="{ active: b.am }">
          {{ label.am }}
        </div>
        <div class="gv-period" :class="{ active: !b.am }">
          {{ label.pm }}
        </div>
      </div>
    </div>
    <div
      v-else
      ref="analog"
      class="gv-analog"
      :style="backgroundImage"
      :class="[background, fontColor]"
    >
      <div class="gv-inner">
        <div class="gv-hand">
          <div class="gv-pointer analog-hour" :style="styleHour"></div>
          <div class="gv-pointer analog-minute" :style="styleMinute"></div>
          <div class="gv-pointer analog-second" :style="styleSecond"></div>
        </div>
        <span
          v-for="(item, index) in hours"
          :key="item.id"
          class="gv-item"
          :style="getTransform(index)"
        >
          {{ numeral[index] === 0 ? null : numeral[index] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-clock",
  props: {
    bg: String,
    value: Date,
    ampm: Boolean,
    image: String,
    color: String,
    center: Boolean,
    digital: Boolean,
    label: {
      type: Object,
      default() {
        return { am: "am", pm: "pm" };
      },
    },
    numeral: {
      type: Array,
      default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  },
  data() {
    return {
      f: {
        hour: 0,
        minute: 0,
        second: 0,
      },
      b: {
        am: false,
      },
      d: {
        time: null,
      },
    };
  },
  computed: {
    backgroundImage() {
      return this.image
        ? {
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            "background-image": `url(${this.image})`,
          }
        : null;
    },
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
    degrees() {
      return (30 * Math.PI) / 180;
    },
    hours() {
      return this.numeral;
    },
    secondText() {
      return this.$utils.number.pad(this.f.second);
    },
    minuteText() {
      return this.$utils.number.pad(this.f.minute);
    },
    hourText() {
      const hour = this.ampm
        ? this.f.hour > 12
          ? this.f.hour - 12
          : this.f.hour
        : this.f.hour;
      return this.$utils.number.pad(hour);
    },
    styleHour() {
      const rotate = (360 * this.f.hour) / 12;
      return { transform: `rotate(${rotate}deg) translate(0, 15px)` };
    },
    styleMinute() {
      const rotate = (360 * this.f.minute) / 60;
      return { transform: `rotate(${rotate}deg) translate(0, 15px)` };
    },
    styleSecond() {
      const rotate = (360 * this.f.second) / 60;
      return { transform: `rotate(${rotate}deg) translate(0, 15px)` };
    },
    rdigital() {
      return this.$refs.digital;
    },
  },
  created() {
    this.numeral.unshift(this.numeral.pop());
    this.d.time = this.value || new Date();
    this.b.am = this.d.time.getHours() < 12;
    this.run();
  },
  mounted() {
    if (this.digital) {
      this.fit();
      window.addEventListener("resize", this.handleWindowResize);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    run: function () {
      this.d.time.setSeconds(this.d.time.getSeconds() + 1);
      setInterval(() => {
        this.f.hour = this.d.time.getHours();
        this.f.minute = this.d.time.getMinutes();
        this.f.second = this.d.time.getSeconds();
        this.d.time.setSeconds(this.d.time.getSeconds() + 1);
      }, 1000);
    },
    fit: function () {
      let size = 100;
      const desired = this.$el.clientWidth;
      this.rdigital.style.fontSize = `${size}px`;
      while (this.rdigital.clientWidth > desired) {
        this.rdigital.style.fontSize = `${--size}px`;
      }
    },
    getTransform: function (index) {
      const { x, y } = this.getPosition(index);
      return {
        top: `${50 + y * 50}%`,
        left: `${50 + x * 50}%`,
      };
    },
    getPosition: function (value) {
      return {
        x: Math.sin(value * this.degrees),
        y: -Math.cos(value * this.degrees),
      };
    },
    handleWindowResize: function () {
      if (
        this.rdigital.clientWidth < this.$el.clientWidth ||
        this.$el.parentNode.clientWidth < this.rdigital.clientWidth
      ) {
        this.fit();
      }
    },
  },
};
</script>
