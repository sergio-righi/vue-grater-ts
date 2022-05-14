<template>
  <gv-carousel :items="items" nav loop rewind :slideshow="5000" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        { href: "#", src: "/img/landscape/img_1.jpg" },
        { href: "#", src: "/img/landscape/img_2.jpg" },
        { href: "#", src: "/img/landscape/img_3.jpg" },
        { src: "/img/portrait/img_4.jpg" },
        { src: "/img/landscape/img_5.jpg" },
        { href: "#", src: "/img/landscape/img_6.jpg" },
        { src: "/img/landscape/img_7.jpg" },
        { href: "#", src: "/img/landscape/img_8.jpg" }
      ]
    };
  }
};
</script>
