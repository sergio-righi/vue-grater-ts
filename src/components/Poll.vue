<template>
  <div class="gv-poll" :class="{ done: isDone }">
    <div class="gv-header">
      <slot name="header" />
      <small v-if="isDone">{{ footnote }}</small>
    </div>
    <div class="gv-content">
      <div
        class="gv-item"
        :class="{ selected: marked === i }"
        v-for="(item, i) in value"
        :key="item.id"
        @click="onClick(i)"
      >
        <div class="gv-content">
          <div class="gv-leading" v-if="marked === i">
            <gv-icon value="checkbox-marked-circle" />
          </div>
          <div class="gv-title">
            {{ item.text }}
          </div>
          <div class="gv-trailing" v-if="isDone">
            {{ Math.round((item.votes / total) * 100) }}%
          </div>
        </div>
        <gv-progress-linear
          :percentage="(item.votes / total) * 100"
          v-if="isDone"
        />
      </div>
    </div>
    <div class="gv-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-poll",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    done: Boolean,
    selected: {
      default: -1,
      type: Number,
    },
  },
  data() {
    return {
      marked: this.selected,
    };
  },
  computed: {
    total() {
      return this.value.reduce((a, b) => a + b.votes, 0);
    },
    footnote() {
      return this.$utils.string.format(this.t("poll.footnote"), this.total);
    },
    isDone() {
      return this.done || this.marked !== -1;
    },
    hasHeader() {
      return !!this.$slots.header;
    },
    hasContent() {
      return !this.$slots.content;
    },
    hasFooter() {
      return !this.$slots.footer;
    },
  },
  methods: {
    onClick: function (i) {
      this.marked = i;
      this.$emit("onvote", i);
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
};
</script>
