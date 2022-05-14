<template>
  <div class="gv-configuration" @click.self="close">
    <div class="gv-overlay"></div>
    <div v-if="!active.speed && !active.resolution" class="gv-menu">
      <div class="gv-item" @click="setLoop">
        <div class="gv-property">{{ t("video.loop") }}</div>
        <div class="gv-control">
          <gv-switch v-model="loop" sm />
        </div>
      </div>
      <div class="gv-item" @click="setUndock">
        <div class="gv-property">{{ t("video.undock") }}</div>
        <div class="gv-control">
          <gv-switch v-model="undock" sm />
        </div>
      </div>
      <div class="gv-item" @click="active.speed = true">
        <div class="gv-property">{{ t("video.speed") }}</div>
        <div class="gv-control">
          <span>{{ speed }}</span>
          <gv-icon value="chevron-right" />
        </div>
      </div>
      <div class="gv-item" @click="active.resolution = true">
        <div class="gv-property">{{ t("video.resolution") }}</div>
        <div class="gv-control">
          <span>{{ resolution }}</span>
          <gv-icon value="chevron-right" />
        </div>
      </div>
    </div>
    <div v-else-if="active.speed" class="gv-menu">
      <div class="gv-header" @click="active.speed = false">
        <div class="gv-label">{{ t("video.speed") }}</div>
      </div>
      <div class="gv-content">
        <div
          v-for="(item, index) in supported.speed"
          :key="item.id"
          class="gv-item"
          :class="{ selected: item === speed }"
          @click="setSpeed(index)"
        >
          <div class="gv-control">
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active.resolution" class="gv-menu">
      <div class="gv-header" @click="active.resolution = false">
        <div class="gv-label">{{ t("video.resolution") }}</div>
      </div>
      <div class="gv-content">
        <div
          v-for="item in supportedResolution"
          :key="item.id"
          class="gv-item"
          :class="{ selected: item === resolution }"
          @click="setResolution(item)"
        >
          <div class="gv-control">
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-video-configuration",
  props: {
    supportedResolution: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: {
        loop: false,
        speed: false,
        undocked: false,
        resolution: false,
      },
      supported: {
        speed: [0.5, 1, 1.5, 2, 2.5],
      },
    };
  },
  computed: {
    configuration() {
      return this.$parent.active.configuration;
    },
    resolution: {
      get() {
        return this.$parent.data.resolution;
      },
      set(val) {
        this.$parent.data.resolution = val;
      },
    },
    speed: {
      get() {
        return this.$parent.data.speed;
      },
      set(val) {
        this.$parent.data.speed = val;
      },
    },
    loop: {
      get() {
        return this.$parent.active.loop;
      },
      set(val) {
        this.$parent.active.loop = val;
      },
    },
    undock: {
      get() {
        return this.$parent.feature.undock;
      },
      set(val) {
        this.$parent.feature.undock = val;
      },
    },
  },
  watch: {
    configuration() {
      this.active.speed = false;
      this.active.resolution = false;
    },
  },
  methods: {
    setLoop: function () {
      this.loop = !this.loop;
    },
    setUndock: function () {
      this.undock = !this.undock;
    },
    setResolution: function (item) {
      this.active.resolution = false;
      this.resolution = item;
    },
    setSpeed: function (index) {
      this.active.speed = false;
      this.speed = this.supported.speed[index];
    },
    close: function () {
      this.$parent.active.configuration = false;
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
};
</script>
