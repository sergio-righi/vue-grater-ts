<template>
  <div
    class="gv-slider"
    :class="{ disabled: disabled }"
    @keydown.left="onKeydownLeft"
    @keydown.right="onKeydownRight"
    @mousewheel.prevent="onMousewheel"
  >
    <div
      ref="slider"
      class="gv-track"
      :disabled="disabled"
      @click="onClick($event), (b.active = true)"
    >
      <span
        :style="line"
        :class="{ 'animation-transition': b.animation }"
        class="gv-line"
      ></span>
      <span class="gv-line line-two"></span>

      <span
        :style="{ left: f.left1 + '%' }"
        :class="{ 'run-animation': b.animation }"
        class="gv-line-animation"
      ></span>

      <slot v-for="(tick, index) in ticks">
        <span
          v-if="b.tick && tick"
          :key="tick.id"
          :class="{ last: index == ticks - 1 }"
          :style="position(index)"
          class="gv-tick"
        >
        </span>
      </slot>
    </div>
    <div
      ref="circle1"
      :style="{ left: f.left1 + '%' }"
      :class="{
        equal: isEqual,
        move: hasChanged,
        end: value == max,
        'animation-transition': b.animation,
      }"
      :disabled="disabled"
      class="gv-pointer slider-circle"
      @mousedown="onMousedown($event), (b.active = true)"
      @touchstart="onMousedown($event), (b.active = true)"
    >
      <span class="gv-text">
        {{ f.value1 }}
        <span v-if="text">{{ text }}</span>
        <gv-icon v-if="icon" :value="icon" />
      </span>
    </div>
    <div
      v-if="Array.isArray(value)"
      ref="circle2"
      :disabled="disabled"
      :class="{
        equal: isEqual,
        move: hasChanged,
        end: value == max,
        'animation-transition': b.animation,
      }"
      :style="{ left: f.left2 + '%' }"
      class="gv-pointer slider-circle line-two"
      @mousedown="onMousedown($event), (b.range = true), (b.active = true)"
      @touchstart="onMousedown($event), (b.range = true), (b.active = true)"
    >
      <span class="gv-text">
        {{ f.value2 }}
        <span v-if="text">{{ text }}</span>
        <gv-icon v-if="icon" :value="icon" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-slider",
  props: {
    value: {
      default: 0,
      type: [Array, Number],
    },
    disabled: Boolean,
    max: {
      default: 100,
      type: [Number, String],
    },
    min: {
      default: 0,
      type: Number,
    },
    step: {
      default: 1,
      type: [Number, String],
    },
    icon: String,
    text: String,
  },
  data() {
    return {
      f: {
        left1: 0,
        left2: 0,
        value1: 0,
        value2: 0,
      },
      b: {
        tick: false,
        range: false,
        active: false,
        decimal: false,
        animation: false,
      },
      hasChanged: false,
    };
  },
  computed: {
    isEqual() {
      return Array.isArray(this.value)
        ? this.value[0] === this.value[1]
        : false;
    },
    ticks() {
      // return this.max + 1;
      return (this.max - this.min) / this.step;
    },
    line() {
      let left = this.f.left1;
      let width = this.f.left2 - this.f.left1;
      if (this.f.left1 > this.f.left2) {
        left = this.f.left2;
        width = this.f.left1 - this.f.left2;
      }
      return {
        left: `${left}%`,
        width: `${width}%`,
      };
    },
  },
  watch: {
    value() {
      if (!this.b.active) {
        this.init();
      }
      this.hasChanged = true;
      setTimeout(() => (this.hasChanged = false), 300);
      this.$emit("onchange", this.value);
    },
    "f.left1": {
      handler() {
        if (Array.isArray(this.value)) {
          if (this.f.left1 > this.f.left2) {
            this.f.value1 = this.value[1];
          } else {
            this.f.value1 = this.value[0];
          }
        } else {
          this.f.value1 = this.value;
        }
      },
    },
    "f.left2": {
      handler() {
        if (this.f.left2 > this.f.left1) {
          this.f.value2 = this.value[1];
        } else {
          this.f.value2 = this.value[0];
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.b.decimal = this.step % 1 !== 0;
    this.b.tick = !(this.disabled || this.ticks > 100);
    this.init();
  },
  methods: {
    onClick: function (event) {
      const slider = this.$refs.slider;
      const left = event.clientX - slider.getBoundingClientRect().left;
      this.b.animation = true;
      setTimeout(() => (this.b.animation = false), 200);
      const percentage = Math.round((left / slider.clientWidth) * 100);
      if (Array.isArray(this.value)) {
        if (
          Math.abs(percentage - this.f.left) >
          Math.abs(percentage - this.f.left2)
        ) {
          this.b.range = true;
        } else {
          this.b.range = false;
        }
      }
      this.switch(left);
    },
    onMousewheel: function (event) {
      if (!Array.isArray(this.value)) {
        if (event.wheelDelta > 0) {
          let value = parseFloat(this.value, 10) + parseFloat(this.step, 10);
          value = this.b.decimal ? this.toDecimal(value) : Math.round(value);
          if (this.value >= this.max) {
            value = this.max;
          }
          this.f.left1 = value;
          this.$emit("input", value);
        } else {
          let value = parseFloat(this.value, 10) - parseFloat(this.step, 10);
          value = this.b.decimal ? this.toDecimal(value) : Math.round(value);
          if (this.value <= this.min) {
            value = this.min;
          }
          this.f.left1 = value;
          this.$emit("input", value);
        }
      }
    },
    onKeydownLeft: function () {
      if (!Array.isArray(this.value)) {
        let value = parseFloat(this.value, 10) - parseFloat(this.step, 10);
        value = this.b.decimal ? this.toDecimal(value) : Math.round(value);
        if (this.value === this.min) {
          value = this.min;
        }
        this.f.left1 = value;
        this.$emit("input", value);
      }
    },
    onKeydownRight: function () {
      if (!Array.isArray(this.value)) {
        let value = parseFloat(this.value, 10) + parseFloat(this.step, 10);
        value = this.b.decimal ? this.toDecimal(value) : Math.round(value);
        if (this.value >= this.max) {
          value = this.max;
        }
        this.f.left1 = value;
        this.$emit("input", value);
      }
    },
    init: function () {
      if (Array.isArray(this.value)) {
        this.f.value1 = Math.max(this.min, this.value[0]);
        this.f.value2 = Math.min(this.max, this.value[1]);

        this.f.left1 =
          ((this.f.value2 - this.min) / (this.max - this.min)) * 100;
        this.f.left2 =
          ((this.f.value1 - this.min) / (this.max - this.min)) * 100;
      } else {
        this.f.value1 = this.$utils.number.between(
          this.value,
          this.min,
          this.max
        );
        this.f.left1 =
          ((this.f.value1 - this.min) / (this.max - this.min)) * 100;
      }
    },
    position: function (index) {
      // const gap = 100 / ((this.max - this.min) / this.step);
      const gap = 100 / this.ticks;
      return {
        left: index * gap + "%",
      };
    },
    switch: function (left) {
      const slider = this.$refs.slider;
      const gap = 100 / this.ticks;
      const percentage = (left / slider.clientWidth) * 100;
      const steps = Math.round(percentage / gap);
      let value = steps * gap * (this.max - this.min) * 0.01 + this.min;
      value = this.b.decimal ? this.toDecimal(value) : Math.round(value);
      if (value > this.max) {
        value = this.max;
        this["f"][this.b.range ? "left2" : "left1"] = 100;
      } else {
        this["f"][this.b.range ? "left2" : "left1"] = steps * gap;
      }
      if (Array.isArray(this.value)) {
        const aux = this.value;
        const val = value === this.max ? this.max : value;
        const min =
          Math.round((this.f.left2 / 100) * (this.max / this.step)) * this.step;
        const max =
          Math.round((this.f.left1 / 100) * (this.max / this.step)) * this.step;
        if (this.b.range) {
          if (min < max) {
            this.$emit("input", [val, aux[1]]);
          } else if (min > max) {
            this.$emit("input", [aux[0], val]);
          } else {
            this.$emit("input", [val, val]);
          }
        } else if (min > max) {
          this.$emit("input", [val, aux[1]]);
        } else if (min < max) {
          this.$emit("input", [aux[0], val]);
        } else {
          this.$emit("input", [val, val]);
        }
      } else {
        this.$emit("input", value);
      }
    },
    onMousedown: function () {
      window.addEventListener("mouseup", this.handleMouseup);
      window.addEventListener("touchend", this.handleMouseup);
      window.addEventListener("mousemove", this.handleMousemove);
      window.addEventListener("touchmove", this.handleMousemove);
    },
    handleMousemove: function (event) {
      let left;
      const slider = this.$refs.slider;
      if (event.type === "touchmove") {
        left =
          event.targetTouches[0].clientX - slider.getBoundingClientRect().left;
      } else {
        left = event.clientX - slider.getBoundingClientRect().left;
      }
      if (Math.sign(left) === -1) {
        left = 0;
      } else if (left > slider.clientWidth) {
        left = slider.clientWidth;
      }
      this.switch(left);
    },
    handleMouseup: function () {
      this.b.range = this.b.active = false;
      window.removeEventListener("mouseup", this.handleMouseup);
      window.removeEventListener("touchend", this.handleMouseup);
      window.removeEventListener("mousemove", this.handleMousemove);
      window.removeEventListener("touchmove", this.handleMousemove);
    },
    toDecimal: function (value) {
      return parseFloat(value.toFixed(1));
    },
  },
};
</script>
