<template>
  <div class="gv-dual-list">
    <div class="gv-header">
      <div class="gv-filter">
        <input :placeholder="t('dual_list.placeholder')" v-model="term" />
        <gv-icon value="magnify" />
      </div>
    </div>
    <div class="gv-content">
      <div
        class="gv-column"
        v-if="unselected.length"
        @scroll="onScroll($event)"
      >
        <div
          class="gv-item"
          v-for="item in unselected"
          :key="item.id"
          @click="onClick(item, true)"
          :class="{ disabled: item.disabled }"
        >
          <span :title="item.header">{{ item.header }}</span>
          <small v-if="item.subheader" :title="item.subheader">
            {{ item.subheader }}
          </small>
        </div>
      </div>
      <div class="gv-column" v-else>
        <span>{{ t("dual_list.no_record") }}</span>
      </div>
      <div class="gv-column" v-if="selected.length">
        <div
          class="gv-item"
          v-for="item in selected"
          :key="item.id"
          @click="onClick(item, false)"
          :class="{ disabled: item.disabled }"
        >
          <span :title="item.header">{{ item.header }}</span>
          <small v-if="item.subheader" :title="item.subheader">
            {{ item.subheader }}
          </small>
        </div>
      </div>
      <div class="gv-column" v-else>
        <span>{{ t("dual_list.no_record") }}</span>
      </div>
    </div>
    <div class="gv-footer">
      <div class="gv-note">
        <span v-if="term">
          {{ filteredMessage }}
        </span>
        <span v-else>
          {{ footnoteMessage }}
        </span>
      </div>
      <div class="gv-control" v-if="!hideControl && !term">
        <gv-button sm @onclick="moveAll(false)">
          <gv-icon value="chevron-double-left" />
        </gv-button>
        <gv-button sm @onclick="moveAll(true)">
          <gv-icon value="chevron-double-right" />
        </gv-button>
      </div>
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-dual-list",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
    hideControl: Boolean,
  },
  data() {
    return {
      term: null,
      selected: [],
      unselectd: [],
      input: this.value,
    };
  },
  created() {
    this.config();
  },
  computed: {
    footnoteMessage: {
      cache: false,
      get() {
        return this.$utils.string.format(
          this.t("dual_list.note"),
          this.data.length,
          this.unselected.length,
          this.selected.length
        );
      },
    },
    filteredMessage: {
      cache: false,
      get() {
        return this.$utils.string.format(
          this.t("dual_list.filtered"),
          this.unselected.length,
          this.selected.length
        );
      },
    },
    filteredUnselected() {
      return this.data
        .filter((item) => !this.input.includes(item.id ?? item.header))
        .sort((item) => item.header);
    },
    filteredSelected() {
      return this.data
        .filter((item) => this.input.includes(item.id ?? item.header))
        .sort((item) => item.header);
    },
  },
  methods: {
    onClick: function (item, selected) {
      if (selected) {
        this.input.push(item.id ?? item.header);
      } else {
        const index = this.filteredSelected.findIndex((x) =>
          x.id ? x.id === item.id : x.header === item.header
        );
        if (index !== -1) {
          this.input.splice(index, 1);
        }
      }
      this.config();
    },
    onScroll: function (event) {
      if (
        event.target.scrollHeight ===
        event.target.scrollTop + event.target.clientHeight
      ) {
        this.$emit("onscroll");
      }
    },
    config: function () {
      this.selected = this.filteredSelected;
      this.unselected = this.filterByTerm();
      this.$emit("input", this.input);
    },
    filterByTerm: function () {
      return !this.term
        ? this.filteredUnselected
        : this.filteredUnselected.filter(
            (item) =>
              item.header.toLowerCase().match(this.term.toLowerCase()) ||
              (item.subheader ?? "")
                .toLowerCase()
                .match(this.term.toLowerCase())
          );
    },
    moveAll: function (selected) {
      if (selected) {
        this.filteredUnselected.forEach((item) =>
          this.input.push(item.id ?? item.header)
        );
      } else {
        this.input = [];
      }
      this.config();
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
  watch: {
    data() {
      this.config();
    },
    value(val) {
      this.input = val;
      this.config();
    },
    term(val) {
      this.config();
      this.$emit("onfilter", val);
    },
  },
};
</script>
