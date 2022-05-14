<template>
  <div class="gv-alert" :class="{ outline: outline }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-alert",
  props: {
    loop: Boolean,
    message: String,
    outline: Boolean,
    dismissible: Boolean,
  },
  computed: {
    hasPrev() {
      return this.loop || this.selected > 0;
    },
    hasNext() {
      return this.loop || this.selected < this.alerts.length - 1;
    },
    hasControl() {
      return this.alerts.length > 1;
    },
  },
  data() {
    return {
      alerts: [],
      selected: 0,
    };
  },
  methods: {
    prev: function () {
      const prev =
        this.loop && this.selected === 0
          ? this.alerts.length - 1
          : this.selected - 1;
      this.toggle(prev);
    },
    next: function () {
      const next =
        this.loop && this.selected === this.alerts.length - 1
          ? 0
          : this.selected + 1;
      this.toggle(next);
    },
    append: function (item) {
      this.alerts.push(item);

      this.$nextTick(() => {
        const selected = this.alerts.filter((item) => item.b.active) ?? [];
        if (selected.length === 1) {
          this.selected = this.indexOf(selected[0].$el);
        } else if (selected.length > 1) {
          this.selected = this.indexOf(selected[selected.length - 1].$el);
          this.alerts.forEach(
            (item, index) =>
              (item.b.active = index !== this.selected ? false : true)
          );
        } else {
          this.alerts[0].b.active = true;
        }
      });
    },
    toggle: function (index) {
      this.alerts[this.selected].b.active = false;
      this.alerts[index].b.active = true;
      this.selected = index;
    },
    dismiss: function () {
      if (this.message) {
        const confirm = window.confirm(this.message);
        if (!confirm) return;
      }
      this.$emit("ondismiss", this.$el);
      this.$el.parentNode.removeChild(this.$el);
    },
    indexOf: function (value) {
      return this.$utils.node.indexOf(value);
    },
  },
};
</script>
