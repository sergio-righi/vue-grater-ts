<template>
  <div>
    <gv-booth :items="items" @onclick="onClick" embed ref="booth" />
    <div v-bind="$attrs" class="gv-gallery" :class="{ active: active }">
      <div class="gv-overlay"></div>
      <div class="gv-wrapper" @click.self="close">
        <gv-carousel
          embed
          :items="items"
          :nav="false"
          :loop="loop"
          :arrow="arrow"
          :selected="selected"
          @onmove="move"
        />
      </div>
      <div class="gv-control">
        <div class="gv-dismiss" @click="close"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-gallery",
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      required: true,
    },
    loop: Boolean,
    arrow: Boolean,
  },
  data() {
    return {
      selected: 0,
      active: false,
    };
  },
  computed: {
    booth() {
      return this.$refs.booth;
    },
  },
  mounted() {
    window.addEventListener("keyup", this.handleWindowKeyup);
  },
  beforeDestroy() {
    document.body.classList.remove("o-hidden");
    window.removeEventListener("keyup", this.handleWindowKeyup);
  },
  methods: {
    onClick: function (index) {
      this.selected = index;
      this.open();
    },
    move: function (index) {
      this.selected = index;
    },
    open: function (index) {
      const self = this;
      const item = this.booth.get(index || this.selected);

      const element = item.cloneNode(false);
      const config = this.configuration(item);

      element.style.zIndex = "99";
      element.style.position = "absolute";
      element.style.top = `${config.start.top}px`;
      element.style.left = `${config.start.left}px`;
      element.style.width = `${config.start.width}px`;
      element.style.height = `${config.start.height}px`;

      document.body.appendChild(element);
      document.body.classList.add("o-hidden");

      this.animate(element, "top", config.start.top, config.end.top, 300);
      this.animate(element, "left", config.start.left, config.end.left, 300);
      this.animate(element, "width", config.start.width, config.end.width, 300);
      this.animate(
        element,
        "height",
        config.start.height,
        config.end.height,
        300,
        function () {
          self.active = true;
          element.parentNode.removeChild(element);
        }
      );
    },
    close: function () {
      const item = this.booth.get(this.selected);

      if (item) {
        const element = item.cloneNode(false);
        const config = this.configuration(item);

        element.style.zIndex = "99";
        element.style.position = "absolute";
        element.style.top = `${config.end.top}px`;
        element.style.left = `${config.end.left}px`;
        element.style.width = `${config.end.width}px`;
        element.style.height = `${config.end.height}px`;

        this.active = false;

        document.body.appendChild(element);
        document.body.classList.remove("o-hidden");

        this.animate(element, "top", config.end.top, config.start.top, 300);
        this.animate(element, "left", config.end.left, config.start.left, 300);
        this.animate(
          element,
          "width",
          config.end.width,
          config.start.width,
          300
        );
        this.animate(
          element,
          "height",
          config.end.height,
          config.start.height,
          300,
          function () {
            element.parentNode.removeChild(element);
          }
        );
      }
    },
    configuration: function (element) {
      const offset = this.$utils.node.offset(element);
      return {
        width: element.naturalWidth,
        height: element.naturalHeight,
        start: {
          top: offset.top,
          left: offset.left,
          width: element.offsetWidth,
          height: element.offsetHeight,
        },
        end: this.position(element.naturalWidth, element.naturalHeight),
      };
    },
    position: function (width, height) {
      const proportion = Math.min(
        window.innerWidth / width,
        window.innerHeight / height
      );

      const dimension = {
        width: width * proportion,
        height: height * proportion,
      };

      return {
        width: dimension.width,
        height: dimension.height,
        left: (window.innerWidth - dimension.width) / 2 + window.scrollX,
        top: (window.innerHeight - dimension.height) / 2 + window.scrollY,
      };
    },
    animate: function (
      element,
      property,
      start,
      end,
      delay,
      callback,
      argument,
      context
    ) {
      const interval = 20;
      const startTime = new Date().getTime();

      if (typeof end === "string") {
        end = parseInt(end, 10);
      }

      function step() {
        let value, done, position;
        const timer = new Date().getTime() - startTime;
        if (timer >= delay) {
          value = end;
          done = true;
        } else {
          position = timer / delay;
          value = (end - start) * position + start;
          done = false;
        }
        element.style[property] = `${value}px`;
        if (!done) {
          setTimeout(step, interval);
        } else if (callback) {
          context = context || window;
          callback.call(context, element, argument);
        }
      }
      step();
    },
    handleWindowKeyup: function (event) {
      const keycode = this.$utils.keycode;
      switch (event.which) {
        case keycode.esc:
          this.close();
          break;
      }
    },
  },
};
</script>
