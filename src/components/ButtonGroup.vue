<template>
  <div class="gv-btn-group" :class="{ sm: sm, lg: lg, fluid: fluid }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-button-group",
  props: {
    sm: Boolean,
    lg: Boolean,
    fluid: Boolean,
    required: Boolean,
    multiple: Boolean,
    value: [Array, Number, Object],
  },
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    activable() {
      return this.$listeners?.input ?? false;
    },
    items() {
      return (
        this.$slots.default?.filter((item) => /gv-button/g.test(item.tag)) ?? []
      );
    },
  },
  watch: {
    value(val) {
      this.config(val);
    },
  },
  mounted() {
    this.config(this.value);
  },
  methods: {
    config: function (value) {
      if (this.activable) {
        const values = Array.isArray(value)
          ? value
          : [this.required && (!value || value < 0) ? 0 : value];
        values.forEach((item) => {
          const element = this.items[item];
          if (element) {
            this.toggle(element.elm, true);
          }
        });
      }
    },
    toggle: function (elm, state) {
      if (elm && this.activable) {
        const element = this.items.find((item) => item.elm === elm);
        if (element) {
          if (!this.multiple) {
            const index = this.selected[0];
            if (index >= 0) {
              const selected = this.items[index];
              if (this.required && selected === element) return;
              this.select(selected, false);
            }
          }
          this.select(element, state);
        }
        this.$emit("input", this.multiple ? this.selected : this.selected[0]);
      }
    },
    select: function (element, state) {
      if (element) {
        const index = this.$utils.node.indexOf(element?.elm);
        const component = element?.componentInstance;
        if (component) {
          component.select(state);
          if (state) {
            if (!this.selected.includes(index)) {
              this.selected.push(index);
            }
          } else {
            const position = this.selected.findIndex((item) => item === index);
            if (position !== -1) {
              this.selected.splice(position, 1);
            }
          }
        }
      }
    },
  },
};
</script>
