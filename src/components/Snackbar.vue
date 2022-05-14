<template>
  <div class="gv-snackbar" :class="{ left: left, right: right }">
    <transition name="t-snackbar" mode="in-out">
      <div v-show="b.active" class="gv-wrapper">
        <div class="gv-content">{{ message }}</div>
        <div class="gv-control">
          <span v-if="action" class="gv-action" @click="onClick">
            {{ action }}
          </span>
          <span
            v-if="hasDismissible"
            class="gv-dismiss"
            @click="b.active = false"
          >
            {{ dissmissText }}
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { i18n } from "@/utils";

export default {
  name: "gv-snackbar",
  props: {
    timeout: {
      type: Number,
      default: 3000,
    },
    message: {
      type: String,
      required: true,
    },
    left: Boolean,
    action: String,
    right: Boolean,
    dismiss: String,
    visible: Boolean,
  },
  data() {
    return {
      timer: null,
      b: {
        active: false,
      },
      dissmissText: this.dismiss ?? this.t("snackbar.dismiss"),
    };
  },
  computed: {
    hasDismissible() {
      return this.timeout === 0;
    },
  },
  watch: {
    message() {
      if (this.b.active) {
        this.controller();
      }
    },
    visible(val) {
      val ? this.show() : this.hide();
    },
  },
  methods: {
    onClick: function (event) {
      this.hide();
      this.$emit("onclick", event);
    },
    show: function () {
      if (!this.b.active) {
        this.b.active = true;
        this.controller();
        this.$emit("onshow");
      }
    },
    hide: function () {
      this.b.active = false;
      this.clearInterval();
      this.$emit("onhide");
    },
    controller: function () {
      if (!this.hasDismissible) {
        this.clearInterval();
        this.timer = setTimeout(() => this.hide(), this.timeout);
      }
    },
    clearInterval: function () {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
};
</script>
