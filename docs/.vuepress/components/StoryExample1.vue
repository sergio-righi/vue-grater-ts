<template>
  <gv-story ref="element" ratioX="16" ratioY="9" @ondone="onDone">
    <gv-story-item src="/img/landscape/img_2.jpg" />
    <gv-story-item src="/img/landscape/img_3.jpg" />
    <gv-story-item src="/src/seashore/720p/seashore.mp4" />
    <gv-story-item src="/img/landscape/img_4.jpg" />
    <gv-story-item src="/img/landscape/img_5.jpg" />
    <gv-story-item src="/img/landscape/img_6.jpg" />
    <template #toolbar>
      <gv-icon value="share-variant" @onclick="doSomething" />
    </template>
    <template #fallback>
      <div class="fallback">
        Something to be done when there ain't no items
        <gv-icon size="40px" value="replay" @onclick="onRestart" />
      </div>
    </template>
  </gv-story>
</template>

<script>
export default {
  methods: {
    onRestart: function () {
      this.$refs.element.restart();
    },
    onDone: function () {
      // callback to be called when the component has reached the end
    },
    doSomething: function () {
      // custom callback
    },
  },
};
</script>

<style>
.fallback {
  top: 50%;
  left: 50%;
  z-index: 5;
  font-size: 1.5em;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
}
.fallback i {
  display: block;
  cursor: pointer;
  margin-top: 0.75em;
}
</style>
