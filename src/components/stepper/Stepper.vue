<template>
  <div class="gv-stepper" :class="{ inline: inline, locked: locked }">
    <div class="gv-header">
      <div
        class="gv-arrow arrow-prev"
        :class="{ hidden: !b.control, disabled: isFirst }"
        @click="prev"
      >
        <gv-icon value="chevron-left" />
      </div>
      <div ref="wrapper" class="gv-wrapper">
        <div class="gv-content">
          <div
            v-for="(item, index) in steps"
            ref="items"
            :key="item.id"
            class="gv-item"
            :class="{
              error: item.hasError,
              disabled: item.disabled,
              success: item.hasSuccess,
              active: isSelected(index, item.disabled)
            }"
            @click.prevent="set(index, item.disabled)"
          >
            <div class="gv-indicator">
              <gv-icon v-if="!number && item.icon" :value="item.icon" />
              <gv-icon v-else-if="!number && item.disabled" value="lock" />
              <gv-icon
                v-else-if="!number && item.hasError"
                value="exclamation"
              />
              <gv-icon v-else-if="!number && item.hasSuccess" value="check" />
              <span v-else>{{ index + 1 }}</span>
            </div>
            <div class="gv-label">
              <span class="gv-note" v-if="item.note">
                {{ item.note }}
              </span>
              {{ item.header }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="gv-arrow arrow-next"
        :class="{ hidden: !b.control, disabled: isLast }"
        @click="next"
      >
        <gv-icon value="chevron-right" />
      </div>
    </div>
    <div class="gv-content">
      <div class="gv-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-stepper",
  props: {
    step: {
      default: 1,
      type: Number,
      validator: value => value > 0
    },
    number: Boolean,
    inline: Boolean,
    locked: Boolean
  },
  data() {
    return {
      steps: [],
      selected: -1,
      direction: true,
      b: {
        end: false,
        start: false,
        control: true
      },
      f: {
        step: -1
      }
    };
  },
  computed: {
    wrapper() {
      return this.$refs.wrapper;
    },
    prevIndex() {
      let prev = this.selected - 1;
      while (prev >= 0 && this.steps[prev].disabled) prev--;
      return Math.max(prev, 0);
    },
    nextIndex() {
      let next = this.selected + 1;
      while (next < this.steps.length && this.steps[next].disabled) next++;
      return Math.min(next, this.steps.length - 1);
    },
    isFirst() {
      return this.b.start || this.selected === 0;
    },
    isLast() {
      return this.b.end || this.selected === this.steps.length - 1;
    }
  },
  mounted() {
    this.wrapper.addEventListener("scroll", this.handleWindowScroll);
  },
  beforeDestroy() {
    this.wrapper.removeEventListener("scroll", this.handleWindowScroll);
  },
  methods: {
    prev: function() {
      this.$emit("onprev", this.steps[this.selected], this.selected);
      this.select(this.prevIndex);
    },
    next: function() {
      this.$emit("onnext", this.steps[this.selected], this.selected);
      this.select(this.nextIndex);
    },
    set: function(index, disabled) {
      if (disabled || this.selected === index) return;
      this.$emit("onmove", this.steps, this.selected, index);
      this.select(index);
    },
    select: function(index) {
      this.direction = index > this.selected ? 1 : -1;
      if (this.selected !== index) {
        this.steps[this.selected].unselect();
        this.selected = index;
      }
      this.steps[this.selected].select();
      this.scroll();
    },
    append: function(item) {
      this.steps.push(item);

      this.f.step = Math.min(this.step - 1, this.steps.length - 1);
      this.selected = this.f.step;
      this.b.control = this.steps.length > 1;

      this.$nextTick(() => {
        this.select(this.f.step);
      });
    },
    scroll: function() {
      const wrapper = this.wrapper;
      const element = this.$refs.items[this.selected];
      const scrollLeft = this.inline
        ? element.clientWidth * this.direction
        : element.clientWidth / 2 - wrapper.clientWidth / 2;
      wrapper.scrollLeft = element.offsetLeft + scrollLeft;
    },
    isSelected: function(index, disabled) {
      if (disabled) return false;
      return (
        (this.inline && index === this.f.step) ||
        (!this.inline && index === this.selected)
      );
    },
    handleWindowScroll: function(event) {
      if (!this.inline) return false;
      this.b.start = event.target.scrollLeft === 0;
      this.b.end =
        event.target.scrollWidth ===
        event.target.scrollLeft + event.target.clientWidth;
    }
  }
};
</script>
