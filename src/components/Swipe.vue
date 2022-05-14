<template>
  <div class="gv-swipe" :style="{height: `${height}px`}">
    <div class="gv-content">
      <div v-if="hasValue" class="gv-wrap">
        <div
          ref="items"
          class="gv-item"
          v-for="(item, index) in items"
          :key="item.id"
          :class="{
            hidden: index < isHidden,
            active: index === current,
            below: index > current,
          }"
          @mousedown="handleMouseStart"
        >
          <div class="gv-content">
            <gv-image v-if="'src' in item" :src="item.src" />
            <div class="gv-description">{{ item.description }}</div>
          </div>
          <div class="gv-choice up">
            <gv-icon :value="upIcon" />
          </div>
          <div class="gv-choice yep">
            <gv-icon :value="leftIcon" />
          </div>
          <div class="gv-choice nope">
            <gv-icon :value="rightIcon" />
          </div>
          <div class="gv-drag"></div>
        </div>
      </div>
      <div v-else>
        <slot />
      </div>
    </div>
    <div v-if="hasValue && control" class="gv-footer">
      <gv-icon class="nope" :value="rightIcon" @onclick="swipeLeft" />
      <gv-icon v-if="upward" class="up" :value="upIcon" @onclick="swipeTop" />
      <gv-icon class="yep" :value="leftIcon" @onclick="swipeRight" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'gv-swipe',
  props: {
    shown: {
      default: 5,
      type: Number,
    },
    height: {
      default: 450,
      type: Number,
    },
    control: {
      default: true,
      type: Boolean,
    },
    upward: Boolean,
    items: Array,
    upIcon: {
      default: 'star',
      type: String,
    },
    leftIcon: {
      default: 'heart',
      type: String,
    },
    rightIcon: {
      default: 'close',
      type: String,
    },
  },
  data() {
    return {
      startX: 0,
      startY: 0,
      counter: 0,
      distanceX: 0,
      distanceY: 0,
      decisionVal: 80,
      animating: false,
      elementTarget: null,
    };
  },
  computed: {
    hasValue() {
      return this.remain > 0;
    },
    isHidden() {
      return this.remain - this.shown;
    },
    total() {
      return this.items.length;
    },
    remain() {
      return this.total - this.counter;
    },
    current() {
      return this.remain - 1;
    },
  },
  created() {
    this.bind();
  },
  beforeDestroy() {
    this.unbind();
  },
  methods: {
    bind: function () {
      window.addEventListener('keydown', this.handleKeydown);
    },
    unbind: function () {
      window.removeEventListener('keydown', this.handleKeydown);
    },
    pull: function () {
      this.animating = true;
      const angle = this.distanceX / 10;
      const elementTarget =
        this.elementTarget ?? this.$refs.items[this.current];

      elementTarget.style.transform = `translateX(${this.distanceX}px) translateY(${this.distanceY}px) rotate(${angle}deg)`;

      const direction = Math.abs(this.distanceX) > Math.abs(this.distanceY);

      const opacity = (direction ? this.distanceX : this.distanceY) / 100;
      const yep = opacity <= 0 ? 0 : Math.min(1, opacity);
      const nope = opacity >= 0 ? 0 : Math.min(1, Math.abs(opacity));

      if (direction) {
        elementTarget.querySelector('.yep').style.opacity = yep;
        elementTarget.querySelector('.nope').style.opacity = nope;
      } else {
        elementTarget.querySelector('.up').style.opacity = nope;
      }
    },
    release: function () {
      let swiped = false;
      const elementTarget =
        this.elementTarget ?? this.$refs.items[this.current];
      const direction = Math.abs(this.distanceX) > Math.abs(this.distanceY);
      const distance = direction ? this.distanceX : this.distanceY;

      if (distance >= this.decisionVal) {
        if (direction) {
          elementTarget.classList.add('to-right');
          swiped = true;
        }
      } else if (distance <= -this.decisionVal) {
        if (direction) {
          elementTarget.classList.add('to-left');
        } else if (this.upward) {
          elementTarget.classList.add('to-top');
        }
        swiped = true;
      }

      if (swiped) {
        elementTarget.classList.add('inactive');
        this.$emit('onswipe', this.items[this.current]);

        setTimeout(() => {
          elementTarget.classList.remove(
            'inactive',
            'to-top',
            'to-left',
            'to-right',
          );
          this.counter++;
        }, 300);
      } else {
        elementTarget.classList.add('reset');
      }

      setTimeout(() => {
        elementTarget.removeAttribute('style');
        elementTarget.classList.remove('reset');

        if (this.upward) {
          elementTarget.querySelector('.up').removeAttribute('style');
        }
        elementTarget.querySelector('.yep').removeAttribute('style');
        elementTarget.querySelector('.nope').removeAttribute('style');

        this.distanceX = 0;
        this.distanceY = 0;
        this.animating = false;
        this.elementTarget = null;

        if (this.counter === this.total) {
          this.$emit('onreachend');
        } else if (this.counter === this.total - 3) {
          this.$emit('onbeforereachend');
        }
      }, 300);
    },
    swipe: function () {
      if (this.remain === 0) return;

      this.elementTarget = this.$refs.items[this.current];
      this.pull();
      setTimeout(() => {
        this.release();
      }, 30);
    },
    handleMouseStart: function (event) {
      if (this.animating) return;

      this.startX = event.pageX || event.originalEvent.touches[0].pageX;
      if (this.upward) {
        this.startY = event.pageY || event.originalEvent.touches[0].pageY;
      }
      this.elementTarget = event.target.parentNode;

      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseMove: function (event) {
      this.distanceX =
        (event.pageX || event.originalEvent.touches[0].pageX) - this.startX;
      if (this.upward) {
        this.distanceY =
          (event.pageY || event.originalEvent.touches[0].pageY) - this.startY;
      }
      if (!this.distanceX && !this.distanceY) return;
      this.pull();
    },
    handleMouseUp: function () {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      if (!this.distanceX && !this.distanceY) return;
      this.release();
    },
    handleKeydown: function (event) {
      const key = event.keyCode;
      const keycode = this.$utils.keycode;
      if (key === keycode.left) {
        this.swipeLeft();
      } else if (key === keycode.right) {
        this.swipeRight();
      }
    },
    swipeLeft: function () {
      this.distanceX = -this.decisionVal;
      this.swipe();
    },
    swipeRight: function () {
      this.distanceX = this.decisionVal;
      this.swipe();
    },
    swipeTop: function () {
      this.distanceY = -this.decisionVal;
      this.swipe();
    },
  },
};
</script>
