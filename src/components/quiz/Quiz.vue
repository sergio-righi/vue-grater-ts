<template>
  <div class="gv-quiz">
    <div class="gv-header" v-if="hasHeader">
      <slot name="header" />
    </div>
    <div class="gv-content" v-if="hasContent">
      <slot name="content" />
    </div>
    <div class="gv-footer">
      <gv-dialog ref="dialogConfirmation">
        <gv-dialog-item>
          <template #header>
            {{ t("quiz.confirmation.title") }}
          </template>
          <template #content>
            <p>
              {{ t("quiz.confirmation.description") }}
            </p>
          </template>
          <template #footer>
            <gv-button @onclick="onCancel">
              {{ t("quiz.confirmation.no") }}
            </gv-button>
            <gv-button primary @onclick="onConfirm">
              {{ t("quiz.confirmation.yes") }}
            </gv-button>
          </template>
        </gv-dialog-item>
      </gv-dialog>
      <div class="gv-control" :v-if="hasPagination">
        <gv-button @onclick="prev" :disabled="isPrevDisabled">
          {{ t("quiz.prev") }}
        </gv-button>
        <gv-button @onclick="next" :disabled="isNextDisabled">
          {{ t("quiz.next") }}
        </gv-button>
      </div>
      <gv-button
        v-if="hasSubmit"
        @onclick="submit"
        :disabled="submitted"
        primary
      >
        {{ t("quiz.submit") }}
      </gv-button>
    </div>
  </div>
</template>

<script>
import { i18n } from "@/utils";
export default {
  name: "gv-quiz",
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 5,
    },
    forward: Boolean,
    pageSize: Number,
    confirmation: Boolean,
  },
  data() {
    return {
      page: 1,
      items: [],
      submitted: false,
    };
  },
  computed: {
    dialog() {
      return this.$refs.dialogConfirmation;
    },
    total() {
      return this.hasPagination
        ? Math.ceil(this.items.length / this.pageSize)
        : 1;
    },
    range() {
      return {
        to: this.pageSize * this.page,
        from: this.pageSize * (this.page - 1),
      };
    },
    isPrevDisabled() {
      return this.forward || this.page === 1;
    },
    isNextDisabled() {
      return this.page === this.total;
    },
    isValid() {
      let valid = true;
      const { from, to } = this.range;
      this.items.slice(from, to).forEach((item) => {
        item.error = item.required && !item.hasValue ? true : false;
        if (item.error) valid = false;
      });
      return valid;
    },
    hasHeader() {
      return this.$slots.header;
    },
    hasContent() {
      return this.$slots.content;
    },
    hasPagination() {
      return this.pageSize ? this.items.length > this.pageSize : false;
    },
    hasSubmit() {
      return this.page === this.total;
    },
  },
  methods: {
    onCancel: function () {
      this.dialog.close();
    },
    onConfirm: function () {
      this.dialog.close();
      this.submitted = true;
      this.$emit(
        "onsubmit",
        this.items.map((item) => ({ id: item.id, value: item.value }))
      );
    },
    append: function (item) {
      this.items.push(item);
      if (this.hasPagination) {
        this.manageVisibility();
      } else {
        item.active = true;
      }
    },
    manageVisibility: function () {
      const { from, to } = this.range;
      this.items.forEach((item, i) => {
        item.active = i >= from && i < to ? true : false;
      });
    },
    prev: function () {
      this.move(this.page - 1);
    },
    next: function () {
      this.move(this.page + 1);
    },
    move: function (page) {
      if (this.isValid) {
        this.page = this.$utils.number.between(page, 1, this.total);
      }
    },
    submit: function () {
      if (this.isValid) {
        if (this.confirmation) {
          this.dialog.open();
        } else {
          this.onConfirm();
        }
      }
    },
    timeout: function () {
      this.onConfirm();
    },
    t: function (key) {
      return "$i18n" in this ? this.$t(key) : i18n.t(key);
    },
  },
  watch: {
    page() {
      this.manageVisibility();
    },
  },
};
</script>
