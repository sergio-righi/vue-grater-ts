<template>
  <div
    class="gv-carousel"
    @click="onClick"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
    :class="{ embed: embed }"
  >
    <div
      class="gv-content"
      :style="{
        width: containerWidth + 'px',
        height: containerHeight + 'px',
      }"
    >
      <div
        ref="content"
        class="gv-items"
        :class="{ 'animation-transition': banimation }"
        :style="{
          transform: `translateX(-${ftranslate}px)`,
          width: containerWidth * count + 'px',
        }"
        @mouseup="onMouseUpLeave"
        @mousemove="onMousemove"
        @mouseleave="onMouseUpLeave"
        @mousedown="onMousedown"
      >
        <slot v-if="loop">
          <gv-carousel-item
            :clone="true"
            :href="items[items.length - 1].href"
            :src="items[items.length - 1].src"
            :style="{ width: containerWidth + 'px' }"
          />
          <gv-carousel-item
            v-for="item in items"
            :key="item.id"
            :href="item.href"
            :src="item.src"
            :style="{ width: containerWidth + 'px' }"
          />
          <gv-carousel-item
            :clone="true"
            :href="items[0].href"
            :src="items[0].src"
            :style="{ width: containerWidth + 'px' }"
          />
        </slot>
        <slot v-else>
          <gv-carousel-item
            v-for="item in items"
            :key="item.id"
            :href="item.href"
            :src="item.src"
            :style="{ width: containerWidth + 'px' }"
          />
        </slot>
      </div>
      <gv-carousel-control
        ref="navigation"
        :items="items"
        :class="{ active: bnav }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-carousel",
  props: {
    items: {
      type: Array,
      required: true,
    },
    embed: Boolean,
    rewind: Boolean,
    backward: Boolean,
    slideshow: Number,
    nav: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    control: {
      type: String,
      default: "circle",
      validator: (value) => ["circle", "square", "number"].includes(value),
    },
    selected: {
      default: 0,
      type: Number,
    },
  },
  data() {
    return {
      blocked: false,
      bstopped: false,

      bnav: false,
      banimation: true,

      ftranslate: 0,

      index: 0,
      moveToIndex: 0,
      containerWidth: 0,
      containerHeight: 0,

      fend: 0,
      fstart: 0,
    };
  },
  computed: {
    isMobile() {
      return this.$utils.boolean.isMobile();
    },
    count() {
      return this.loop ? this.items.length + 2 : this.items.length;
    },
    content() {
      return this.$refs.content;
    },
    navigation() {
      return this.$refs.navigation;
    },
  },
  watch: {
    selected(val) {
      this.index = this.loop ? val + 1 : val;
      this.ftranslate = this.containerWidth * this.index;
    },
  },
  mounted() {
    this.config();

    if (this.isMobile) {
      this.content.addEventListener("touchend", this.onMouseUpLeave);
      this.content.addEventListener("touchmove", this.onMousemove);
      this.content.addEventListener("touchstart", this.onMousedown);
    }

    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);

    this.content.addEventListener("touchend", this.onMouseUpLeave);
    this.content.addEventListener("touchmove", this.onMousemove);
    this.content.addEventListener("touchstart", this.onMousedown);
  },
  methods: {
    onClick: function (event) {
      if (this.blocked && event.target.parentNode.nodeName === "A") {
        event.preventDefault();
      }
    },
    onMouseover: function () {
      this.bnav = true;
      this.bstopped = true;
    },
    onMouseleave: function () {
      if (this.fstart > 0) {
        this.fstart = 0;
        this.move(this.index);
      }
      this.bnav = false;
      this.bstopped = false;
    },
    onMousedown: function (event) {
      event.preventDefault();
      this.bstopped = true;
      this.fstart = event.pageX || event.touches[0].clientX;
    },
    onMousemove: function (event) {
      this.fend = event.pageX || event.touches[0].clientX;
      if (this.fstart > 0) {
        if (this.loop || (this.index >= 0 && this.index < this.count)) {
          const diff = this.fend - this.fstart;
          const origin = this.index * this.containerWidth;

          if (origin - diff <= this.containerWidth * (this.count - 1)) {
            this.ftranslate = origin - diff;
          }
        }
      }
    },
    onMouseUpLeave: function () {
      this.bstopped = false;

      const interval = 200;
      const diff = (this.fend - this.fstart) * 2;

      if (this.fstart > 0) {
        if (diff > interval) {
          this.prev();
        } else if (diff < -interval) {
          this.next();
        } else {
          this.content.addEventListener(
            "transitionend",
            this.handleTransitionend
          );

          this.banimation = true;
          this.moveToIndex = this.index;
          this.ftranslate = this.containerWidth * this.index;
        }

        this.fstart = 0;
      }
    },
    move: function (index) {
      if (!this.blocked) {
        this.blocked = true;
        this.banimation = true;

        if (this.loop) {
          this.moveToIndex = index;
        } else {
          if (index >= this.count) {
            this.index = this.rewind ? 0 : this.count - 1;
          } else if (index < 0) {
            this.index = this.rewind ? this.count - 1 : 0;
          } else {
            this.index = index;
          }
          this.moveToIndex = this.index;
        }

        this.content.addEventListener(
          "transitionend",
          this.handleTransitionend
        );

        this.ftranslate = this.containerWidth * this.moveToIndex;
        this.$emit("onmove", this.moveToIndex);
      }
    },
    prev: function () {
      this.move(this.index - 1);
    },
    next: function () {
      this.move(this.index + 1);
    },
    config: function () {
      this.index = this.selected;
      this.handleWindowResize();

      if (this.isMobile) {
        this.bnav = true;
      }

      if (this.slideshow) {
        this.manageSlideshow();
      }

      if (this.loop) {
        this.banimation = false;
        this.ftranslate = this.containerWidth;
        this.index = this.selected + 1;
      } else if (!this.rewind) {
        this.navigation.manageArrow();
      }
    },
    manageSlideshow: function () {
      setInterval(() => {
        if (!this.bstopped) {
          if (!this.backward) {
            this.next();
          } else {
            this.prev();
          }
        }
      }, this.slideshow);
    },
    handleTransitionend: function () {
      this.content.removeEventListener(
        "animationend",
        this.handleTransitionend
      );

      this.banimation = false;

      if (this.loop) {
        this.index = this.moveToIndex;
        if (this.moveToIndex === this.count - 1) {
          this.index = 1;
        } else if (this.moveToIndex === 0) {
          this.index = this.count - 2;
        }
        this.ftranslate = this.containerWidth * this.index;
      } else if (!this.rewind) {
        this.navigation.manageArrow();
      }
      this.blocked = false;
    },
    handleWindowResize: function () {
      this.containerWidth = this.$el.clientWidth || window.innerWidth;
      this.containerHeight = (this.containerWidth * 9) / 16;
    },
  },
};
</script>
