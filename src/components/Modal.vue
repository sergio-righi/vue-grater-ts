<template>
  <div
    class="gv-modal"
    :class="{ active: b.active, sm: sm, embed: embed }"
    @click.self="close"
  >
    <div v-if="ready" class="gv-popup">
      <gv-button class="gv-dismiss" @onclick="close" plain></gv-button>
      <div v-if="hasHeader" class="gv-header">
        <slot name="header" />
      </div>
      <div v-if="hasContent" class="gv-content">
        <slot name="content" />
      </div>
      <div v-if="hasFooter" class="gv-footer">
        <slot name="footer" />
      </div>
    </div>
    <div v-else class="gv-process">
      <gv-progress-circle indeterminate :size="80" :width="3" color="white" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-modal",
  props: {
    sm: Boolean,
    embed: Boolean,
    active: Boolean,
    ready: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      b: {
        active: false,
      },
    };
  },
  computed: {
    hasHeader() {
      return !!this.$slots.header;
    },
    hasContent() {
      return !!this.$slots.content;
    },
    hasFooter() {
      return this.checkbox || this.positive || this.negative;
    },
  },
  watch: {
    active(val) {
      val ? this.open() : this.close();
    },
  },
  beforeDestroy() {
    document.body.classList.remove("o-hidden");
  },
  methods: {
    open: function () {
      this.b.active = true;
      document.body.classList.add("o-hidden");
      document.addEventListener("keydown", this.handleKeyDown);
      this.$emit("onopen", this.$el);
    },
    close: function () {
      this.b.active = false;
      document.body.classList.remove("o-hidden");
      document.removeEventListener("keydown", this.handleKeyDown);
      if (this.embed) this.stop();
      this.$emit("onclose", this.$el);
    },
    stop: function () {
      const iframe = this.$el.querySelector("iframe");
      if (iframe) {
        iframe.setAttribute("src", iframe.src);
      }
    },
    handleKeyDown: function (event) {
      const keycode = this.$utils.keycode;
      if (this.b.active && event.which === keycode.esc) {
        this.close();
      }
    },
  },
};
</script>
