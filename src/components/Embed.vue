<template>
  <div
    v-if="src"
    class="gv-embed-responsive"
    :class="{
      square: square,
      theater: theater,
      portrait: portrait,
      ultrawide: ultrawide,
      widescreen: widescreen || isDefault
    }"
  >
    <iframe
      :src="src"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "gv-embed",
  props: {
    src: {
      type: String,
      required: true
    },
    square: Boolean,
    theater: Boolean,
    portrait: Boolean,
    ultrawide: Boolean,
    widescreen: Boolean
  },
  computed: {
    isDefault() {
      return !this.square && !this.portrait && !this.ultrawide;
    }
  }
};
</script>
