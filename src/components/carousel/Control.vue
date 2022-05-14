<template>
  <div class="gv-control">
    <div v-if="hasNav" class="gv-nav">
      <span
        v-for="(item, index) in items"
        :key="item.id"
        class="gv-item"
        :class="[control, { active: index === selected }]"
        @click="move(index)"
      >
        <slot v-if="control === 'number'">{{ index + 1 }}</slot>
      </span>
    </div>
    <div
      v-if="hasArrow"
      class="gv-arrow arrow-left"
      :class="{ 'd-none': !left }"
      @click="prev"
    ></div>
    <div
      v-if="hasArrow"
      class="gv-arrow arrow-right"
      :class="{ 'd-none': !right }"
      @click="next"
    ></div>
  </div>
</template>

<script>
export default {
  name: "gv-carousel-control",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      left: true,
      right: true,
    };
  },
  computed: {
    hasArrow() {
      return this.hasParent
        ? this.$parent.arrow && this.items.length > 1
        : false;
    },
    hasNav() {
      return this.hasParent ? this.$parent.nav && this.items.length > 1 : false;
    },
    control() {
      return this.hasParent ? this.$parent.control : false;
    },
    selected() {
      return this.hasParent
        ? this.$parent.loop
          ? this.$parent.index - 1
          : this.$parent.index
        : false;
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-carousel";
    },
  },
  mounted() {
    window.addEventListener("keyup", this.handleWindowKeyup);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.handleWindowKeyup);
  },
  methods: {
    prev: function () {
      this.$parent.prev();
    },
    next: function () {
      this.$parent.next();
    },
    move: function (index) {
      this.$parent.move(this.$parent.loop ? index + 1 : index);
    },
    manageArrow: function () {
      if (this.hasArrow) {
        if (this.items.length < 1) {
          this.left = false;
          this.right = false;
        } else if (this.selected === 0) {
          this.left = false;
        } else if (this.selected === this.items.length - 1) {
          this.right = false;
        } else {
          this.left = true;
          this.right = true;
        }
      }
    },
    handleWindowKeyup: function (event) {
      const keycode = this.$utils.keycode;
      //   if (this.carousel === document.activeElement) {
      switch (event.which) {
        case keycode.left:
          this.prev();
          break;
        case keycode.right:
          this.next();
          break;
      }
      //   }
    },
  },
};
</script>
