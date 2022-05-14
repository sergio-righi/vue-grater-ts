<template>
  <div
    class="gv-off-canvas"
    :class="{ active: b.active, left: left, right: right }"
  >
    <div v-if="hasTrigger" class="gv-trigger" @click="open">
      <slot name="trigger" />
    </div>
    <div v-if="hasContent" class="gv-content" @click.self="onClickOutside">
      <div class="gv-drawer">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-off-canvas",
  props: {
    left: Boolean,
    right: Boolean,
    locked: Boolean,
    active: Boolean,
    required: Boolean
  },
  data() {
    return {
      b: {
        active: this.active
      }
    };
  },
  beforeDestroy() {
    document.body.classList.remove("o-hidden");
  },
  computed: {
    hasTrigger() {
      return !!this.$slots.trigger;
    },
    hasContent() {
      return !!this.$slots.content;
    }
  },
  methods: {
    open() {
      if (this.locked) {
        document.body.classList.add("o-hidden");
      }

      this.b.active = true;
      this.$emit("onopen", this.$el);
    },
    close() {
      document.body.classList.remove("o-hidden");

      this.b.active = false;
      this.$emit("onclose", this.$el);
    },
    toggle() {
      this.b.active ? this.close() : this.open();
    },
    onClickOutside: function() {
      if (!this.required) {
        this.close();
      } else {
        this.$emit("onrequired", this.$el);
      }
    }
  },
  watch: {
    active(val) {
      val ? this.open() : this.close();
    }
  }
};
</script>
