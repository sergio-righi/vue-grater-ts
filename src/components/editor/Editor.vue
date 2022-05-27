<template>
  <div class="gv-editor">
    <div class="gv-header">
      <div class="gv-wrapper" :class="{disabled: isDisabled}">
        <gv-icon value="application-outline" @onclick="blockClick" />
        <gv-icon value="format-header-pound" @onclick="headerClick" />
        <gv-icon value="format-paragraph" @onclick="paragraphClick" />
        <gv-icon value="format-list-bulleted-square" @onclick="listClick" />
        <gv-icon value="image-outline" @onclick="sourceClick" />
        <gv-icon value="application-brackets-outline" @onclick="embedClick" />
        <gv-icon value="table" @onclick="tableClick" />
      </div>
    </div>
    <div ref="content" class="gv-content"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import Block from './Block.vue';
import Embed from './Embed.vue';
import Header from './Header.vue';
import Source from './Source.vue';
import List from './List.vue';
import Paragraph from './Paragraph.vue';
import Table from './Table.vue';
export default {
  name: 'gv-editor',
  data() {
    return {
      elm: null,
      selected: null,
    };
  },
  computed: {
    isDisabled: function () {
      return this.elm === null || this.elm === undefined;
    },
    content: function () {
      return this.$refs.content;
    },
  },
  methods: {
    blockClick: function () {
      this.createComponent(Block, this.content, {selected: this.selected});
    },
    headerClick: function () {
      this.createComponent(Header, this.elm);
    },
    paragraphClick: function () {
      this.createComponent(Paragraph, this.elm);
    },
    listClick: function () {
      this.createComponent(List, this.elm);
    },
    sourceClick: function () {
      this.createComponent(Source, this.elm);
    },
    embedClick: function () {
      this.createComponent(Embed, this.elm);
    },
    tableClick: function () {
      this.createComponent(Table, this.elm);
    },
    createComponent: function (component, target, props = {}, slots = {}) {
      const ComponentClass = Vue.extend(component);
      const instance = new ComponentClass({
        parent: this,
        propsData: props,
      });

      // for (const slot of Object.keys(slots)) {
      //   console.log(slot);
      //   // instance.$slots.default = ['Click me!'];
      // }

      instance.$mount();

      target.appendChild(instance.$el);

      return instance;
    },
    onSelect: function (element, _uid) {
      this.elm = element;
      this.selected = _uid;
    },
  },
};
</script>
