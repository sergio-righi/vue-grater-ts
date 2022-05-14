<template>
  <gv-dual-list :data="data" v-model="selected" @onfilter="onFilter" />
</template>

<script>
export default {
  data() {
    return {
      data: [],
      selected: [],
      source: [
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
      ]
    };
  },
  methods: {
    onFilter: function(term) {
      this.data =
        term.length === 0
          ? this.source.filter(item =>
              this.selected.includes(item.id ?? item.header)
            )
          : this.source.filter(
              item =>
                (item?.header.toLowerCase().match(term.toLowerCase()) ??
                  false) ||
                this.selected.includes(item.id ?? item.header)
            );
    }
  }
};
</script>
