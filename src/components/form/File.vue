<template>
  <gv-input
    type="file"
    ref="element"
    :error="error"
    :label="label"
    v-bind="$attrs"
    :multiple="multiple"
    @change.native="onChange"
  >
    <template #leading>
      <gv-icon value="upload" v-if="!multiple" />
      <gv-icon value="upload-multiple" v-else />
    </template>
    <template #trailing>
      <span v-if="files.length === 1" :title="files[0]">{{ files[0] }}</span>
      <gv-dropdown left v-else-if="files.length > 1">
        <template #trigger>
          <gv-button primary sm>
            <gv-icon value="chevron-down" />
          </gv-button>
        </template>
        <template #content>
          <gv-dropdown-item v-for="file in files" :key="file.id">
            {{ file }}
          </gv-dropdown-item>
        </template>
      </gv-dropdown>
    </template>
  </gv-input>
</template>

<script>
export default {
  name: "gv-input-file",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    image: Boolean,
    error: Boolean,
    multiple: Boolean
  },
  data() {
    return {
      files: []
    };
  },
  computed: {
    element() {
      return this.$refs.element;
    }
  },
  methods: {
    focus: function() {
      this.element.focus();
    },
    onChange: function() {
      const input = this.element.element;
      if (input.files) {
        this.files = Object.values(input.files).map(x => x.name);
        this.$emit("onchange", input.files);
      }
    }
  }
};
</script>
