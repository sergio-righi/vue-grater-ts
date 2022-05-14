<template>
  <div
    class="gv-item"
    :class="{
      error: item.status === status.error,
      success: item.status === status.sent,
    }"
    :data-key="item.key"
  >
    <div class="item-info">
      <i :class="`gv-file-icon-${item.extension}`"></i>
      <div class="item-description">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-status">
          {{
            item.status === 0
              ? t("dropzone.file_added")
              : item.status === 1
              ? `${t("dropzone.file_waiting")}...`
              : item.status === 2
              ? `${t("dropzone.file_sending")}...`
              : item.status === 3
              ? t("dropzone.file_sent")
              : t("dropzone.file_error")
          }}
        </div>
      </div>
      <div class="item-size">{{ filesize }}</div>
      <gv-progress-circle
        :percentage="item.progress"
        success
        :error="hasError"
        :size="45"
      >
        <div class="item-control" :title="item.message" @click="onClick"></div>
      </gv-progress-circle>
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-dropzone-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    items() {
      return this.hasParent ? this.$parent.items : [];
    },
    status() {
      return this.$parent.status;
    },
    hasError() {
      return this.item.status !== 200;
    },
    filesize() {
      return this.$utils.string.filesize(this.item.size);
    },
    hasParent() {
      return (
        this.$parent && this.$parent.$options.name === "gv-dropzone-upload"
      );
    },
  },
  created() {
    this.config();
  },
  methods: {
    onClick: function () {
      if (this.item.status === this.status.error) {
        this.resend();
      } else if (this.item.status === this.status.success) {
        this.$parent.onFind(this.item);
      } else {
        this.remove();
      }
    },
    config: function () {
      if (this.item.status === this.status.added) {
        const request = new XMLHttpRequest();

        request.open(this.$parent.method, this.$parent.url);

        request.addEventListener(
          "progress",
          (event) => {
            if (event.lengthComputable) {
              this.item.progress = (event.loaded / event.total) * 100;
            }
          },
          false
        );

        request.onload = (response) => {
          const request = response.currentTarget;
          this.$parent.onUpload(this.item);

          if (request.status === 200) {
            this.item.status = this.status.sent;
          } else {
            this.item.message = request.statusText;
            this.item.status = this.status.error;
          }
        };

        this.item.request = request;
        this.item.status = this.status.waiting;
      }
    },
    remove: function () {
      const confirmation = confirm(this.t("dropzone.queue_remove"));
      if (confirmation) {
        if (this.item.status === this.status.sending) {
          this.$parent.onCancel(this.item);
          this.item.request.abort();
        } else if (this.item.status === this.status.sent) {
          this.$parent.onRemove(this.item);
        }

        const index = this.items.findIndex(
          (item) => item.key === this.item.key
        );

        if (index !== -1) {
          this.items.splice(index, 1);
          this.$destroy();
        }
      }
    },
    resend: function () {
      const confirmation = confirm(this.t("dropzone.queue_try_again"));
      if (confirmation) {
        this.item.progress = 0;
        this.item.status = this.status.added;
        this.config();
      }
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
};
</script>
