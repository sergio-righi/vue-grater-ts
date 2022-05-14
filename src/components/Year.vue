<template>
  <div class="gv-year-picker">
    <div v-if="!embed" class="gv-header">
      <span class="gv-year">{{ year }}</span>
    </div>
    <div class="gv-content">
      <div ref="items" class="gv-items">
        <div
          v-for="year in years"
          :key="year.id"
          class="gv-item"
          :class="{
            active: year === selected,
            current: year === current,
            disabled: disabled.indexOf(year) !== -1
          }"
          @click="onClick(year)"
        >
          {{ year }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-year",
  props: {
    value: Number,
    length: {
      type: Number,
      default: 100
    },
    max: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    min: {
      type: Number,
      default: Number.MIN_SAFE_INTEGER
    },
    disabled: {
      type: Array,
      default: () => []
    },
    embed: Boolean,
    visible: Boolean
  },
  data() {
    return {
      f: {
        min: null,
        max: null
      },
      current: null,
      selected: null
    };
  },
  computed: {
    year() {
      return this.selected ?? "-";
    },
    years() {
      return Array.from(
        { length: this.f.max - this.f.min + 1 },
        (_, i) => this.f.min + i
      );
    },
    items() {
      return this.$refs.items;
    }
  },
  watch: {
    value(val) {
      this.selected = val;
    },
    visible(val) {
      if (val) {
        this.moveTo();
      }
    }
  },
  created() {
    const slice = Math.ceil(this.length / 2);
    this.current = new Date().getFullYear();
    this.f.min = Math.max(this.current - slice, this.min);
    this.f.max = Math.min(this.current + slice, this.max);
  },
  methods: {
    onClick: function(val) {
      this.$emit("input", val);
      this.selected = val;
    },
    moveTo: function() {
      const selector = this.selected ? ".active" : ".current";
      const element = this.items.querySelectorAll(selector)[0];
      this.items.scrollTop =
        element.offsetTop -
        this.items.clientHeight / 2 +
        element.clientHeight / 2;
    }
  }
};
</script>
