<template>
  <gv-row>
    <gv-col>
      <ClientOnly>
        <gv-dropzone :multiple="false" :accept="['txt']" @onqueue="addQueue" />
        <gv-dropzone-upload
          url="/"
          :items="items"
          @onfind="findCallback"
          @oncancel="cancelCallback"
          @onremove="removeCallback"
          @onupload="uploadCallback"
        />
      </ClientOnly>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    addQueue(item) {
      this.items.unshift(item);
    },
    findCallback() {},
    cancelCallback() {},
    removeCallback() {},
    uploadCallback() {},
  },
};
</script>
