<template>
  <gv-button
    class="gv-control"
    :class="{ fullscreen: !bfullscreen, 'fullscreen-exit': bfullscreen }"
    @onclick="manageFullscreen"
  />
</template>

<script>
export default {
  name: "gv-video-fullscreen",
  data() {
    return {
      offsetY: 0
    };
  },
  computed: {
    element() {
      return this.$parent.$el;
    },
    bfullscreen: {
      get() {
        return this.$parent.bfullscreen;
      },
      set(val) {
        this.$parent.bfullscreen = val;
      }
    }
  },
  mounted() {
    document.addEventListener("fullscreenchange", this.handleFullscreenChange);
  },
  beforeDestroy() {
    document.removeEventListener(
      "fullscreenchange",
      this.handleFullscreenChange
    );
  },
  methods: {
    manageFullscreen: function() {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        this.offsetY = window.scrollY;

        if (this.element.requestFullscreen) {
          this.element.requestFullscreen();
        } else if (this.element.msRequestFullscreen) {
          this.element.msRequestFullscreen();
        } else if (this.element.mozRequestFullScreen) {
          this.element.mozRequestFullScreen();
        } else if (this.element.webkitRequestFullscreen) {
          this.element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
    handleFullscreenChange: function() {
      if (
        !document.fullscreenElement &&
        !document.webkitIsFullScreen &&
        !document.mozFullScreen &&
        !document.msFullscreenElement
      ) {
        this.bfullscreen = false;
        window.scrollTo(0, this.offsetY);
      } else {
        this.bfullscreen = true;
      }
    }
  }
};
</script>
