<template>
  <div class="gv-calendar">
    <div v-if="!embed" class="gv-header">
      <span
        class="header-left"
        :class="{ disabled: bleft }"
        @click.prevent="move(-1)"
      >
      </span>
      <div class="header-label">
        <span class="header-month">{{ header }}</span>
        <span class="header-year">{{ fyear }}</span>
      </div>
      <span
        class="header-right"
        :class="{ disabled: bright }"
        @click.prevent="move(1)"
      ></span>
    </div>
    <div class="gv-content">
      <div class="gv-weekday">
        <div v-for="weekday in weekdays()" :key="weekday.id" class="gv-item">
          {{ weekday }}
        </div>
      </div>
      <div class="gv-month">
        <gv-calendar-week v-for="item in items" :key="item.id" :items="item" />
      </div>
    </div>
    <div class="gv-footer" :class="{ active: footer.bactive }">
      <div
        class="gv-dismiss"
        @click.prevent="footer.bactive = !footer.bactive"
      ></div>
      <div class="gv-header">{{ footer.header }}</div>
      <div class="gv-content">
        <gv-list>
          <li
            v-for="event in footer.events"
            :key="event.id"
            :style="{
              '--current-background-color': event.color,
            }"
          >
            {{ event.description }}
            <slot v-if="event.endDate">
              <br />
              <small>
                ({{ format(event.date) }} - {{ format(event.endDate) }})
              </small>
            </slot>
          </li>
        </gv-list>
      </div>
    </div>
  </div>
</template>

