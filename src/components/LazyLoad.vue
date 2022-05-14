<template>
  <div class="gv-lazyload">
    <gv-image :src="source" :alt="alt" />
    <div
      v-if="hasInfo"
      class="gv-overlay"
      :class="{ active: b.overlay }"
      @click.prevent="load"
    >
      <div class="gv-info" :class="{ active: b.content }">
        <div>{{ filesize }}</div>
        <div>{{ t("lazyload.click_load") }}</div>
      </div>
      <div class="gv-progress" :class="{ active: b.bar }">
        <gv-progress-circle :percentage="percentage" color="white" />
      </div>
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";

export default {
  name: "gv-lazyload",
  props: {
    src: {
      type: String,
      required: true,
    },
    preload: {
      type: String,
      required: true,
    },
    alt: String,
    method: {
      type: String,
      default: "GET",
    },
    auto: Boolean,
    scroll: Boolean,
  },
  data() {
    return {
      size: 0,
      max: null,
      source: null,
      percentage: 0,
      request: null,
      b: { bar: false, abort: false, content: true, overlay: true },
    };
  },
  computed: {
    isFast() {
      return navigator.connection.downlink >= 1;
    },
    isMobile() {
      return this.$utils.boolean.isMobile();
    },
    inRange() {
      return this.max === null || this.size / 1048576 <= this.max;
    },
    isLoadable() {
      return !this.isMobile && this.isFast && this.inRange;
    },
    hasInfo() {
      return !this.auto && !this.scroll;
    },
    filesize() {
      return this.$utils.string.filesize(this.size);
    },
  },
  created() {
    this.source = this.preload;
    if (this.auto) {
      this.load();
    } else {
      this.checkSize();
    }
  },
  methods: {
    load: function () {
      this.request = new XMLHttpRequest();
      this.request.open(this.method, this.src, true);
      this.request.onloadstart = () => {
        this.b.bar = true;
        this.b.abort = true;
        this.b.content = false;
      };
      this.request.onprogress = (event) => {
        this.percentage = (event.loaded / event.total) * 100;
      };
      this.request.onerror = () => {
        this.percentage = 0;
      };
      this.request.onloadend = (event) => {
        if (event.loaded === event.total) {
          this.source = this.src;
          this.b.overlay = false;
          window.removeEventListener("scroll", this.handleWindowScroll);
        }
      };
      this.request.onabort = (event) => {
        if (event.loaded !== event.total) {
          this.b.bar = false;
          this.percentage = 0;
          this.b.abort = false;
          this.b.content = true;
        }
      };
      this.request.send();
    },
    checkState: function () {
      if (this.$utils.node.inViewport(this.$el) && this.percentage === 0) {
        this.load();
      }
    },
    checkSize: function () {
      const xhr = new XMLHttpRequest();
      xhr.open("HEAD", this.src, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
          this.size = parseInt(xhr.getResponseHeader("Content-Length"), 10);
          if (this.scroll || this.isLoadable) {
            window.addEventListener("scroll", this.handleWindowScroll);
          }
        }
      };
      xhr.send();
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
    handleWindowScroll: function () {
      this.checkState();
    },
  },
};
</script>
