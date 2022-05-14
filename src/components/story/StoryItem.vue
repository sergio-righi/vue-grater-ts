<template>
  <div class="gv-item" :class="{active: currentIndex === index}">
    <gv-image v-if="isImage" :src="src" />
    <video v-else-if="isVideo" :src="src" muted />
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'gv-story-item',
  props: {
    src: String,
  },
  data() {
    return {
      index: -1,
      muted: true,
    };
  },
  mounted() {
    if (this.hasParent) {
      this.index = this.$utils.node.indexOf(this.$el);
    }
  },
  computed: {
    element: function () {
      return this.$el.firstChild;
    },
    isImage() {
      return this.$utils.boolean.isImage(this.src);
    },
    isVideo() {
      return this.$utils.boolean.isVideo(this.src);
    },
    isMuted() {
      return this.isVideo ? this.muted : true;
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === 'gv-story';
    },
    currentIndex() {
      return this.hasParent ? this.$parent.currentIndex : 0;
    },
    duration() {
      return this.isVideo ? this.element.duration * 1000 : null;
    },
  },
  methods: {
    restart: function () {
      this.element.currentTime = 0;
      this.pause();
    },
    play: function () {
      this.element.play();
    },
    pause: function () {
      this.element.pause();
    },
    mute: function () {
      this.muted = true;
      this.element.muted = true;
    },
    unmute: function () {
      this.muted = false;
      this.element.muted = false;
    },
  },
};
</script>
