<template>
  <div class="gv-grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-grid",
  props: {
    margin: {
      default: 16,
      type: Number,
    },
    columns: {
      default: 4,
      type: Number,
    },
    responsive: {
      type: Array,
      default: () => [],
    },
    sorted: Boolean,
  },
  data() {
    return {
      row: 0,
      items: [],
      column: 0,
      height: [],
      quantity: [],
      gridWidth: 0,
      columnWidth: 0,
      columnCount: 0,
    };
  },
  mounted() {
    this.columnCount = this.count();
    this.items = this.$slots.default;
    this.build();
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    build: function () {
      this.config();
      this.load();
    },
    add: function (element) {
      if (this.$utils.node.getProperty(element, "position") !== "absolute") {
        element.style.position = "absolute";
      }

      element.style.width = `${this.columnWidth}px`;

      element.style.top = `${
        this.height[this.column] + this.row * this.margin
      }px`;

      element.style.left = `${
        this.column * this.columnWidth + this.column * this.margin
      }px`;

      this.height[this.column] += element.clientHeight;

      if (this.sorted) {
        if (this.column === this.columnCount - 1) {
          this.row++;
          this.column = 0;
        } else {
          this.column++;
        }
      } else {
        this.quantity[this.column]++;
        this.column = this.height.indexOf(Math.min.apply(null, this.height));
        this.row = this.quantity[this.column];
      }

      this.$el.style.height = `${
        Math.max.apply(null, this.height) +
        this.margin * Math.max.apply(null, this.quantity)
      }px`;

      return this;
    },
    load: function () {
      const self = this;
      this.items.forEach(function (item) {
        const element = item.elm;
        if (element.nodeName === "IMG") {
          const image = new Image();
          image.src = element.src;
          image.onload = function () {
            self.add(element);
          };
        } else {
          self.add(element);
        }
      });
    },
    config: function () {
      this.row = 0;
      this.column = 0;
      this.height = Array(this.columnCount).fill(0);
      this.quantity = this.height.slice(0);
      this.gridWidth = this.$el.offsetWidth;
      this.columnWidth =
        this.gridWidth / this.columnCount -
        (this.margin * (this.columnCount - 1)) / this.columnCount;
    },
    count: function () {
      for (let i = 0; i < this.responsive.length; i++) {
        if (window.innerWidth < this.responsive[i].width) {
          return this.responsive[i].columns;
        }
      }
      return this.columns;
    },
    handleWindowResize: function () {
      if (this.responsive.length > 0) {
        this.columnCount = this.count();
        this.build();
      } else this.columnCount = this.columns;
    },
  },
};
</script>
