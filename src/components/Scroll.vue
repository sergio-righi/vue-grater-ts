<template>
  <div
    class="gv-scroll"
    :class="{
      hidden: hideScrollbar || !b.overflow,
      stretch: stretch && !vertical && !b.overflow,
      vertical: vertical,
    }"
  >
    <div
      ref="wrapper"
      class="gv-wrapper"
      :style="{ height: height }"
      @mousewheel="handleMousewheel"
    >
      <div ref="content" class="gv-content">
        <slot name="content" />
      </div>
    </div>
    <template v-if="hasArrow">
      <div class="gv-control prev" @click="prev" :class="{ hidden: b.start }">
        <gv-icon value="chevron-left" />
      </div>
      <div class="gv-control next" @click="next" :class="{ hidden: b.end }">
        <gv-icon value="chevron-right" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "gv-scroll",
  props: {
    height: String,
    stretch: Boolean,
    vertical: Boolean,
    hideArrow: Boolean,
    hideScrollbar: Boolean,
  },
  data() {
    return {
      start: 0,
      offset: 0,
      b: {
        end: false,
        start: true,
        overflow: false,
        dragging: false,
      },
    };
  },
  mounted() {
    this.check();
  },
  beforeDestroy() {
    this.unbind();
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: {
    hasArrow() {
      return !this.hideArrow && this.b.overflow;
    },
    wrapper() {
      return this.$refs.wrapper;
    },
  },
  methods: {
    check: function () {
      this.b.overflow = this.$utisl.boolean.hasOverflow(this.wrapper);
    },
    bind: function () {
      if (!this.vertical) {
        window.addEventListener("resize", this.handleWindowResize);
        this.wrapper.addEventListener("scroll", this.handleWindowScroll);
        this.wrapper.addEventListener("mousedown", this.handleDragstart);
        this.wrapper.addEventListener("touchstart", this.handleDragstart);
      }
    },
    unbind: function () {
      if (!this.vertical) {
        this.wrapper.removeEventListener("scroll", this.handleWindowScroll);
        this.wrapper.removeEventListener("mousedown", this.handleDragstart);
        this.wrapper.removeEventListener("touchstart", this.handleDragstart);
      }
    },
    prev: function () {
      this.wrapper.scrollLeft -= this.wrapper.clientWidth * 0.75;
    },
    next: function () {
      this.wrapper.scrollLeft += this.wrapper.clientWidth * 0.75;
    },
    handleWindowResize: function () {
      this.check();
    },
    handleWindowScroll: function (event) {
      this.b.start = event.target.scrollLeft <= 50;
      this.b.end =
        event.target.scrollWidth ===
        event.target.scrollLeft + event.target.clientWidth;
    },
    handleDragmove: function (event) {
      document.addEventListener("mouseup", () => {
        this.b.dragging = false;
        document.removeEventListener("mousemove", this.handleDragmove, false);
      });

      document.addEventListener("touchend", () => {
        this.b.dragging = false;
        document.removeEventListener("touchmove", this.handleDragmove, false);
      });

      if (!this.b.dragging) return;

      const rect = this.wrapper.getBoundingClientRect();

      const end = this.vertical
        ? event.pageY || event.touches[0].clientY - rect.top
        : event.pageX || event.touches[0].clientX - rect.left;

      const diff = this.offset - (end - this.start);

      if (this.vertical) {
        this.wrapper.scrollTop = diff;
      } else {
        this.wrapper.scrollLeft = diff;
      }
    },
    handleDragstart: function (event) {
      this.b.dragging = true;

      const rect = this.wrapper.getBoundingClientRect();

      this.start = this.vertical
        ? event.pageY || event.touches[0].clientY - rect.top
        : event.pageX || event.touches[0].clientX - rect.left;

      this.offset = this.vertical
        ? this.wrapper.scrollTop
        : this.wrapper.scrollLeft;

      document.addEventListener("mousemove", this.handleDragmove, false);
      document.addEventListener("touchmove", this.handleDragmove, false);

      return false;
    },
    handleMousewheel: function (event) {
      event.preventDefault();
      if (this.vertical) {
        this.wrapper.scrollTop -= event.wheelDelta;
      } else {
        this.wrapper.scrollLeft -= event.wheelDelta;
      }
    },
  },
  watch: {
    "b.overflow": {
      handler: function (val) {
        val ? this.bind() : this.unbind();
      },
    },
  },
};
</script>
