<template>
  <gv-swipe :items="items" @onswipe="onSwipe" @onbeforereachend="onLoad">
    <div class="no-records">
      Something to be shown when there ain't no items
      <div>¯\_(ツ)_/¯</div>
    </div>
  </gv-swipe>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {src: '/img/portrait/img_1.jpg'},
        {src: '/img/portrait/img_2.jpg'},
        {src: '/img/portrait/img_3.jpg'},
        {
          src: '/img/portrait/img_4.jpg',
          description: 'Sergio Rafael Hautrive Righi, 28',
        },
        {src: '/img/portrait/img_5.jpg'},
        {src: '/img/portrait/img_6.jpg'},
        {src: '/img/portrait/img_7.jpg'},
      ],
    };
  },
  methods: {
    onLoad: function () {
      // callback called before reaching the end giving the opportunity to load more items
    },
    onSwipe: function (id) {
      // callback called when an item was swiped
    },
  },
};
</script>

<style scoped>
.no-records {
  top: 50%;
  left: 50%;
  font-size: 1.5em;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
