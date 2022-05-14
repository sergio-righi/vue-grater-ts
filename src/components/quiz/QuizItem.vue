<template>
  <div class="gv-quiz-item" :class="{ active: active, done: isDone }">
    <div class="gv-header" v-if="hasHeader">
      <slot name="header" />
    </div>
    <div class="gv-content">
      <div class="gv-wrapper" v-if="open">
        <gv-input v-model="value" :multiline="multiline" />
      </div>
      <div class="gv-wrapper" v-else-if="scale">
        <gv-slider v-model="value" :min="min" :max="max" :step="1" />
      </div>
      <div class="gv-wrapper" v-else-if="rank">
        <gv-sortable v-model="value" />
      </div>
      <div class="gv-wrapper" v-else>
        <gv-row v-if="multiple">
          <gv-col v-for="(item, i) in options" :key="item.id" :sm="6" :md="4">
            <gv-input-box v-model="value" :val="i + 1">
              {{ item }}
            </gv-input-box>
          </gv-col>
        </gv-row>
        <gv-radio-group v-else>
          <gv-col v-for="(item, i) in options" :key="item.id" :sm="6" :md="4">
            <gv-input-box v-model="value" :val="i + 1" radio>
              {{ item }}
            </gv-input-box>
          </gv-col>
        </gv-radio-group>
      </div>
    </div>
    <div class="gv-footer" v-if="hasFooter">
      <transition name="fade" mode="out-in">
        <span v-if="error">{{ t("quiz.required") }}</span>
        <slot name="footer" v-else />
      </transition>
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-quiz-item",
  props: {
    id: String,
    open: Boolean,
    rank: Boolean,
    scale: Boolean,
    options: Array,
    required: Boolean,
    multiple: Boolean,
    multiline: Boolean,
  },
  data() {
    return {
      error: false,
      active: false,
      value: this.multiple
        ? []
        : this.scale
        ? this.min
        : this.rank
        ? this.options
        : null,
    };
  },
  mounted() {
    if (this.hasParent) {
      this.$parent.append(this);
    }
  },
  computed: {
    min() {
      return this.hasParent ? this.$parent.min : 1;
    },
    max() {
      return this.hasParent ? this.$parent.max : 5;
    },
    isDone() {
      return this.hasParent ? this.$parent.submitted : false;
    },
    hasHeader() {
      return !!this.$slots.header;
    },
    hasFooter() {
      return !!this.$slots.footer;
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-quiz";
    },
    hasValue() {
      const boolean = this.$utils.boolean;
      return (
        this.value !== null &&
        (boolean.hasValue(this.value) || boolean.isNumber(this.value))
      );
    },
  },
  methods: {
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
};
</script>
