<template>
  <div class="gv-time-picker">
    <div v-if="!embed" class="gv-header">
      <span class="gv-item" :class="{ active: b.view }" @click="setView(true)">
        {{ hourText }}
      </span>
      <span class="gv-separator">:</span>
      <span
        class="gv-item"
        :class="{ active: !b.view }"
        @click="setView(false)"
      >
        {{ minuteText }}
      </span>
      <span v-show="ampm" class="gv-period">{{ b.am ? amText : pmText }}</span>
    </div>
    <div class="gv-content">
      <div ref="clock" class="gv-clock">
        <div ref="inner" class="gv-inner">
          <transition-group name="fade" mode="out-in">
            <div v-show="b.view" key="inner-hour">
              <div
                class="gv-pointer"
                :style="styleHourPointer"
                :class="{ active: f.hour !== null }"
              ></div>
              <span
                v-for="(item, index) in hours"
                :key="item.id"
                class="gv-item"
                :class="{
                  active: item === f.hour,
                  disabled: isHourDisabled(item),
                }"
                :style="getTransform(index)"
              >
                <span>{{ item }}</span>
              </span>
            </div>
            <div v-show="!b.view" key="inner-minute">
              <div
                class="gv-pointer"
                :style="styleMinutePointer"
                :class="{ active: f.minute !== null }"
              ></div>
              <span
                v-for="(item, index) in minutes"
                :key="item.id"
                class="gv-item"
                :class="{
                  active: item === f.minute,
                  disabled: isMinuteDisabled(item),
                }"
                :style="getTransform(index)"
              >
                <span>{{ item }}</span>
              </span>
            </div>
          </transition-group>
        </div>
        <slot v-if="ampm">
          <span
            class="gv-time period-am"
            :class="{ active: b.am }"
            @click.prevent="setPeriod(true)"
          >
            {{ amText }}
          </span>
          <span
            class="gv-time period-pm"
            :class="{ active: !b.am }"
            @click.prevent="setPeriod(false)"
          >
            {{ pmText }}
          </span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-time",
  props: {
    value: {
      type: Array,
      default: () => [null, null],
      validator: (value) => {
        if (![2, 3].includes(value.length)) return false;
        return (
          ((value[0] === null || typeof value[0] === "number") &&
            (value[1] === null || typeof value[1] === "number") &&
            value[2] === undefined) ||
          (value[2] !== undefined && typeof value[2] === "boolean")
        );
      },
    },
    ampm: {
      type: Boolean,
      default: true,
    },
    view: {
      type: Boolean,
      default: true,
    },
    min: Array,
    max: Array,
    embed: Boolean,
    allowHour: Array,
    allowMinute: Array,
  },
  data() {
    return {
      b: {
        am: true,
        view: this.view,
        dragging: false,
      },
      f: {
        hour: this.hour,
        minute: this.minute,
      },
    };
  },
  computed: {
    isInner() {
      return !!(this.b.view && !this.ampm && this.f.hour > this.count - 1);
    },
    amText() {
      return this.t("picker.am");
    },
    pmText() {
      return this.t("picker.pm");
    },
    minTime() {
      if (!this.min) return null;
      const hour = this.min[0] || this.hours.length;
      const minute = this.min[1] || 60;
      const am = this.ampm
        ? (this.min[2] || this.amText).toLowerCase() === this.amText
        : false;
      return [hour, minute, am];
    },
    maxTime() {
      if (!this.max) return null;
      const hour = this.max[0] || this.hours.length;
      const minute = this.max[1] || 60;
      const am = this.ampm
        ? (this.max[2] || this.amText).toLowerCase() === this.amText
        : false;
      return [hour, minute, am];
    },
    hourText() {
      return this.f.hour === null ? "--" : this.f.hour;
    },
    minuteText() {
      return this.f.minute === null
        ? "--"
        : this.$utils.number.pad(this.f.minute);
    },
    hours() {
      const am = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      const pm = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
      return this.ampm ? [12, ...am] : [0, ...am, 12, ...pm];
    },
    minutes() {
      return Array.from({ length: 12 }, (_, i) => i * 5);
    },
    degreesPerUnit() {
      return 360 / this.roundCount;
    },
    degrees() {
      return (this.degreesPerUnit * Math.PI) / 180;
    },
    count() {
      return this.b.view ? 12 : 60;
    },
    roundCount() {
      return 12;
    },
    styleHourPointer() {
      return this.getPositionPointer(this.f.hour);
    },
    styleMinutePointer() {
      return this.getPositionPointer(this.f.minute);
    },
    clock() {
      return this.$refs.clock;
    },
    inner() {
      return this.$refs.inner;
    },
  },
  watch: {
    view(val) {
      this.setView(val);
    },
    value(val) {
      this.config(val);
    },
  },
  created() {
    this.config(this.value);
  },
  mounted() {
    this.clock.addEventListener("mousedown", this.onMousedown);
    this.clock.addEventListener("touchstart", this.onMousedown);
    this.clock.addEventListener("mouseup", this.onMouseup);
    this.clock.addEventListener("touchend", this.onMouseup);
    this.clock.addEventListener("mousemove", this.onMousemove);
    this.clock.addEventListener("touchmove", this.onMousemove);
    this.clock.addEventListener("mouseleave", this.onMouseleave);
  },
  methods: {
    onMousedown: function (event) {
      if (event.target !== this.clock) return;
      event.preventDefault();
      this.b.dragging = true;
      this.onMousemove(event);
    },
    onMousemove: function (event) {
      event.preventDefault();
      if (!this.b.dragging) return;
      const { width, top, left } = this.clock.getBoundingClientRect();
      const { width: innerWidth } = this.inner.getBoundingClientRect();
      const { clientX, clientY } = event.touches ? event.touches[0] : event;
      const center = { x: width / 2, y: -width / 2 };
      const coords = { x: clientX - left, y: top - clientY };
      const handAngle = Math.round(this.angle(center, coords) - 360) % 360;
      const inner =
        this.b.view &&
        !this.ampm &&
        this.euclidean(center, coords) < (innerWidth + innerWidth * 0.6) / 4;
      let value = Math.round(
        this.count - (this.count * Math.abs(handAngle)) / 360
      );
      value = this.b.view
        ? Math.max(value, this.ampm ? 1 : 0)
        : value === this.count
        ? 0
        : value;
      value = inner ? value + this.roundCount : value;

      if (!this.ampm && this.b.view) {
        value = inner && value === 24 ? 12 : value;
        value = !inner && value === 12 ? 0 : value;
      }

      if (this.b.view) {
        if (!this.isHourDisabled(value)) {
          this.setValue(value);
        }
      } else if (!this.isMinuteDisabled(value)) {
        this.setValue(value);
      }
    },
    onMouseup: function () {
      this.b.dragging = false;
      this.setView(this.f.minute === null ? false : this.b.view);
      this.$emit("input", [this.f.hour, this.f.minute, this.b.am]);
    },
    onMouseleave: function (event) {
      if (this.b.dragging) {
        this.onMouseup(event);
      }
    },
    setValue: function (value) {
      if (this.b.view) {
        this.f.hour = parseFloat(value, 10);
      } else {
        this.f.minute = parseFloat(value, 10);
      }
    },
    setView: function (view) {
      this.b.view = view;
    },
    setPeriod: function (value) {
      this.b.am = value;
      this.$emit("input", [this.f.hour, this.f.minute, this.b.am]);
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
        x: Math.sin(value * this.degrees) * this.handScale(value),
        y: -Math.cos(value * this.degrees) * this.handScale(value),
      };
    },
    getPositionPointer: function (value) {
      const scale = this.isInner ? 0.6 : 1;
      const rotate = (360 * value) / this.count;
      return { transform: `rotate(${rotate}deg) scaleY(${scale})` };
    },
    handScale: function (value) {
      return value >= this.roundCount ? 0.6 : 1;
    },
    config: function (value) {
      this.f.hour = !this.isHourDisabled(value[0]) ? value[0] : null;
      this.f.minute = !this.isMinuteDisabled(value[1]) ? value[1] : null;
      this.b.am = this.ampm && value[2] !== undefined ? value[2] : true;
    },
    euclidean: function (p0, p1) {
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    },
    angle: function (center, p1) {
      const value =
        2 *
        Math.atan2(
          p1.y - center.y - this.euclidean(center, p1),
          p1.x - center.x
        );
      return Math.abs((value * 180) / Math.PI);
    },
    isHourDisabled: function (value) {
      const disabled = this.allowHour ? !this.allowHour.includes(value) : false;
      if (disabled) return true;
      return this.inRange(value, null);
    },
    isMinuteDisabled: function (value) {
      const disabled = this.allowMinute
        ? !this.allowMinute.includes(value)
        : false;
      if (disabled) return true;
      return this.inRange(value, this.f.hour);
    },
    inRange: function (value, compare) {
      if (!this.min && !this.max) return false;
      if (compare === null) {
        if (this.ampm) {
          if (this.b.am) {
            if (
              this.minTime &&
              this.maxTime &&
              this.minTime[2] &&
              this.maxTime[2]
            ) {
              return this.$utils.number.between(
                value,
                this.minTime[0],
                this.maxTime[0]
              );
            } else if (this.minTime && this.minTime[2]) {
              return value < this.minTime[0];
            } else if (this.maxTime && this.maxTime[2]) {
              return value > this.maxTime[0];
            }
          } else if (
            this.minTime &&
            this.maxTime &&
            !this.minTime[2] &&
            !this.maxTime[2]
          ) {
            return this.$utils.number.between(
              value,
              this.minTime[0],
              this.maxTime[0]
            );
          } else if (this.minTime && !this.minTime[2]) {
            return value < this.minTime[0];
          } else if (this.maxTime && !this.maxTime[2]) {
            return value > this.maxTime[0];
          }
        } else
          return this.$utils.number.between(value, this.min[0], this.max[0]);
      }
      if (this.min && this.min[0] === compare) {
        return value < this.min[1];
      }
      if (this.max && this.max[0] === compare) {
        return value > this.max[1];
      }
      return false;
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
};
</script>
