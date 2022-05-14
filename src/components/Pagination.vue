<template>
  <div
    v-if="!hasNone"
    class="gv-pagination"
    :class="{ center: center, condensed: condensed, 'arrow-only': arrowOnly }"
  >
    <div
      v-if="arrowOnly"
      :class="{ disabled: selected === 1 }"
      class="gv-control button-first"
      @click="set(1)"
    >
      <gv-icon value="chevron-double-left" />
    </div>
    <div
      v-if="!hideArrow"
      :class="{ disabled: !loop && selected === 1 }"
      class="gv-control button-prev"
      @click="prev"
    >
      <gv-icon value="chevron-left" />
    </div>
    <div class="gv-content" v-if="!arrowOnly">
      <gv-button
        plain
        v-for="(page, index) in pages"
        :key="index"
        :class="{ active: page === selected, ellipsis: isEllipsis(page) }"
        class="gv-item"
        @onclick="set(page, index)"
      >
        {{ page }}
      </gv-button>
    </div>
    <slot v-else />
    <div
      v-if="!hideArrow"
      :class="{ disabled: !loop && selected === total }"
      class="gv-control button-next"
      @click="next"
    >
      <gv-icon value="chevron-right" />
    </div>
    <div
      v-if="arrowOnly"
      :class="{ disabled: selected === total }"
      class="gv-control button-last"
      @click="set(total)"
    >
      <gv-icon value="chevron-double-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-pagination",
  props: {
    total: {
      type: Number,
      required: true,
    },
    value: {
      default: 1,
      type: Number,
      required: true,
    },
    max: {
      default: 7,
      type: Number,
      validation: (value) => value >= 5,
    },
    loop: Boolean,
    center: Boolean,
    hideArrow: Boolean,
    arrowOnly: Boolean,
    condensed: Boolean,
  },
  data() {
    return {
      pages: [],
      selected: 0,
      prevRange: 0,
      nextRange: 0,
      reference: 0,
    };
  },
  watch: {
    selected(val) {
      this.pages = this.getPages(val);
      this.reference = val;
      this.$emit("input", val);
      this.$emit("change", val);
    },
    total() {
      this.pages = this.getPages(this.selected);
    },
    max() {
      this.pages = this.getPages(this.selected);
    },
    value(val) {
      this.set(val < 1 ? 1 : val <= this.total ? val : this.total);
    },
  },
  computed: {
    hasNone() {
      return Number(this.total) <= 0;
    },
    hasOne() {
      return this.pages.filter((item) => this.isEllipsis(item)).length === 1;
    },
  },
  created() {
    const index = Math.max(1, this.value);
    const count = Math.max(0, this.total);
    this.selected = Math.min(count, index);
    this.pages = this.getPages(this.selected);
  },
  methods: {
    isEllipsis: function (index) {
      return !!isNaN(Number(index));
    },
    isLeft: function (index) {
      return (
        (this.hasOne && index < this.reference) ||
        (!this.hasOne && index < this.max / 2)
      );
    },
    isRight: function (index) {
      return (
        (this.hasOne && index > this.reference) ||
        (!this.hasOne && index > this.max / 2)
      );
    },
    set(page, index) {
      if (this.isEllipsis(page)) {
        if (this.isLeft(index)) {
          this.reference -= this.max - 4;
        } else {
          this.reference += this.max - 4;
        }
        this.pages = this.getPages(this.reference);
      } else if (typeof page.target === "undefined") {
        this.selected = page;
      } else {
        const value = parseInt(page.target.value, 10);
        this.selected =
          value < 1 ? 1 : value <= this.total ? value : this.total;
      }
    },
    getPages: function (selected) {
      if (this.total <= this.max) {
        const pages = this.setPages(1, this.total);
        return pages;
      }
      const even = this.max % 2 === 0 ? 1 : 0;
      if (this.total < this.max) {
        this.prevRange = Math.floor(this.max / (this.max / 2));
      } else {
        this.prevRange = Math.floor(this.max / 2);
      }
      this.nextRange = this.total - this.prevRange + 1 + even;
      if (this.total < this.max) {
        return [...this.setPages(1, this.total)];
      } else if (selected >= this.prevRange && selected <= this.nextRange) {
        const start = selected - this.prevRange + 2;
        const end = selected + this.prevRange - 2 - even;
        return [1, "...", ...this.setPages(start, end), "...", this.total];
      } else {
        return [
          ...this.setPages(1, this.prevRange),
          "...",
          ...this.setPages(this.nextRange, this.total),
        ];
      }
    },
    setPages: function (start, end) {
      return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    },
    next: function () {
      if (!this.loop && this.selected < this.total) {
        this.selected++;
      } else {
        this.selected = this.selected + 1 > this.total ? 1 : this.selected + 1;
      }
    },
    prev: function () {
      if (!this.loop && this.selected > 1) {
        this.selected--;
      } else {
        this.selected =
          this.selected - 1 === 0 ? this.total : this.selected - 1;
      }
    },
  },
};
</script>
