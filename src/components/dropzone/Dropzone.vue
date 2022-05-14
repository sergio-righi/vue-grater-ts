<template>
  <div class="gv-dropzone" :class="{ window: window, active: bover }">
    <div
      class="gv-dropzone-overlay"
      :class="{ hover: bover, error: berror }"
      :data-message="error || t('dropzone.drop_here')"
      @drop="onDrop"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
    >
      <div
        v-if="clickable && !window"
        class="gv-dropzone-file-uploader"
        :data-message="t('dropzone.click_here')"
      >
        <input type="file" :multiple="multiple" @change="onChange" />
      </div>
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-dropzone",
  props: {
    parallel: {
      default: 1,
      type: Number,
    },
    accept: {
      default: "*",
      type: [String, Array],
    },
    maxSize: Number,
    clickable: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    window: Boolean,
  },
  data() {
    return {
      items: [],
      error: null,
      berror: false,
      bwindow: false,
      boverlay: false,
      bdropzone: false,
    };
  },
  computed: {
    bover() {
      return (this.window && this.bwindow) || this.boverlay;
    },
  },
  mounted() {
    window.addEventListener("drop", this.handleWindowDrop);
    window.addEventListener("dragover", this.handleWindowDragover);
    window.addEventListener("dragleave", this.handleWindowDragleave);
  },
  beforeDestroy() {
    window.removeEventListener("drop", this.handleWindowDrop);
    window.removeEventListener("dragover", this.handleWindowDragover);
    window.removeEventListener("dragleave", this.handleWindowDragleave);
  },
  methods: {
    onDrop: function (event) {
      event.preventDefault();
      if (this.multiple || event.dataTransfer.files.length === 1) {
        this.onChange(event);
      } else {
        this.validation(this.t("dropzone.single_exception"));
      }
    },
    onDragenter: function (event) {
      if (this.isFile(event)) {
        if (this.boverlay) return;

        this.boverlay = true;
      }
    },
    onDragleave: function () {
      this.boverlay = false;
    },
    onChange: function (event) {
      const files = event.target.files || event.dataTransfer.files;
      Array.from(files).forEach((file) => this.upload(file));
    },
    upload: function (file) {
      if (!this.maxSize || file.size <= this.maxSize) {
        const extension = file.name
          .substr(file.name.lastIndexOf(".") + 1)
          .toLowerCase();

        if (this.accept === "*" || this.accept.includes(extension)) {
          const self = this;
          const reader = new FileReader();

          reader.onload = (function (file) {
            return function () {
              self.add(file, {
                name: file.name,
                size: file.size,
                extension,
              });
            };
          })(file);

          reader.readAsDataURL(file);
        } else {
          this.validation(this.t("dropzone.extension_exception"));
        }
      } else {
        this.validation(this.t("dropzone.size_exception"));
      }
    },
    add: function (file, info) {
      const key = Math.floor(Date.now());

      const formData = new FormData();
      formData.append("key", key);
      formData.append("file", file);

      const item = this.$utils.object.deepMerge(info, {
        key,
        status: 0,
        data: formData,
      });

      this.$emit("onqueue", item);
    },
    isFile: function (event) {
      return (
        event.dataTransfer.types &&
        (event.dataTransfer.types.indexOf
          ? event.dataTransfer.types.includes("Files")
          : event.dataTransfer.types.contains("Files"))
      );
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
    validation: function (error) {
      this.berror = true;
      this.error = error;
      setTimeout(() => {
        this.berror = false;
        this.error = null;
      }, 3000);
    },
    handleWindowDrop: function (event) {
      event.preventDefault();

      this.bwindow = false;
      this.boverlay = false;
      this.bdropzone = false;
    },
    handleWindowDragover: function (event) {
      if (this.isFile(event)) {
        event.preventDefault();
        if (this.bwindow) return;

        this.bwindow = true;
      }
    },
    handleWindowDragleave: function () {
      if (!this.boverlay && !this.bdropzone) {
        this.bwindow = false;
      }
    },
  },
};
</script>
