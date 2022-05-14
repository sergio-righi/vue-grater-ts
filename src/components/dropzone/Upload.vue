<template>
  <div class="gv-dropzone-upload" :class="{ active: bopen }" v-if="bupload">
    <div class="gv-header" @click="bopen = !bopen">
      <div class="header-label">{{ sstatus }}</div>
      <div class="header-icon icon-arrow"></div>
      <div class="header-icon icon-close" @click.stop="onClose"></div>
    </div>
    <div class="gv-content">
      <gv-dropzone-item v-for="item in items" :key="item.key" :item="item" />
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-dropzone-upload",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    url: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      default: "POST",
    },
    removable: {
      type: Boolean,
      default: true,
    },
    parallel: {
      default: 1,
      type: Number,
    },
  },
  data() {
    return {
      sstatus: "",
      queue: null,
      bopen: false,
      bupload: false,
      brunning: false,
    };
  },
  computed: {
    status() {
      return {
        added: 0,
        waiting: 1,
        sending: 2,
        sent: 3,
        error: 4,
      };
    },
  },
  watch: {
    items() {
      this.bopen = true;
      this.bupload = true;
    },
  },
  mounted() {
    this.run();
    window.addEventListener("beforeunload", this.handleWindowBeforeUnload);
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.handleWindowBeforeUnload);
  },
  methods: {
    onFind: function (item) {
      this.$emit("onfind", item);
    },
    onCancel: function (item) {
      this.$emit("oncancel", item);
    },
    onRemove: function (item) {
      this.$emit("onremove", item);
    },
    onUpload: function (item) {
      this.$emit("onupload", item);
    },
    onClose: function (event) {
      event.preventDefault();
      const self = this;
      this.bupload = !this.bupload;
      if (this.brunning) {
        this.items.forEach((item) => {
          if (item.status !== self.status.sent) {
            item.request.abort();
          }
        });
      }
    },
    run: function () {
      setInterval(() => {
        this.label();
        if (this.byStatus(this.status.waiting).length > 0) {
          this.check();
        } else {
          this.brunning = false;
          clearInterval(this.queue);
        }
      }, 2000);
    },
    check: function () {
      if (!this.brunning) {
        this.brunning = true;
        this.queue = setInterval(() => {
          if (
            this.byStatus(this.status.waiting).length > 0 &&
            this.byStatus(this.status.sending).length < this.parallel
          ) {
            const item = this.next();
            item.request.send(item.data);
            item.status = this.status.sending;
          }
        }, 500);
      }
    },
    label: function () {
      const error = this.byStatus(this.status.error);
      if (error.length === 0) {
        const sent = this.byStatus(this.status.sent);
        const sending = this.byStatus(this.status.sending);
        const waiting = this.byStatus(this.status.waiting);
        if (sent.length + error.length === this.items.length) {
          this.sstatus = this.t("dropzone.queue_sent");
        } else if (waiting.length > 0) {
          this.sstatus = `(${waiting.length}) ${this.t(
            "dropzone.queue_waiting"
          )}`;
        } else if (sending.length > 0) {
          this.sstatus = `(${sending.length}) ${this.t(
            "dropzone.queue_sending"
          )}`;
        }
      } else {
        this.sstatus = `(${error.length}) ${this.t("dropzone.queue_error")}`;
      }
    },
    byStatus: function (status) {
      const isArray = Array.isArray(status);
      return this.items.filter((item) => {
        if (
          (!isArray && item.status === status) ||
          (isArray && status.includes(item.status))
        )
          return item;
      });
    },
    next: function () {
      return this.items.find((item) => item.status === this.status.waiting);
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
    handleWindowBeforeUnload: function () {
      if (this.brunning) return "";
    },
  },
};
</script>
