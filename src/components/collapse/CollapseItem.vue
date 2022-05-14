<template>
  <div class="gv-item" :class="{ active: b.active }">
    <div tabindex="0" class="gv-header" @click.self="toggle">
      <div class="gv-leading">
        <slot v-if="hasLeading" name="leading" />
        <gv-icon v-else-if="!hideArrow" value="chevron-down" />
      </div>
      <div class="gv-title" v-if="hasTitle || hasSubtitle">
        <slot name="title" v-if="hasTitle" />
        <small v-if="hasSubtitle">
          <slot name="subtitle" />
        </small>
      </div>
      <div class="gv-trailing" v-if="hasTrailing">
        <slot name="trailing" />
      </div>
    </div>
    <div class="gv-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-collapse-item",
  props: {
    id: String,
    active: Boolean
  },
  data() {
    return {
      b: {
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
    hasLeading() {
      return !!this.$slots.leading;
    },
    hasTitle() {
      return !!this.$slots.title;
    },
    hasSubtitle() {
      return !!this.$slots.subtitle;
    },
    hasTrailing() {
      return !!this.$slots.trailing;
    },
    hideArrow() {
      return this.hasParent ? this.$parent.hideArrow : false;
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-collapse";
    }
  },
  mounted() {
    if (this.hasParent) {
      this.$parent.append(this);
    }
  },
  methods: {
    toggle: function() {
      if (this.hasParent && this.$parent.exclusive && !this.b.active) {
        this.$parent.close();
      }
      this.b.active ? this.close() : this.open();
    },
    open: function() {
      this.b.active = true;
      this.$emit("onopen", this.$el);
    },
    close: function() {
      this.b.active = false;
      this.$emit("onclose", this.$el);
    }
  }
};
</script>
