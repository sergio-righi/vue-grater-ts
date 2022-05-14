<template>
  <gv-booth :gap="0">
    <gv-image :src="item.src" v-for="item in items" :key="item.id" square />
  </gv-booth>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: "/img/portrait/img_1.jpg" },
        { src: "/img/portrait/img_2.jpg" },
        { src: "/img/portrait/img_3.jpg" },
        { src: "/img/portrait/img_4.jpg" },
        { src: "/img/portrait/img_5.jpg" },
        { src: "/img/portrait/img_6.jpg" },
        { src: "/img/portrait/img_7.jpg" },
        { src: "/img/portrait/img_8.jpg" },
        { src: "/img/portrait/img_9.jpg" },
        { src: "/img/portrait/img_10.jpg" },
        { src: "/img/portrait/img_11.jpg" },
        { src: "/img/portrait/img_12.jpg" }
      ]
    };
  }
};
</script>
