<template>
  <div
    class="gv-dialog"
    :class="{ active: b.active }"
    @click.self="onClickOutside"
  >
    <div class="gv-popup" :class="animation">
      <gv-button
        class="gv-dismiss"
        v-if="hasClose"
        @onclick="close"
        plain
      ></gv-button>
      <gv-button
        class="gv-prev"
        v-if="hasPrev"
        @onclick="prev"
        plain
      ></gv-button>
      <gv-button
        class="gv-next"
        v-if="hasNext"
        @onclick="next"
        plain
      ></gv-button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-dialog",
  props: {
    index: {
      default: 0,
      type: Number,
    },
    active: Boolean,
    dismissible: Boolean,
  },
  data() {
    return {
      items: [],
      cindex: -1,
      animation: null,
      b: {
        active: this.active,
      },
      animations: {
        open: "animation-open",
        close: "animation-close",
        block: "animation-block",
      },
    };
  },
  computed: {
    count() {
      return this.items?.length;
    },
    data() {
      return this.items[this.cindex]?.data ?? {};
    },
    hasClose() {
      return (
        (this.dismissible && !this.isRequired) ||
        (this.count > 1 && this.cindex === this.count - 1 && !this.isRequired)
      );
    },
    hasPrev() {
      return this.count > 1 && this.cindex > 0;
    },
    hasNext() {
      return !this.isRequired && this.count > 1 && this.cindex < this.count - 1;
    },
    isRequired() {
      return this.items[this.cindex]?.isRequired ?? false;
    },
  },
  watch: {
    active(val) {
      val ? this.open() : this.close();
    },
    index(val) {
      this.move(val);
    },
  },
  beforeDestroy() {
    document.body.classList.remove("o-hidden");
  },
  methods: {
    onClickOutside: function () {
      if (this.isRequired) {
        this.shake();
      } else {
        this.close();
      }
    },
    prev: function () {
      if (this.inRange(this.cindex - 1)) {
        this.move(this.cindex - 1);
      }
    },
    next: function () {
      if (this.inRange(this.cindex + 1)) {
        this.move(this.cindex + 1);
      }
    },
    move: function (index) {
      if (this.cindex !== index && this.inRange(index)) {
        this.$emit("onmove", { index: this.cindex, ...this.data });
        this.set(index);
      }
    },
    shake: function () {
      this.animate(this.animations.block);
    },
    open: function () {
      this.b.active = true;
      this.set(this.index);
      this.animate(this.animations.open);
      document.body.classList.add("o-hidden");
      document.addEventListener("keydown", this.handleKeyDown);
      this.$emit("onopen", { index: this.index, ...this.data });
    },
    close: function () {
      if (this.cindex === this.count - 1) {
        this.animate(this.animations.close);
        document.body.classList.remove("o-hidden");
        document.removeEventListener("keydown", this.handleKeyDown);
        this.$emit("onclose", { index: this.cindex, ...this.data });
      } else {
        this.next();
      }
    },
    set: function (index) {
      const next = this.items[index];
      if (next) {
        if (this.cindex !== index) {
          const prev = this.items[this.cindex];
          if (prev) {
            prev.hide();
          }
        }
        next.show();
        this.cindex = index;
      }
    },
    append: function (item) {
      this.items.push(item);
    },
    inRange: function (index) {
      return this.$utils.boolean.inRange(index, 0, this.count - 1);
    },
    animate: function (animation) {
      this.animation = animation;
      document.addEventListener("animationend", this.handleAnimationEnd);
    },
    handleKeyDown: function (event) {
      if (this.b.active) {
        const keycode = this.$utils.keycode;
        switch (event.which) {
          case keycode.esc: {
            this.onClickOutside();
            break;
          }
          case keycode.enter: {
            event.preventDefault();
            const reference = this.$refs.negativebutton;
            if (reference !== undefined) {
              reference.$el.click();
            }
            break;
          }
        }
      }
    },
    handleAnimationEnd: function () {
      document.removeEventListener("animationend", this.handleAnimationEnd);
      if (this.animation === this.animations.close) {
        this.b.active = false;
      }
      this.animation = null;
    },
  },
};
</script>
