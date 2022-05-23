<template>
  <gv-link
    :href="href"
    :target="target"
    class="gv-image"
    v-if="loaded"
    @mouseup.native="onMouseup"
    @mousemove.native="onMousemove"
    @mouseleave.native="onMouseleave"
    :style="imageStyle"
    :class="{
      circle: circle,
      square: square,
      zoom: zoom,
      hover: hover,
      active: active,
    }"
  >
    <img
      v-bind="$attrs"
      v-on="$listeners"
      :src="imageSource"
      :alt="alt"
      @load="onLoad"
      @error="onError"
    />
    <div v-if="hasInner" class="gv-inner" :class="{top: top}">
      <div class="gv-content">
        <slot />
      </div>
    </div>
  </gv-link>
  <gv-flexbox
    flex
    align="center"
    justify="center"
    :style="{height: height + 'px'}"
    v-else
  >
    <gv-progress-circle v-if="!error" :size="30" indeterminate />
    <gv-icon size="24px" value="refresh" @onclick="load" v-else />
  </gv-flexbox>
</template>

<script>
export default {
  name: 'gv-image',
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      required: true,
    },
    href: [String, Object, Function],
    target: {
      type: String,
      default: '_self',
    },
    alt: String,
    top: Boolean,
    zoom: Boolean,
    hover: Boolean,
    square: Boolean,
    circle: Boolean,
    noCache: Boolean,
    lazyload: Boolean,
  },
  data() {
    return {
      height: null,
      error: false,
      loaded: false,
      active: false,
    };
  },
  computed: {
    hasInner() {
      return !!this.$slots.default;
    },
    imageSource() {
      return this.noCache ? `${this.src}?${new Date().getTime()}` : this.src;
    },
    imageStyle() {
      return this.zoom
        ? {'--current-background-image': `url('${this.src}')`}
        : null;
    },
  },
  beforeMount() {
    this.config();
  },
  methods: {
    config: function () {
      this.lazyload ? this.load() : (this.loaded = true);
    },
    calculateZoom: function (event) {
      const zoom = this.$el;
      const currentEvent = event.touches ? event.touches[0] : event;
      const x = (currentEvent.offsetX / zoom.offsetWidth) * 100;
      const y = (currentEvent.offsetY / zoom.offsetHeight) * 100;
      zoom.style.backgroundPosition = x + '% ' + y + '%';
    },
    load: function () {
      this.error = false;
      this.loaded = false;
      const image = new Image();

      image.onload = (event) => {
        this.loaded = true;
        this.$emit('onload', event);
      };

      image.onerror = (event) => {
        this.error = true;
        this.$emit('onerror', event);
      };

      const watch = setInterval(() => {
        if (image.naturalWidth) {
          clearInterval(watch);
          const {clientWidth: width, clientHeight: height} = this.$el;
          const ratio = (height / width) * 10;

          this.height = ratio > 1 ? width / ratio : width * ratio;
        }
      }, 10);

      image.src = this.src;
    },
    onMouseup: function (event) {
      this.active = this.zoom && !this.active ? true : false;
      if (this.active) {
        this.calculateZoom(event);
      }
    },
    onMousemove: function (event) {
      if (this.active) this.calculateZoom(event);
    },
    onMouseleave: function () {
      this.active = false;
    },
    onLoad: function (event) {
      this.$emit('onload', event);
    },
    onError: function (event) {
      this.$emit('onerror', event);
    },
  },
  watch: {
    src() {
      this.config();
    },
  },
};
</script>
