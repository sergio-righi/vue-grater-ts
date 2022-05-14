<template>
  <tr :class="{ active: active, selected: isSelected }">
    <gv-th v-if="isSelectable && header" fit />
    <gv-td v-else-if="isSelectable && !header" fit>
      <gv-input-box v-model="b.active" :val="val" checkbox />
    </gv-td>
    <slot />
  </tr>
</template>

<script>
export default {
  name: "gv-tr",
  props: {
    val: [Number, String, Boolean, Object],
    value: Array,
    header: Boolean,
    active: Boolean
  },
  data() {
    return {
      b: {
        active: this.isSelected
      }
    };
  },
  computed: {
    isSelectable() {
      return this.$parent?.selectable ?? false;
    },
    isSelected() {
      return this.value?.includes(this.val) ?? false;
    }
  },
  watch: {
    "b.active": function(val) {
      if (val && !this.isSelected) this.value.push(this.val);
      else if(!val && this.isSelected) this.value.splice(this.value.indexOf(this.val), 1);
      this.$emit("input", this.value);
    }
  }
};
</script>
