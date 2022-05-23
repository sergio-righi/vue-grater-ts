<template>
  <gv-pick :items="items" :duration="1000" @onpick="onPick" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {src: '/img/portrait/img_1.jpg'},
        {src: '/img/portrait/img_2.jpg'},
        {src: '/img/portrait/img_3.jpg'},
        {src: '/img/portrait/img_4.jpg'},
        {src: '/img/portrait/img_5.jpg'},
        {src: '/img/portrait/img_6.jpg'},
        {src: '/img/portrait/img_7.jpg'},
      ],
    };
  },
  methods: {
    onPick: function (value) {
      console.log(value);
    },
  },
};
</script>