<script>
import { date } from "@/utils";
import { CalendarEvent } from "@/classes";
export default {
  name: "gv-calendar",
  props: {
    min: Date,
    max: Date,
    value: Date,
    events: {
      type: Array,
      default: () => [],
    },
    holidays: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => [{ category: -1, color: "black" }],
    },
    locale: {
      type: String,
      default: "en-CA",
    },
    weekend: {
      type: Boolean,
      default: true,
    },
    embed: Boolean,
  },
  data() {
    return {
      items: [],
      dates: [],
      dmin: null,
      dmax: null,
      fyear: null,
      fmonth: null,
      bleft: true,
      bright: true,
      dselected: null,
      footer: {
        events: [],
        header: null,
        bactive: false,
      },
    };
  },
  computed: {
    today() {
      return new Date();
    },
    first() {
      return this.weekend ? 0 : 1;
    },
    last() {
      return this.weekend ? 6 : 5;
    },
    header() {
      return new Date(this.fyear, this.fmonth, 1).toLocaleString(this.locale, {
        month: "long",
      });
    },
  },
  watch: {
    min(val) {
      this.dmin = val;
      this.build();
    },
    max(val) {
      this.dmax = val;
      this.build();
    },
    value(val) {
      this.dselected = val;
      if (this.dselected) {
        if (!this.inRange(this.dselected, this.dmin, this.dmax)) {
          this.dselected = this.dmax || this.dmin;
        }
        this.fmonth = this.dselected.getMonth();
        this.fyear = this.dselected.getFullYear();
      }
      this.build();
    },
  },
  created() {
    this.dselected = this.value || this.today;

    this.fmonth = this.dselected.getMonth();
    this.fyear = this.dselected.getFullYear();

    this.events.forEach((event) => {
      this.add(event);
    });
  },
  mounted() {
    this.build();
  },
  methods: {
    move: function (value) {
      if (this.fmonth + value < 0) {
        this.fmonth = 11;
        this.fyear--;
      } else if (this.fmonth + value > 11) {
        this.fmonth = 0;
        this.fyear++;
      } else {
        this.fmonth = this.fmonth + value;
      }
      this.build();
    },
    add: function (newEvent) {
      if (
        newEvent.id !== undefined &&
        newEvent.date !== undefined &&
        !this.isException(newEvent.date)
      ) {
        const oldEvent = this.getEvent(newEvent.id);

        if (
          oldEvent.index === -1 ||
          (oldEvent.event !== null &&
            (oldEvent.event.category === -1 ||
              oldEvent.event.category !== newEvent.category))
        ) {
          const date = new Date(newEvent.date);

          const eventColor = this.getCategoryClass(newEvent.category || -1);

          do {
            if (this.inRange(date, this.dmin, this.dmax)) {
              const calendarEvent = new CalendarEvent(newEvent);

              calendarEvent.date = new Date(date);
              calendarEvent.color = eventColor;

              this.dates.push(calendarEvent);
            }

            date.setDate(date.getDate() + 1);
          } while (date <= newEvent.endDate);
        }
      }
    },
    addHoliday: function (date) {
      if (date !== undefined && !this.isException(date)) {
        if (this.inRange(date, this.dmin, this.dmax)) {
          this.holidays.push(date);
        }
      }
      return this;
    },
    remove: function (id) {
      if (id !== undefined) {
        const index = this.getEvent(id).index;
        if (index !== -1) {
          this.dates.splice(index, 1);
        }
      }
      return this;
    },
    select: function (item) {
      this.unselect();
      this.dselected = new Date(this.fyear, this.fmonth, item.day);

      if (item.description) {
        this.footer.header = this.dselected.toLocaleDateString(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        this.footer.events = item.events;
        this.footer.bactive = true;
      }

      this.$emit("input", this.dselected);
    },
    weekdays: function () {
      const weekdays = [];
      const date = new Date();
      while (date.getDay() !== this.first) date.setDate(date.getDate() - 1);
      for (let i = this.first; i <= this.last; i++) {
        weekdays.push(date.toLocaleString(this.locale, { weekday: "short" }));
        date.setDate(date.getDate() + 1);
      }
      return weekdays;
    },
    build: function () {
      const items = [];
      const from = new Date(this.fyear, this.fmonth, 1);
      const to = new Date(this.fyear, this.fmonth + 1, 0);

      while (to.getDay() !== this.last) to.setDate(to.getDate() + 1);

      while (from.getDay() !== this.first) from.setDate(from.getDate() - 1);

      while (from < to || this.compareTo(from, to)) {
        const weekday = from.getDay();
        if (weekday >= this.first && weekday <= this.last) {
          items.push(new Date(from));
        }
        from.setDate(from.getDate() + 1);
      }

      this.config(items);
      this.control(items);
    },
    config: function (days) {
      const items = [];
      const events = this.getEventByPeriod(this.fmonth, this.fyear);

      for (const day of days) {
        const configuration = {};

        configuration.day = day.getDate();

        configuration.disabled =
          day.getMonth() !== this.fmonth || this.isException(day)
            ? true
            : !this.inRange(day, this.dmin, this.dmax);

        if (!configuration.disabled) {
          configuration.disabled = false;

          if (this.compareTo(day, this.today)) {
            configuration.today = true;
          }

          if (this.dselected && this.compareTo(day, this.dselected)) {
            configuration.selected = true;
          } else {
            configuration.selected = false;
          }

          configuration.events = this.getEventByDate(events, day);
          configuration.categories = this.getCategories(configuration.events);

          if (this.hasDescription(configuration.events)) {
            configuration.description = true;
          }
        }

        if (day.getDay() === this.first) {
          items.push([configuration]);
        } else {
          items[items.length - 1].push(configuration);
        }
      }

      this.items = items;
    },
    unselect: function () {
      if (
        this.dselected !== null &&
        this.dselected.getMonth() === this.fmonth &&
        this.dselected.getFullYear() === this.fyear
      ) {
        const day = this.dselected.getDate();
        [].concat.apply([], this.items).forEach((item) => {
          if (item.day === day) {
            item.selected = false;
            return false;
          }
        });
      }
    },
    control: function (items) {
      this.bleft = !!(this.dmin !== null && items[0] <= this.dmin);

      this.bright = !!(
        this.dmax !== null && items[items.length - 1] >= this.dmax
      );
    },
    format: function (value) {
      return date.toDateString(value, this.locale);
    },
    compareTo: function (x, y) {
      return this.$utils.date.compareTo(x, y);
    },
    inRange: function (value, min, max) {
      return !min && !max ? true : this.$utils.date.inRange(value, min, max);
    },
    isException: function (date) {
      let exception = false;
      this.holidays.forEach((item) => {
        if (this.compareTo(item, date)) {
          exception = true;
          return false;
        }
      });
      return exception;
    },
    getEvent: function (id) {
      const event = { index: -1, item: null };
      this.dates.forEach((item, i) => {
        if (item.id === id) {
          event.index = i;
          event.item = item;
          return false;
        }
      });
      return event;
    },
    getEventByPeriod: function (month, year) {
      return this.dates.filter((item) => {
        if (
          item.date.getMonth() === month &&
          item.date.getFullYear() === year
        ) {
          return item;
        }
      });
    },
    getEventByDate: function (events, date) {
      return events.filter((item) => {
        if (this.compareTo(date, item.date)) {
          return item;
        }
      });
    },
    getCategoryClass: function (category) {
      let color = "black";
      if (this.categories.length > 0) {
        this.categories.forEach((item) => {
          if (item.category === category) {
            color = item.color;
            return false;
          }
        });
      }
      return color;
    },
    getCategories: function (events) {
      const categories = [];
      events.forEach((item) => {
        if (!categories.includes(item.color)) {
          categories.push(item.color);
        }
      });
      return categories;
    },
    hasDescription: function (events) {
      let description = false;
      events.forEach((item) => {
        if (item.description) {
          description = true;
          return false;
        }
      });
      return description;
    },
  },
};
</script>
