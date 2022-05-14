<template>
  <div class="gv-table">
    <table v-bind="$attrs" v-on="$listeners">
      <thead>
        <gv-tr v-if="!hasHead" header>
          <gv-th
            v-for="item in head"
            :key="item.id"
            :label="display(item)"
            :fit="item.fit"
          />
        </gv-tr>
        <gv-tr v-else header>
          <slot name="head" />
        </gv-tr>
      </thead>
      <tbody v-if="!hasBody">
        <gv-tr
          v-for="(item, index) in body"
          :key="item.id"
          :active="item.active"
          v-model="selected"
          :val="row(item, index)"
        >
          <gv-td
            v-for="(subitem, index) in head"
            :key="subitem.id"
            :fit="fit.includes(index)"
          >
            {{ value(item, subitem) }}
          </gv-td>
        </gv-tr>
      </tbody>
      <tbody v-else>
        <slot name="body" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-table",
  inheritAttrs: false,
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
    selectable: Boolean,
  },
  data() {
    return {
      head: [],
      body: [],
      selected: [],
    };
  },
  mounted() {
    this.config();
  },
  computed: {
    hasHead() {
      return !!this.$slots.head;
    },
    hasBody() {
      return !!this.$slots.body;
    },
    fit() {
      return this.head.filter((item) => item.fit).map((_, index) => index);
    },
  },
  methods: {
    config: function () {
      if (this.hasHead) {
        this.body = this.rows;
        this.head = this.$children[0]?.$children?.map((item) => ({
          label: item.label,
          prop: item.prop,
          fit: item.fit,
          active: item.active,
        }));
      } else {
        this.body = this.rows;
        this.head = this.columns;
      }
    },
    display: function (item) {
      return item.label ?? item ?? "";
    },
    key: function (item) {
      return (item.prop ?? this.display(item)).toLowerCase().replace(" ", "_");
    },
    value: function (item, o) {
      const oKey = this.key(o);
      return oKey in item ? item[oKey] : this.t("table.no_value");
    },
    row: function (item, index) {
      return item.id ?? index;
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
  watch: {
    selected() {
      this.$emit("input", this.selected);
    },
  },
};
</script>
