<template>
  <div class="gv-overlap" :class="{ active: b.active, hidden: b.hidden }">
    <div class="gv-header" @click="toggle">
      <div class="header-label">
        <slot name="header" />
      </div>
      <div v-if="!hideArrow" class="header-icon icon-arrow"></div>
      <div
        v-if="dismissible"
        class="header-icon icon-close"
        @click.stop="close"
      ></div>
    </div>
    <div class="gv-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-overlap",
  props: {
    active: Boolean,
    hidden: Boolean,
    hideArrow: Boolean,
    dismissible: Boolean
  },
  data() {
    return {
      b: {
        active: this.active
      }
    };
  },
  computed: {
    hasHeader() {
      return !!this.$slots.header;
    },
    hasContent() {
      return !!this.$slots.content;
    }
  },
  methods: {
    open() {
      this.b.active = true;
      this.$emit("onopen", this.$el);
    },
    close() {
      this.b.active = false;
      this.$emit("onclose", this.$el);
    },
    toggle() {
      this.b.active ? this.close() : this.open();
    },
    hide() {
      this.b.hidden = true;
      this.$emit("onhide", this.$el);
    },
    show() {
      this.b.hidden = false;
      this.$emit("onshow", this.$el);
    }
  },
  watch: {
    hidden(val) {
      val ? this.hide() : this.show();
    },
    active(val) {
      val ? this.close() : this.open();
    }
  }
};
</script>
