<template>
  <div class="gv-indexer" :class="{ top: top, right: right, hidden: hidden }">
    <gv-indexer-nav ref="navigation" :letters="letters" v-if="nav" />
    <div class="gv-content">
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import IndexerItem from "./IndexerItem.vue";

export default {
  name: "gv-indexer",
  props: {
    shortcut: {
      type: Boolean,
      default: true,
    },
    highlight: {
      type: Boolean,
      default: true,
    },
    nav: {
      type: Boolean,
      default: true,
    },
    top: Boolean,
    right: Boolean,
    hidden: Boolean,
  },
  data() {
    return {
      count: 0,
      letters: [],
      locked: false,
      componentKey: -1,
      selectedIndex: -1,
    };
  },
  mounted() {
    this.build();
    if (this.shortcut) {
      window.addEventListener("keydown", this.handleKeydown);
    }
    if (this.highlight) {
      window.addEventListener("scroll", this.handleWindowScroll);
    }
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
    window.removeEventListener("scroll", this.handleWindowScroll);
  },
  computed: {
    navigation() {
      return this.$refs.navigation;
    },
  },
  watch: {
    count() {
      this.build();
    },
  },
  methods: {
    build() {
      const items = this.$slots.default.filter(
        (item) => !item.componentInstance?.title
      );
      if (items.length === this.count) {
        this.map();
        this.set();
        this.sort();
        this.checkState();
      }
    },
    map() {
      this.letters = this.$slots.default
        .map((item) => item.componentInstance.letter)
        .reduce((array, item) =>
          array.includes(item) ? array : [...array, item]
        )
        .sort((itemA, itemB) => itemA.localeCompare(itemB));
    },
    set() {
      if (!this.hidden) {
        this.letters.forEach((item) => {
          const ComponentClass = Vue.extend(IndexerItem);
          const instance = new ComponentClass({
            propsData: { header: item, title: true },
          });
          instance.$mount();
          this.$slots.default.push(instance._vnode);
        });
      }
    },
    sort() {
      this.$slots.default.sort((itemA, itemB) => {
        const aValue = (
          itemA.componentInstance?.header ?? itemA.context.header
        ).trim();
        const bValue = (
          itemB.componentInstance?.header ?? itemB.context.header
        ).trim();

        return aValue
          .toString()
          .toUpperCase()
          .localeCompare(bValue.toString().toUpperCase());
      });
    },
    moveTo(index) {
      const element = this.reference(this.letters[index]);
      if (element) {
        const offsetTop =
          element.offsetTop - this.$utils.node.outerHeight(element);
        window.scrollTo(0, offsetTop);
      }
    },
    ready() {
      this.count++;
    },
    checkState() {
      if (!this.locked) {
        if (this.selectedIndex === -1) {
          for (let letter of this.letters) {
            const element = this.reference(letter);
            if (element) {
              if (this.$utils.node.inViewport(element)) {
                const index = this.letters.indexOf(letter);
                this.select(index);
                if (this.navigation) {
                  this.navigation.select(index);
                }
                break;
              }
            }
          }
        } else {
          this.select(this.selectedIndex);
          if (this.navigation) {
            this.navigation.select(this.selectedIndex);
          }
          this.selectedIndex = -1;
        }
      }
    },
    handleKeydown(event) {
      if (event.altKey) {
        const characterCode = event.which;
        const character = String.fromCharCode(characterCode);
        if (this.letters.includes(character.toUpperCase())) {
          this.moveTo(this.letters.indexOf(character));
        }
      }
    },
    handleWindowScroll() {
      this.checkState();
    },
    select(index) {
      const reference = this.reference(this.letters[index]);
      if (reference) {
        if (this.currentIndex !== -1) {
          reference.classList.remove("active");
        }
        reference.classList.add("active");
        this.currentIndex = index;
      }
    },
    reference(character) {
      return this.$el.querySelector(`[data-section="${character}"]`);
    },
  },
};
</script>
