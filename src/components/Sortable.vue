<template>
  <div class="gv-sortable">
    <div
      class="gv-item"
      v-for="(item, i) in items"
      :key="item.id"
      @dragstart="onDragStart"
      @dragover="onDragOver"
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @drop="onDrop"
      @dragend="onDragEnd"
      :draggable="item.disabled ? false : true"
    >
      <div class="gv-leading" v-if="!item.disabled">
        <input
          :value="i + 1"
          :min="1"
          :max="items.length"
          @focus="onFocus"
          @blur="onBlur($event, i)"
          v-mask="'#*'"
        />
      </div>
      <div class="gv-content">{{ item.value }}</div>
      <div class="gv-trailing" v-if="!item.disabled">
        <gv-icon value="chevron-up" @onclick="onMove(i, true)" />
        <gv-icon value="chevron-down" @onclick="onMove(i, false)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-sortable",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      index: -1,
      items: [],
      element: null,
    };
  },
  created() {
    this.config();
  },
  computed: {
    isObject() {
      return this.value.length > 0 ? typeof this.value[0] !== "string" : false;
    },
    input() {
      return this.isObject ? this.items : this.items.map((item) => item.value);
    },
  },
  methods: {
    onDragStart: function (e) {
      this.index = this.$utils.node.indexOf(e.target);
      e.target.classList.add("dragging");
    },
    onDragOver: function (e) {
      e.preventDefault();
      this.element = e.target;
    },
    onDragEnter: function (e) {
      e.target.classList.add("over");
    },
    onDragLeave: function (e) {
      e.target.classList.remove("over");
    },
    onDrop: function (e) {
      e.stopPropagation();
      this.element.classList.remove("over");
      this.swap(this.index, this.$utils.node.indexOf(e.target));
      this.index = -1;
    },
    onDragEnd: function (e) {
      e.target.classList.remove("over");
      e.target.classList.remove("dragging");
    },
    onFocus: function (e) {
      e.target.setSelectionRange(0, e.target.value.length);
    },
    onBlur: function (e, index) {
      const from = Number(e.target.value);
      if (from > 0 && from < this.items.length) {
        const element = this.items[from];
        if (!element.disabled) {
          this.swap(from - 1, index);
        }
      } else {
        e.target.value = index + 1;
      }
    },
    onMove: function (index, up) {
      if (up) {
        this.swap(index, this.prev(index));
      } else {
        this.swap(index, this.next(index));
      }
    },
    prev: function (index) {
      do {
        index = index === 0 ? this.items.length - 1 : index - 1;
      } while (this.items[index].disabled);
      return index;
    },
    next: function (index) {
      do {
        index = index === this.items.length - 1 ? 0 : index + 1;
      } while (this.items[index].disabled);
      return index;
    },
    swap: function (from, to) {
      if (from !== to) {
        const element = this.items[to];
        if (!element?.disabled ?? false) {
          this.items = this.$utils.object.swap(this.items, from, to);
          this.$emit("input", this.input);
        }
      }
    },
    config: function () {
      this.items = this.value.map((item) =>
        typeof item === "string" ? { value: item } : item
      );
    },
  },
  watch: {
    value() {
      this.config();
    },
  },
};
</script>
