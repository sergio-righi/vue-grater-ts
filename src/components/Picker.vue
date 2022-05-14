<template>
  <gv-input
    embed
    readonly
    ref="element"
    :label="label"
    :error="error"
    v-bind="$attrs"
    v-model="display"
    @onblur="onBlur"
    @onfocus="onFocus"
    @keydown.tab="onKeyDown"
  >
    <template #leading>
      <gv-icon value="calendar-clock-outline" v-if="isDate && isTime" />
      <gv-icon value="calendar-month" v-else-if="isMonth || isYear" />
      <gv-icon value="clock-outline" v-else-if="isTime" />
      <gv-icon value="calendar-outline" v-else />
    </template>
    <template #trailing>
      <gv-button @onclick.prevent="clear" primary tabindex="-1" sm>
        <gv-icon value="eraser" />
      </gv-button>
    </template>
    <template #embed>
      <div class="gv-picker">
        <div
          class="gv-content"
          :class="{ 'gv-overlay': isPopup, active: b.active }"
          @click.self="close"
        >
          <div class="gv-datetime" :class="{ active: b.active }" tabindex="-1">
            <div v-if="hasHeader" class="gv-header">
              <div v-if="isDate" class="gv-date">
                <div
                  class="gv-day"
                  :data-label="t('picker.day')"
                  :class="{ active: icomponent === component.day }"
                  @click="icomponent = component.day"
                >
                  {{ sday }}
                </div>
                <div
                  class="gv-month"
                  :data-label="t('picker.month')"
                  :class="{ active: icomponent === component.month }"
                  @click="icomponent = component.month"
                >
                  {{ smonth }}
                </div>
                <div
                  class="gv-year"
                  :data-label="t('picker.year')"
                  :class="{ active: icomponent === component.year }"
                  @click="icomponent = component.year"
                >
                  {{ syear }}
                </div>
                <div class="gv-weekday">{{ sweekday }}</div>
              </div>
              <div v-if="isTime" class="gv-time">
                <div
                  class="gv-hour"
                  :class="{ active: icomponent === component.hour }"
                  @click="icomponent = component.hour"
                >
                  {{ shour }}
                </div>
                <div class="gv-separator">:</div>
                <div
                  class="gv-minute"
                  :class="{ active: icomponent === component.minute }"
                  @click="icomponent = component.minute"
                >
                  {{ sminute }}
                </div>
                <div v-if="isAmpm" class="gv-period">{{ speriod }}</div>
              </div>
            </div>
            <div class="gv-content">
              <gv-calendar
                v-show="icomponent === component.day"
                v-model="ddate"
                :min="dmin"
                :max="dmax"
                embed
                :locale="locale"
              />
              <gv-month
                v-show="icomponent === component.month"
                v-model="f.month"
                :embed="!isMonth"
                :locale="locale"
              />
              <gv-year
                v-show="icomponent === component.year"
                v-model="f.year"
                :visible="b.active && icomponent === component.year"
                :embed="!isYear"
              />
              <gv-time
                v-show="
                  [component.hour, component.minute].indexOf(icomponent) !== -1
                "
                v-model="atime"
                :ampm="isAmpm"
                :embed="isDate"
                :view="icomponent === component.hour"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </gv-input>
</template>

