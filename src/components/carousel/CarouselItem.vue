<template>
  <gv-image
    :href="href"
    class="gv-item"
    :src="src"
    target="_blank"
    @onload="onLoad"
    :class="{ 'item-clone': clone, contain: !landscape }"
    lazyload
  />
</template>

<script>
export default {
  name: "gv-carousel-item",
  props: {
    href: [String, Object, Function],
    src: {
      type: String,
      required: true
    },
    clone: Boolean
  },
  data() {
    return {
      landscape: true
    };
  },
  methods: {
    onLoad: function(element) {
      const image = element.path[0];
      if (image) {
        this.landscape = image.naturalWidth >= image.naturalHeight;
      }
    }
  }
};
</script>
