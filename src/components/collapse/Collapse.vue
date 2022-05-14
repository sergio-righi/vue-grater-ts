<template>
  <div class="gv-collapse" :class="{ hidden: hideArrow, outline: outline }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "gv-collapse",
  props: {
    outline: Boolean,
    hideArrow: Boolean,
    exclusive: Boolean
  },
  data() {
    return {
      items: []
    };
  },
  computed: {
    selected() {
      return this.items.filter(item => item.bactive);
    }
  },
  methods: {
    close: function() {
      this.selected.forEach(item => item.close());
    },
    append: function(item) {
      this.items.push(item);
    }
  }
};
</script>
