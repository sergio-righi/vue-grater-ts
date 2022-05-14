<template>
  <div class="gv-item">
    <div class="gv-header">
      <div class="gv-leading">
        <gv-avatar v-if="isImage">
          <gv-image :src="avatar" />
        </gv-avatar>
        <gv-avatar v-else>{{ avatar }}</gv-avatar>
      </div>
      <div class="gv-content">
        {{ header }}
      </div>
    </div>
    <div class="gv-control">
      <slot name="control" v-if="hasControl" />
    </div>
    <div class="gv-content" v-if="hasContent">
      <gv-discussion>
        <template #content>
          <slot name="content" />
        </template>
      </gv-discussion>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-discussion-item",
  props: {
    avatar: String,
    header: {
      type: String,
      required: true,
    },
  },
  mounted() {
    if (this.hasParent) {
      this.$parent.append(this);
    }
  },
  computed: {
    isImage() {
      return this.avatar ? this.$utils.boolean.isImage(this.avatar) : false;
    },
    hasControl() {
      return !!this.$slots.control;
    },
    hasContent() {
      return !!this.$slots.content;
    },
    hasParent() {
      return this.$parent && this.$parent.$options.name === "gv-discussion";
    },
  },
};
</script>
