<template>
  <div
    class="gv-tab"
    :class="{
      right: right,
      embed: embed,
      stretch: stretch,
      'upside-down': upsidedown,
    }"
  >
    <div class="gv-header" :class="[background, fontColor]">
      <div
        class="gv-arrow arrow-left"
        :class="{ hidden: !b.overflow, disabled: !hasPrev }"
        @click="prev()"
      >
        <gv-icon value="chevron-left" />
      </div>
      <div ref="wrapper" class="gv-wrapper">
        <div class="gv-content">
          <div
            class="gv-indicator"
            :style="{ left: f.left + 'px', width: f.width + 'px' }"
          >
            <div class="gv-bar"></div>
          </div>
          <div
            v-for="(item, index) in tabs"
            ref="header"
            :key="item.id"
            class="gv-item"
            :class="{ active: index === selected, disabled: item.disabled }"
            @click.prevent="move(index, item.disabled)"
          >
            <gv-icon :value="item.icon" v-if="item.icon" />
            <span>{{ item.header }}</span>
          </div>
        </div>
      </div>
      <div
        class="gv-arrow arrow-next"
        :class="{ hidden: !b.overflow, disabled: !hasNext }"
        @click="next()"
      >
        <gv-icon value="chevron-right" />
      </div>
    </div>
    <div class="gv-content">
      <div class="gv-wrapper">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-tab",
  props: {
    tab: {
      default: 1,
      type: Number,
      validator: (value) => value > 0,
    },
    bg: String,
    color: String,
    right: Boolean,
    embed: Boolean,
    stretch: Boolean,
    upsidedown: Boolean,
  },
  data() {
    return {
      tabs: [],
      start: 0,
      offset: 0,
      selected: 0,
      wrapper: null,
      b: {
        overflow: false,
        dragging: false,
      },
      f: {
        left: 0,
        width: 0,
      },
    };
  },
  computed: {
    prevIndex() {
      let prev = this.selected - 1;
      while (prev >= 0 && this.tabs[prev].disabled) prev--;
      return Math.max(prev, 0);
    },
    nextIndex() {
      let next = this.selected + 1;
      while (next < this.tabs.length && this.tabs[next].disabled) next++;
      return Math.min(next, this.tabs.length - 1);
    },
    hasPrev() {
      return this.selected !== 0;
    },
    hasNext() {
      return this.selected !== this.tabs.length - 1;
    },
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
  },
  mounted() {
    this.wrapper = this.$refs.wrapper;
    this.selected = Math.min(this.tab - 1, this.tabs.length - 1);

    this.wrapper.addEventListener("mousedown", this.handleDragstart);
    this.wrapper.addEventListener("touchstart", this.handleDragstart);
  },
  beforeDestroy() {
    this.wrapper.removeEventListener("mousedown", this.handleDragstart);
    this.wrapper.removeEventListener("touchstart", this.handleDragstart);
  },
  methods: {
    prev: function () {
      this.toggle(this.prevIndex);
      this.scroll();
    },
    next: function () {
      this.toggle(this.nextIndex);
      this.scroll();
    },
    move: function (index, disabled) {
      if (disabled || this.selected === index) return;
      this.toggle(index);
      this.scroll();
    },
    append: function (item) {
      this.tabs.push(item);

      this.$nextTick(() => {
        this.toggle(this.selected);
        this.b.overflow = this.$utils.boolean.hasOverflow(this.wrapper);
      });
    },
    toggle: function (index) {
      if (this.selected !== index) {
        this.tabs[this.selected].hide();
        this.selected = index;
      }
      this.tabs[this.selected].show();
      this.slider();
    },
    slider: function () {
      const header = this.$refs.header;
      if (header) {
        const element = header[this.selected];
        this.f.left = element.offsetLeft;
        this.f.width = element.clientWidth;
      }
    },
    // move() {
    //   this.ftranslate = this.fcontainerWidth * this.selected;
    // },
    scroll: function () {
      const header = this.$refs.header;
      if (header) {
        const element = header[this.selected];
        this.wrapper.scrollLeft =
          element.offsetLeft +
          element.clientWidth / 2 -
          this.wrapper.clientWidth / 2;
      }
    },
    handleDragmove: function (event) {
      document.addEventListener("mouseup", () => {
        this.b.dragging = false;
        document.removeEventListener("mousemove", this.handleDragmove);
      });

      document.addEventListener("touchend", () => {
        this.b.dragging = false;
        document.removeEventListener("touchmove", this.handleDragmove);
      });

      if (!this.b.dragging) return;

      const rect = this.wrapper.getBoundingClientRect();
      const end = event.pageX || event.touches[0].clientX - rect.left;

      this.wrapper.scrollLeft = this.offset - (end - this.start);
    },
    handleDragstart: function (event) {
      event.preventDefault();

      this.b.dragging = true;

      const rect = this.wrapper.getBoundingClientRect();

      this.offset = this.wrapper.scrollLeft;
      this.start = event.pageX || event.touches[0].clientX - rect.left;

      document.addEventListener("mousemove", this.handleDragmove, false);
      document.addEventListener("touchmove", this.handleDragmove, false);
    },
  },
};
</script>
