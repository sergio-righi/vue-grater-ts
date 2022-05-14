<template>
  <gv-dual-list :data="data" v-model="selected" @onscroll="onScroll" />
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      data: [
        { header: "Item A" },
        { header: "Item B" },
        { header: "Item C" },
        { header: "Item D" },
        { header: "Item E" },
        { header: "Item F", subheader: "Addicional information" },
        { header: "Item G" },
        { header: "Item H" },
        { header: "Item I" },
        { header: "Item J" },
        { header: "Item K" },
        { header: "Item L" },
        { header: "Item M" }
      ],
      future: ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    };
  },
  methods: {
    onScroll: function() {
      const data = this.future.map(item => ({ header: `Item ${item}` }));
      this.data.push(...data.slice(0, Math.min(data.length, 3)));
      this.future.splice(0, Math.min(data.length, 3));
    }
  }
};
</script>
