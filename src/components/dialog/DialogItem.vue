<template>
  <div class="gv-item" :class="{ embed: embed, active: active }">
    <div class="gv-header" v-if="hasHeader">
      <slot name="header" />
    </div>
    <div class="gv-content" v-if="hasContent">
      <slot name="content" />
    </div>
    <div class="gv-footer" v-if="hasFooter">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-dialog-item",
  props: {
    embed: Boolean,
    required: Boolean,
    data: [Array, Object, Number, String]
  },
  data() {
    return {
      active: false
    };
  },
  watch: {
    active(val) {
      if (!val && this.embed) {
        const iframe = this.$el.querySelector("iframe");
        if (iframe) {
          iframe.setAttribute("src", iframe.src);
        }
      }
    }
  },
  mounted() {
    if (this.hasParent) {
      this.$parent.append(this);
    }
  },
  computed: {
    hasHeader() {
      return !!this.$slots.header;
    },
    hasContent() {
      return !!this.$slots.content;
    },
    hasFooter() {
      return !!this.$slots.footer;
    },
    isRequired() {
      return this.required;
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-dialog";
    }
  },
  methods: {
    show: function() {
      this.active = true;
    },
    hide: function() {
      this.active = false;
    }
  }
};
</script>
