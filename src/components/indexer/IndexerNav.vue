<template>
  <div ref="navigation" class="gv-nav">
    <div
      v-for="(letter, index) in letters"
      :key="letter"
      :ref="letter"
      class="gv-item"
      @click.prevent="onClick(index)"
      @mousedown.prevent="handleStart"
      @touchstart.prevent="handleStart"
      @mousemove="handleMove"
      @touchmove="handleMove"
    >
      {{ letter }}
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-indexer-nav",
  props: {
    letters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      moving: false,
      currentIndex: -1,
    };
  },
  computed: {
    navigation() {
      return this.$refs.navigation;
    },
  },
  mounted() {
    window.addEventListener("mouseup", this.handleStop);
    window.addEventListener("touchend", this.handleStop);
  },
  beforeDestroy() {
    window.removeEventListener("mouseup", this.handleStop);
    window.removeEventListener("touchend", this.handleStop);
  },
  methods: {
    onClick: function (index) {
      this.$parent.moveTo(index);
      this.$parent.selectedIndex = index;
    },
    select: function (index) {
      if (this.currentIndex !== -1) {
        this.reference(this.currentIndex)?.classList.remove("active");
      }
      this.reference(index)?.classList.add("active");
      this.currentIndex = index;
    },
    reference: function (index) {
      const letter = this.letters[index];
      const reference = letter ? this.$refs[letter] : null;
      return reference ? reference[0] : null;
    },
    handleStart: function () {
      this.moving = true;
      this.$parent.locked = true;
    },
    handleStop: function () {
      this.moving = false;
      this.$parent.locked = false;
      this.$parent.selectedIndex = this.currentIndex;
    },
    handleMove: function (event) {
      const { clientX, clientY } = event.touches ? event.touches[0] : event;
      const element = document.elementFromPoint(clientX, clientY);
      if (element) {
        if (element.parentElement !== this.navigation) this.handleStop();
        const index = this.$utils.node.indexOf(element);
        if (this.moving && this.currentIndex !== index) {
          this.$parent.moveTo(index);
          this.select(index);
          this.currentIndex = index;
        }
      }
    },
  },
};
</script>
