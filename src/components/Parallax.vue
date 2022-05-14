<template>
  <div class="gv-parallax" :style="{ height: height + 'px' }">
    <div v-if="title" class="gv-title">{{ title }}</div>
    <div class="gv-overlay" v-if="overlay"></div>
    <div
      class="gv-item"
      :style="{ 'background-image': `url('${source}')` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "gv-parallax",
  props: {
    src: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 250,
    },
    title: String,
    preload: String,
    overlay: Boolean,
  },
  data() {
    return {
      source: null,
    };
  },
  created() {
    this.source = this.preload || this.src;
  },
  mounted() {
    if (this.preload) {
      this.checkState();
      window.addEventListener("scroll", this.handleWindowScroll);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  },
  methods: {
    load: function () {
      this.request = new XMLHttpRequest();
      this.request.open("GET", this.src, true);
      this.request.onloadend = (event) => {
        if (event.loaded === event.total) {
          this.source = this.src;
          window.removeEventListener("scroll", this.handleWindowScroll);
        }
      };
      this.request.send();
    },
    checkState: function () {
      if (this.$utils.node.inViewport(this.$el)) {
        this.load();
      }
    },
    handleWindowScroll: function () {
      this.checkState();
    },
    // config() {
    //   this.parent = this.$el.parentNode;
    //   this.image = this.$el.querySelectorAll("img")[0];
    // },
    // animate() {
    //   const innerHeight = window.innerHeight;
    //   const pageOffset = window.pageYOffset;
    //   const elementOffset = this.parent.offsetTop;
    //   const elementHeight = this.image.clientHeight;
    //   const diff = this.height - elementHeight;

    //   if (
    //     pageOffset + innerHeight >= elementOffset &&
    //     pageOffset <= elementOffset + this.height
    //   ) {
    //     const distance = pageOffset + innerHeight - elementOffset;
    //     const percentage = (distance / this.image.clientHeight) * 30;
    //     const canParallax =
    //       elementHeight + diff * (percentage / 100) + diff <= elementHeight;

    //     if (canParallax) {
    //       this.image.style.top = percentage + "%";
    //       this.image.style.transform = `translateY(-${percentage}%)`;
    //     }
    //   }
    // },
  },
};
</script>
