<template>
  <div
    class="gv-block"
    :class="{structure: structure, selected: isSelected}"
    @click.prevent="selectClick"
  >
    <div class="gv-header">
      <div class="gv-wrapper">
        <slot name="toolbar" />
      </div>
      <div class="gv-control">
        <gv-icon value="arrow-up" @onclick="moveClick(true)" />
        <gv-icon value="arrow-down" @onclick="moveClick(false)" />
        <gv-icon value="content-copy" @onclick="transferClick(false)" />
        <gv-icon value="content-cut" @onclick="transferClick(true)" />
        <gv-icon value="xml" @onclick="codeClick" />
        <gv-icon
          v-if="structure"
          value="unfold-less-horizontal"
          @onclick="toggleClick"
        />
        <gv-icon value="close" @onclick="removeClick" />
      </div>
    </div>
    <div ref="content" class="gv-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'gv-editor-container',
  props: {
    structure: Boolean,
  },
  mounted() {
    this.selectClick();
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
    this.selectClick();
  },
  computed: {
    isSelected: function () {
      return this._uid === this.$parent.selected;
    },
  },
  methods: {
    moveClick: function (direction) {
      if (direction) {
        this.$utils.node.insertBefore(
          this.$el.previousElementSibling,
          this.$el,
        );
      } else {
        this.$utils.node.insertAfter(this.$el.nextElementSibling, this.$el);
      }
    },
    transferClick: function (cut) {
      // this.transferComponent = this.$el.outerHTML;
      // if (cut) {
      //   elementBlock.parentNode.removeChild(elementBlock);
      // }
    },
    codeClick: function () {},
    toggleClick: function () {},
    removeClick: function () {
      this.$destroy();
    },
    selectClick: function () {
      this.$parent &&
        'onSelect' in this.$parent &&
        this.$parent.onSelect(this.$refs.content, this._uid);
    },
  },
};
</script>