<script>
import { date, i18n } from "@/utils";
export default {
  name: "gv-picker",
  inheritAttrs: false,
  props: {
    min: Date,
    max: Date,
    label: String,
    value: [Date, Number],
    locale: {
      type: String,
      default: "en-CA",
    },
    isDate: {
      type: Boolean,
      default: true,
    },
    isAmpm: {
      type: Boolean,
      default: true,
    },
    error: Boolean,
    isTime: Boolean,
    isYear: Boolean,
    isMonth: Boolean,
    isPopup: Boolean,
  },
  data() {
    return {
      b: {
        am: true,
        active: false,
        continue: false,
      },
      f: {
        day: null,
        year: null,
        hour: null,
        month: null,
        minute: null,
      },
      display: null,
      hasValue: false,
      component: {
        day: 1,
        month: 2,
        year: 3,
        hour: 4,
        minute: 5,
      },
      icomponent: null,
    };
  },
  computed: {
    hasHeader() {
      return (
        (this.isDate || (!this.isDate && !this.isTime)) &&
        !this.isMonth &&
        !this.isYear
      );
    },
    atime: {
      get() {
        return [this.f.hour, this.f.minute, this.b.am];
      },
      set(val) {
        this.f.hour = val[0];
        this.f.minute = val[1];
        this.b.am = val[2];
        this.manageVisibility();
      },
    },
    dmin() {
      return this.min;
    },
    dmax() {
      return this.max;
    },
    ddate: {
      get() {
        return Number.isInteger(this.f.month) &&
          Number.isInteger(this.f.year) &&
          Number.isInteger(this.f.day)
          ? new Date(this.f.year, this.f.month, this.f.day)
          : null;
      },
      set(val) {
        this.f.day = val.getDate();
      },
    },
    smonth() {
      return Number.isInteger(this.f.month) ? this.pad(this.f.month + 1) : "--";
    },
    sday() {
      return Number.isInteger(this.f.day) ? this.pad(this.f.day) : "--";
    },
    syear() {
      return Number.isInteger(this.f.year) ? this.f.year : "----";
    },
    sdate() {
      return this.ddate ? date.toDateString(this.ddate, this.locale) : null;
    },
    sweekday() {
      return this.ddate
        ? this.ddate.toLocaleString(this.locale, { weekday: "long" })
        : null;
    },
    shour() {
      return this.f.hour === null ? "--" : this.f.hour;
    },
    sminute() {
      return this.f.minute !== null ? this.pad(this.f.minute) : "--";
    },
    stime() {
      const hour =
        this.f.hour !== null
          ? this.pad(
              this.isAmpm
                ? (this.b.am && this.f.hour === 12) ||
                  (!this.b.am && this.f.hour !== 12)
                  ? this.f.hour + 12
                  : this.f.hour
                : this.f.hour
            )
          : null;
      const minute = this.f.minute ? this.pad(this.f.minute) : null;
      return hour !== null && minute !== null
        ? new Date(0, 0, 0, hour, minute).toLocaleString(this.locale, {
            hour: "numeric",
            minute: "numeric",
            hour12: this.isAmpm,
          })
        : null;
    },
    speriod() {
      return this.b.am ? this.sam : this.spm;
    },
    sam() {
      return this.t("picker.am");
    },
    spm() {
      return this.t("picker.pm");
    },
    element() {
      return this.$refs.element;
    },
  },
  watch: {
    value() {
      this.build();
    },
    "f.year"() {
      this.manageVisibility();
    },
    "f.month"() {
      this.manageVisibility();
    },
    "f.day"() {
      this.manageVisibility();
    },
    "b.active"(val) {
      if (!val) {
        this.select();
      }
    },
  },
  mounted() {
    this.build();
    document.addEventListener("click", this.handleOutside);
    if (this.isPopup) {
      window.addEventListener("keyup", this.handleWindowKeyup);
    }
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleOutside);
    if (this.isPopup) {
      this.setOverflow(false);
      window.removeEventListener("keyup", this.handleWindowKeyup);
    }
  },
  methods: {
    onBlur: function () {
      if (!this.b.continue) {
        this.element.focus();
      } else if (this.b.active) {
        this.close();
      }
      this.b.continue = false;
    },
    clear: function () {
      this.f.day = null;
      this.f.year = null;
      this.f.hour = null;
      this.f.month = null;
      this.f.minute = null;
      this.display = null;
      this.hasValue = false;
      this.close();
      this.$emit("input", null);
    },
    onFocus: function () {
      this.open();
    },
    onKeyDown: function () {
      this.b.continue = true;
    },
    open: function () {
      if (!this.b.active) {
        if (this.isDate) {
          if (this.isYear) {
            this.icomponent = this.component.year;
          } else if (this.isMonth) {
            this.icomponent = this.component.month;
          } else if (this.f.day || (this.f.month && this.f.year)) {
            this.icomponent = this.component.day;
          } else if (this.f.year) {
            this.icomponent = this.component.month;
          } else {
            this.icomponent = this.component.year;
          }
        } else if (this.isTime) {
          this.icomponent = this.component.hour;
        }
        this.setOverflow(true);
        this.b.active = true;
      }
    },
    close: function () {
      this.setOverflow(false);
      this.b.active = false;
    },
    select: function () {
      this.set();
      if (this.isYear) {
        this.$emit("input", this.f.year);
      } else if (this.isMonth) {
        this.$emit(
          "input",
          Number.isInteger(this.f.month) ? this.f.month : null
        );
      } else if (this.isDate && this.isTime) {
        if (
          Number.isInteger(this.f.year) &&
          Number.isInteger(this.f.month) &&
          Number.isInteger(this.f.day) &&
          Number.isInteger(this.f.hour) &&
          Number.isInteger(this.f.minute)
        ) {
          this.$emit(
            "input",
            new Date(
              this.f.year,
              this.f.month,
              this.f.day,
              this.f.hour,
              this.f.minute
            )
          );
          this.hasValue = true;
        } else {
          this.hasValue = false;
        }
      } else if (this.isDate) {
        if (
          Number.isInteger(this.f.year) &&
          Number.isInteger(this.f.month) &&
          Number.isInteger(this.f.day)
        ) {
          this.$emit("input", new Date(this.f.year, this.f.month, this.f.day));
          this.hasValue = true;
        } else {
          this.hasValue = false;
        }
      } else if (this.isTime) {
        if (Number.isInteger(this.f.hour) && Number.isInteger(this.f.minute)) {
          const date = new Date();
          this.$emit(
            "input",
            new Date(
              this.f.year ?? date.getUTCFullYear(),
              this.f.month ?? date.getUTCMonth(),
              this.f.day ?? date.getUTCDate(),
              this.f.hour,
              this.f.minute
            )
          );
          this.hasValue = true;
        } else {
          this.hasValue = false;
        }
      }
      this.b.continue = true;
      this.element.blur();
    },
    build: function () {
      this.config();
      this.set();
    },
    config: function () {
      if (this.value !== null) {
        if (this.isYear) {
          this.f.year = this.value;
        } else if (this.isMonth) {
          this.f.month = this.value;
        } else if ((this.isDate && this.isTime) || this.isTime) {
          this.setDate(this.value);
          if (this.isAmpm) {
            this.setAmpm(this.value);
          }
          this.setTime(this.value);
        } else if (this.isDate) {
          this.setDate(this.value);
        }
      } else {
        this.clear();
      }
    },
    set: function () {
      if (this.isMonth) {
        this.display = Number.isInteger(this.f.month)
          ? date.toMonthString(this.f.month, this.locale, "long")
          : null;
      } else if (this.isYear) {
        this.display = this.f.year;
      } else if (this.isDate && this.isTime) {
        this.display =
          this.sdate === null || this.stime === null
            ? ""
            : `${this.sdate} ${this.stime}`;
      } else if (this.isDate) {
        this.display = this.sdate;
      } else if (this.isTime) {
        this.display = this.stime;
      }
    },
    setTime: function (value) {
      if (value instanceof Date) {
        this.f.hour = this.isAmpm
          ? value.getHours() <= 12
            ? value.getHours()
            : value.getHours() - 12
          : value.getHours();
        this.f.minute = value.getMinutes();
      }
    },
    setAmpm: function (value) {
      this.b.am = value === null ? false : value.getHours() <= 12;
    },
    setDate: function (value) {
      if (value instanceof Date) {
        this.f.day = value.getDate();
        this.f.month = value.getMonth();
        this.f.year = value.getFullYear();
      }
    },
    setOverflow: function (visibility) {
      if (this.isPopup) {
        if (visibility) {
          document.body.classList.add("o-hidden");
        } else {
          document.body.classList.remove("o-hidden");
        }
      }
    },
    manageVisibility: function () {
      const initialValue = this.icomponent;

      if (this.isDate && !this.isMonth && !this.isYear) {
        this.icomponent =
          this.f.year === null
            ? this.component.year
            : this.f.month === null
            ? this.component.month
            : this.f.day === null
            ? this.component.day
            : initialValue;
      }

      if (initialValue === this.icomponent && this.isTime) {
        this.icomponent =
          this.f.hour === null
            ? this.component.hour
            : this.f.minute === null
            ? this.component.minute
            : initialValue;
      }

      if (!this.hasValue && initialValue === this.icomponent) {
        this.close();
      }
    },
    pad: function (value) {
      return this.$utils.number.pad(value);
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
    handleOutside: function (event) {
      if (this.b.active && !this.$el.contains(event.target)) {
        this.close();
      }
    },
    handleWindowKeyup: function (event) {
      const keycode = this.$utils.keycode;
      switch (event.which) {
        case keycode.esc:
          this.close();
          break;
      }
    },
  },
};
</script>
