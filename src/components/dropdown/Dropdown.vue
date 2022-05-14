<template>
  <div
    class="gv-dropdown"
    v-click-outside="close"
    :class="{ active: b.active, arrow: b.arrow }"
  >
    <div ref="trigger" class="gv-trigger" @click.prevent="toggle">
      <slot name="trigger" />
    </div>
    <div
      ref="content"
      class="gv-content"
      :style="{ top: f.top + 'px', left: f.left + 'px' }"
      tabindex="1"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-dropdown",
  props: {
    left: Boolean,
    embed: Boolean,
    arrow: Boolean,
    active: Boolean
  },
  data() {
    return {
      f: {
        top: null,
        left: null
      },
      b: {
        arrow: this.arrow,
        active: this.active
      }
    };
  },
  watch: {
    active(val) {
      val ? this.open() : this.close();
    }
  },
  computed: {
    trigger() {
      return this.$refs.trigger;
    },
    content() {
      return this.$refs.content;
    }
  },
  mounted() {
    this.setPosition();
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    close: function() {
      this.b.active = false;
      this.$emit("onclose", this.$el);
    },
    open: function() {
      this.b.active = true;
      this.setPosition();
      this.$emit("onopen", this.$el);
    },
    toggle: function() {
      this.b.active ? this.close() : this.open();
    },
    setPosition: function() {
      if (!this.embed) {
        const triggerBoundaries = this.trigger.getBoundingClientRect();
        const contentBoundaries = this.content.getBoundingClientRect();

        if (
          this.left ||
          triggerBoundaries.x + contentBoundaries.width > window.innerWidth
        ) {
          this.f.left = triggerBoundaries.width - contentBoundaries.width;
        }
      }
    },
    handleWindowResize: function() {
      this.setPosition();
    }
  }
};
</script>
