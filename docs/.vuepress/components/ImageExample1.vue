<template>
  <gv-image :src="imageSource" lazyload @onload="onLoad" />
</template>

<script>
export default {
  data() {
    return {
      imageSource: "/img/landscape/img_5.jpg"
    };
  },
  methods: {
    onLoad: function() {
      setTimeout(() => {
        this.imageSource = "/img/landscape/img_8.jpg";
      }, 1000);
    }
  }
};
</script>
