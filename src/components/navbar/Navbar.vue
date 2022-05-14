<template>
  <div class="gv-nav" :class="{ active: active, aside: sidebar, fixed: fixed }">
    <nav class="gv-navbar" :class="[background, fontColor, { center: center }]">
      <div class="gv-content">
        <div class="gv-trigger" @click="onClick" v-if="hasMenu">
          <gv-icon value="menu" />
        </div>
        <div class="gv-brand" v-if="hasBrand">
          <slot name="brand" />
        </div>
        <div class="gv-menu" v-if="hasMenu">
          <slot name="menu" />
        </div>
        <slot />
        <div class="gv-control" v-if="hasControl">
          <slot name="control" />
        </div>
      </div>
    </nav>
    <aside
      class="gv-sidebar"
      v-if="sidebar || hasMenu"
      @click.self="onClickOutside"
    >
      <div class="gv-drawer" :class="[background, fontColor, animation]">
        <div class="gv-wrapper">
          <div class="gv-header">
            <div class="gv-trigger" @click="onClick">
              <gv-icon value="close" />
            </div>
            <div class="gv-brand o-ellipsis" v-if="hasBrand">
              <slot name="brand" />
            </div>
          </div>
          <slot name="menu" />
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { color } from "@/utils";
export default {
  name: "gv-navbar",
  props: {
    bg: String,
    color: String,
    fixed: Boolean,
    center: Boolean,
    sidebar: Boolean,
  },
  data() {
    return {
      x: null,
      y: null,
      max: 30,
      min: 75,
      active: false,
      animation: null,
      animations: {
        close: "animation-close",
      },
    };
  },
  computed: {
    isMobile() {
      return this.$utils.boolean.isMobile();
    },
    hasBrand() {
      return !!this.$slots.brand;
    },
    hasMenu() {
      return !!this.$slots.menu;
    },
    hasControl() {
      return !!this.$slots.control;
    },
    hasSidebar() {
      return !!this.$slots.sidebar;
    },
    background() {
      return color.getBackground(this.bg);
    },
    fontColor() {
      return color.getFontColor(this.color);
    },
  },
  beforeDestroy() {
    document.body.classList.remove("o-hidden");

    if (this.isMobile) {
      window.removeEventListener("touchend", this.handleDragend);
      window.removeEventListener("touchstart", this.handleDragstart);
    }
  },
  mounted() {
    if (this.isMobile) {
      window.addEventListener("touchend", this.handleDragend);
      window.addEventListener("touchstart", this.handleDragstart);
    }
  },
  methods: {
    onClick: function () {
      this.active ? this.close() : this.open();
    },
    onClickOutside: function () {
      this.close();
    },
    open: function () {
      this.x = null;
      this.y = null;
      this.active = true;
      document.body.classList.add("o-hidden");
      this.$emit("onopen");
    },
    close: function () {
      if (this.active) {
        this.animate(this.animations.close);
        document.body.classList.remove("o-hidden");
        this.$emit("onclose");
      }
    },
    animate: function (animation) {
      this.animation = animation;
      document.addEventListener("animationend", this.handleAnimationEnd);
    },
    handleAnimationEnd: function () {
      document.removeEventListener("animationend", this.handleAnimationEnd);
      if (this.animation === this.animations.close) {
        this.active = false;
      }
      this.animation = null;
    },
    getTouches: function (event) {
      return {
        x: event.changedTouches[0].pageX,
        y: event.changedTouches[0].pageY,
      };
    },
    handleDragstart: function (event) {
      const { x, y } = this.getTouches(event);
      if (this.active || x <= this.max) {
        this.x = x;
        this.y = y;
      }
    },
    handleDragend: function (event) {
      if (!this.x || !this.y) return;

      const { x, y } = this.getTouches(event);

      const xDiff = this.x - x;
      const yDiff = this.y - y;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          this.close();
        } else {
          if (Math.abs(xDiff) >= this.min) {
            this.open();
          }
        }
      }
    },
  },
};
</script>
