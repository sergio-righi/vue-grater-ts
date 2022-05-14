<template>
  <div class="gv-crop" @click="onFocus" v-click-outside="onBlur">
    <div
      class="gv-content"
      :class="{ hidden: !loaded }"
      ref="content"
      tabindex="0"
    >
      <div class="gv-container gv-background" touch-action="none">
        <div class="gv-wrap-box">
          <div class="gv-canvas" :style="imgStyle">
            <img
              ref="image"
              :src="src"
              alt="picture"
              class="gv-hide"
              @load="onLoad"
              :style="{ width: img.width + 'px', height: img.height + 'px' }"
            />
          </div>
        </div>
        <div class="gv-drag-box gv-shadow"></div>
        <div ref="frame" class="gv-crop-box" :style="boxStyle">
          <span
            class="gv-view-box"
            :data-x="Math.round(canvas.width)"
            :data-y="Math.round(canvas.height)"
          >
            <img :src="src" alt="picture" :style="cropStyle" />
          </span>
          <span class="gv-dashed dashed-x"></span>
          <span class="gv-dashed dashed-y"></span>
          <span class="gv-center"></span>
          <span class="gv-face gv-move" data-draggable></span>
          <span class="gv-line line-e" data-resizable="e"></span>
          <span class="gv-line line-n" data-resizable="n"></span>
          <span class="gv-line line-w" data-resizable="w"></span>
          <span class="gv-line line-s" data-resizable="s"></span>
          <span class="gv-point point-e" data-resizable="e"></span>
          <span class="gv-point point-n" data-resizable="n"></span>
          <span class="gv-point point-w" data-resizable="w"></span>
          <span class="gv-point point-s" data-resizable="s"></span>
          <span class="gv-point point-ne" data-resizable="ne"></span>
          <span class="gv-point point-nw" data-resizable="nw"></span>
          <span class="gv-point point-sw" data-resizable="sw"></span>
          <span class="gv-point point-se" data-resizable="se"></span>
        </div>
      </div>
    </div>
    <div class="gv-process" :class="{ hidden: loaded }">
      <gv-progress-circle indeterminate :size="60" :width="3" color="white" />
    </div>
    <canvas ref="canvas" class="gv-canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "gv-crop",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loaded: false,
      box: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
      img: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0,
      },
      canvas: {
        width: 0,
        height: 0,
      },
      ref: {
        elm: null,
        image: null,
        frame: null,
        canvas: null,
      },
      maxWidth: 0,
      maxHeight: 0,
    };
  },
  computed: {
    boxStyle() {
      return {
        width: this.box.width + "px",
        height: this.box.height + "px",
        transform: `translateX(${this.box.left}px) translateY(${this.box.top}px)`,
      };
    },
    imgStyle() {
      return {
        width: this.img.width + "px",
        height: this.img.height + "px",
        transform: `translateX(${this.img.left}px) translateY(${this.img.top}px)`,
      };
    },
    cropStyle() {
      const top = this.img.top - this.box.top;
      const left = this.img.left - this.box.left;
      return {
        width: this.img.width + "px",
        height: this.img.height + "px",
        transform: `translateX(${left}px) translateY(${top}px)`,
      };
    },
  },
  methods: {
    config: function () {
      this.ref.elm = this.$refs.content;
      this.ref.image = this.$refs.image;
      this.ref.frame = this.$refs.frame;
      this.ref.canvas = this.$refs.canvas;

      this.maxWidth = this.ref.elm.clientWidth;
      this.maxHeight = this.ref.elm.clientHeight;

      this.img.naturalWidth = this.ref.image.naturalWidth;
      this.img.naturalHeight = this.ref.image.naturalHeight;

      this.fit();

      this.img.left = (this.maxWidth - this.img.width) / 2;
      this.img.top = (this.maxHeight - this.img.height) / 2;

      this.box.width = Math.min(this.img.width, this.maxWidth);
      this.box.height = Math.min(this.img.height, this.maxHeight);
      this.box.left = Math.max(0, (this.maxWidth - this.img.width) / 2);
      this.box.top = Math.max(0, (this.maxHeight - this.img.height) / 2);

      this.calculate();
    },
    fit: function () {
      this.img.height = Math.min(this.img.naturalWidth, this.maxHeight);
      this.img.width =
        (this.img.naturalWidth * this.img.height) / this.img.naturalHeight;

      if (this.img.width > this.maxWidth) {
        this.img.width = Math.min(this.img.naturalWidth, this.maxWidth);
        this.img.height =
          (this.img.naturalHeight * this.img.width) / this.img.naturalWidth;
      }
    },
    calculate: function () {
      this.canvas.width =
        (this.box.width * this.img.naturalWidth) / this.img.width;
      this.canvas.height =
        (this.box.height * this.img.naturalHeight) / this.img.height;
    },
    between: function (value, min, max) {
      return this.$utils.number.between(value, min, max);
    },
    bind: function () {
      window.addEventListener("keyup", this.handleKeyup, false);
      this.ref.elm.addEventListener("mousedown", this.handleDraggable, false);
      this.ref.elm.addEventListener("mousewheel", this.handleMouseWheel, false);

      this.ref.frame.querySelectorAll("[data-resizable]").forEach((item) => {
        item.addEventListener("mousedown", this.handleResizable, false);
        // item.addEventListener("touchstart", this.handleResizable, false);
      });
    },
    crop: function () {
      const context = this.ref.canvas.getContext("2d");

      const dx = Math.round(this.img.left);
      const dy = Math.round(this.img.top);

      this.ref.canvas.width = this.canvas.width;
      this.ref.canvas.height = this.canvas.height;

      const sx =
        (this.img.naturalWidth * (this.box.left - dx)) / this.img.width;
      const sy =
        (this.img.naturalHeight * (this.box.top - dy)) / this.img.height;

      context.drawImage(
        this.ref.image,
        sx,
        sy,
        this.canvas.width,
        this.canvas.height,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );

      this.$emit("oncrop", this.ref.canvas.toDataURL());
    },
    download: function () {
      this.crop();
      const width = Math.round(this.canvas.width);
      const height = Math.round(this.canvas.height);
      const link = document.createElement("a");
      link.download = `cropped_${width}x${height}.png`;
      link.href = this.ref.canvas.toDataURL();
      link.click();
    },
    handleDraggable: function (e) {
      e.preventDefault();

      const self = this;
      const event = e.touches ? e.touches[0] : e;
      const element = e.button === 1 ? this.img : this.box;

      let offsetX = element.left;
      let offsetY = element.top;

      const prevX = event.clientX - offsetX;
      const prevY = event.clientY - offsetY;

      window.addEventListener("mouseup", handleEnd);
      // window.addEventListener("touchend", handleEnd);
      window.addEventListener("mousemove", handleMove);
      // window.addEventListener("touchmove", handleMove);

      function handleMove(e) {
        const event = e.touches ? e.touches[0] : e;

        let currentX = event.clientX - prevX;
        let currentY = event.clientY - prevY;

        if (element === self.box) {
          currentX = self.between(currentX, 0, self.maxWidth - element.width);
          currentY = self.between(currentY, 0, self.maxHeight - element.height);
        }

        element.top = currentY;
        element.left = currentX;

        offsetX = currentX;
        offsetY = currentY;

        self.calculate();
      }

      function handleEnd() {
        window.removeEventListener("mouseup", handleEnd);
        // window.removeEventListener("touchend", handleEnd);
        window.removeEventListener("mousemove", handleMove);
        // window.removeEventListener("touchmove", handleMove);
      }
    },
    handleResizable: function (e) {
      const self = this;
      const element = this.ref.frame;
      const event = e.touches ? e.touches[0] : e;
      const edge = event.target.dataset.resizable;
      let { clientX: prevX, clientY: prevY } = event;

      window.addEventListener("mouseup", handleEnd);
      // window.addEventListener("touchend", handleEnd);
      window.addEventListener("mousemove", handleMove);
      // window.addEventListener("touchmove", handleMove);

      function handleMove(e) {
        const event = e.touches ? e.touches[0] : e;
        const diffX = prevX - event.clientX;
        const diffY = prevY - event.clientY;
        const rect = element.getBoundingClientRect();

        let top = self.box.top;
        let left = self.box.left;
        let width = edge.includes("e") ? rect.width - diffX : self.box.width;
        let height = edge.includes("s") ? rect.height - diffY : self.box.height;

        if (edge.includes("n")) {
          top -= diffY;
          height += diffY;
        }

        if (edge.includes("w")) {
          left -= diffX;
          width += diffX;
        }

        if (width >= 50 || height >= 50) {
          top = self.between(top, 0, self.maxHeight - height);
          left = self.between(left, 0, self.maxWidth - width);
          width = self.between(width, 0, self.maxWidth - left);
          height = self.between(height, 0, self.maxHeight - top);

          self.box = { top, left, width, height };

          prevX = event.clientX;
          prevY = event.clientY;
        }

        self.calculate();
      }

      function handleEnd() {
        window.removeEventListener("mouseup", handleEnd);
        // window.removeEventListener("touchend", handleEnd);
        window.removeEventListener("mousemove", handleMove);
        // window.removeEventListener("touchmove", handleMove);
      }
    },
    handleMouseWheel: function (e) {
      e.preventDefault();
      const factor = (e.wheelDelta / 120) * 10;
      const width = this.img.width + factor;
      const height = (width * this.img.height) / this.img.width;
      this.img.left -= factor / 2;
      this.img.top += (this.img.height - height) / 2;
      this.img.width = width;
      this.img.height = height;

      this.calculate();
    },
    handleKeyup: function (e) {
      e.preventDefault();
      if (document.activeElement === this.ref.elm) {
        const keycode = this.$utils.keycode;
        switch (e.keyCode) {
          case keycode.enter:
            this.crop();
            break;
        }
      }
    },
    onFocus: function () {
      this.ref.elm.focus();
    },
    onBlur: function () {
      this.ref.elm.blur();
    },
    onLoad: function () {
      this.loaded = true;
      this.config();
      this.bind();
    },
  },
};
</script>
