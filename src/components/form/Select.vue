<template>
  <gv-input
    embed
    ref="element"
    :label="label"
    :error="error"
    v-bind="$attrs"
    @onblur="onBlur"
    @keyup="onKeyup"
    :value="selected"
    @oninside="toggle"
    :outline="outline"
    :disabled="disabled"
    v-click-outside="close"
    @keydown="onKeydown"
    :placeholder="placeholder"
  >
    <template #leading>
      <gv-icon :value="b.active ? 'chevron-up' : 'chevron-down'" />
    </template>
    <template #trailing>
      <gv-icon
        tabindex="-1"
        value="close"
        class="c-pointer"
        @onclick="clear"
        v-if="hasClear"
      />
    </template>
    <template #embed>
      <div class="gv-select" :class="{active: b.active, multiple: isMultiple}">
        <div
          v-if="isMultiple"
          class="gv-content"
          ref="content"
          @mousedown="onMousedown"
        >
          <gv-input-box
            tabindex="-1"
            v-for="item in options"
            :key="item.id"
            v-model="input"
            @click.native="onClick"
            @change.native="onInput"
            :checked="isSelected(item.value)"
            :disabled="item.disabled"
            :val="item.value"
          >
            {{ item.text }}
          </gv-input-box>
        </div>
        <div v-else class="gv-content" ref="content" @mousedown="onMousedown">
          <div
            v-for="(item, index) in options"
            :key="item.id"
            class="gv-item"
            :class="{
              focused: focusedIndex === index,
              selected: isSelected(item.value),
              disabled: item.disabled,
            }"
            @mousedown="onChange(item.value, item.disabled)"
          >
            {{ item.text }}
          </div>
        </div>
        <div class="gv-search" v-if="term">{{ term }}</div>
        <slot />
      </div>
    </template>
  </gv-input>
</template>

<script>
export default {
  name: 'gv-select',
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    label: String,
    error: Boolean,
    outline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    multiple: Boolean,
    required: Boolean,
    placeholder: String,
    autocomplete: Boolean,
    value: [Array, Number, String],
  },
  data() {
    return {
      query: [],
      input: null,
      filtered: [],
      b: {
        active: false,
      },
      keepFocus: false,
      focusedIndex: -1,
      elements: this.items,
    };
  },
  watch: {
    value(val) {
      this.input = val;
    },
    items(val) {
      this.elements = val;
    },
  },
  created() {
    this.input =
      this.isMultiple && !Array.isArray(this.value) ? [this.value] : this.value;
  },
  computed: {
    hasContent() {
      return this.options.length;
    },
    hasClear() {
      const boolean = this.$utils.boolean;
      return (
        ((boolean.isNumber(this.input) && this.input >= 0) ||
          boolean.hasValue(this.input)) &&
        ((!this.multiple && this.input !== -1) ||
          (this.multiple && this.input.length > 0)) &&
        !this.disabled &&
        !this.required
      );
    },
    isMultiple() {
      return this.multiple || this.autocomplete;
    },
    isArray() {
      return Array.isArray(this.input);
    },
    selected() {
      const values = this.isArray
        ? this.options
            .filter((item) => this.input.includes(item.value))
            .map((item) => item.text)
        : this.options.find((item) => item.value === this.input)?.text;
      return values
        ? this.isArray
          ? values.length
            ? values.join(', ')
            : null
          : values
        : null;
    },
    options() {
      return this.elements.filter(
        (item, i, self) => i === self.findIndex((x) => x.value === item.value),
      );
    },
    selectedIndex() {
      return this.options.findIndex((item) => item.value === this.input);
    },
    term() {
      return this.query.length > 0 ? this.query.join('') : null;
    },
    element() {
      return this.$refs.element;
    },
  },
  mounted() {
    this.config();
  },
  methods: {
    focus: function () {
      this.element.focus();
    },
    blur: function () {
      this.element.blur();
    },
    onChange: function (value, disabled) {
      if (disabled) return;
      this.input = value;
      this.onInput();
      this.close();
    },
    onBlur: function () {
      if (!this.keepFocus) {
        this.close();
      }
      this.keepFocus = false;
    },
    onInput: function () {
      this.$emit('input', this.input);
    },
    onMousedown: function (event) {
      event.preventDefault();
      if (event.target === this.$refs.content) {
        this.keepFocus = true;
      } else {
        this.keepFocus = false;
      }
    },
    onClick: function () {
      this.element.focus();
    },
    toggle: function () {
      if (this.b.active && !this.keepFocus) {
        this.close();
      } else if (!this.b.active) {
        this.open();
      }
    },
    open: function () {
      if (!this.items.length) return;
      this.focusedIndex = this.selectedIndex;
      this.moveTo();
      this.b.active = true;
    },
    close: function () {
      this.query = [];
      this.b.active = false;
      this.focusedIndex = this.selectedIndex;
    },
    get: function (index) {
      return this.options[index];
    },
    prev: function (index) {
      do {
        index = index === 0 ? this.options.length - 1 : index - 1;
      } while (this.get(index).disabled);
      return index;
    },
    next: function (index) {
      do {
        index = index === this.options.length - 1 ? 0 : index + 1;
      } while (this.get(index).disabled);
      return index;
    },
    clear: function () {
      this.input = this.multiple ? [] : null;
      this.onInput();
    },
    onKeydown: function (event) {
      if (this.hasContent) {
        const keycode = this.$utils.keycode;
        if (
          !this.b.active &&
          (event.which === keycode.enter || event.which === keycode.down)
        ) {
          event.preventDefault();
          this.open();
          return;
        } else if (event.which === keycode.space) {
          event.preventDefault();
          return;
        }
        if (this.isMultiple) return;
        if (this.b.active && event.which === keycode.enter) {
          this.input =
            this.focusedIndex !== -1
              ? this.get(this.focusedIndex)?.value
              : this.input;
          this.close();
        } else if (event.which === keycode.esc) {
          this.close();
        } else if (
          this.b.active &&
          (event.which === keycode.up || event.which === keycode.down)
        ) {
          event.preventDefault();
          if (event.which === keycode.up) {
            this.focusedIndex = this.prev(
              this.focusedIndex === -1 ? 0 : this.focusedIndex,
            );
          } else if (event.which === keycode.down) {
            this.focusedIndex = this.next(this.focusedIndex);
          }
          this.moveTo();
        } else if (
          !this.b.active &&
          (event.which === keycode.left || event.which === keycode.right)
        ) {
          if (event.which === keycode.left) {
            this.focusedIndex = this.prev(
              this.focusedIndex === -1 ? 0 : this.focusedIndex,
            );
          } else if (event.which === keycode.right) {
            this.focusedIndex = this.next(this.focusedIndex);
          }
          this.moveTo();
          this.input = this.get(this.focusedIndex)?.value ?? this.input;
        }
      }
      this.onInput();
    },
    onKeyup: function (event) {
      if (this.isMultiple) return;
      if (event.which === this.$utils.keycode.backspace) {
        this.query.pop();
      } else {
        const regex = new RegExp('^[a-zA-Z0-9 ]+$');
        const char = String.fromCharCode(
          !event.charCode ? event.which : event.charCode,
        ).toLowerCase();
        if (!regex.test(char)) return;
        this.query.push(char);
      }
      const index = this.options.findIndex(
        (item) =>
          !item.disabled &&
          String(item.value).toLowerCase().includes(this.term),
      );
      this.focusedIndex = index === -1 ? this.focusedIndex : index;
      if (!this.b.active) {
        this.input = this.get(this.focusedIndex)?.value ?? this.input;
        // this.onInput();
      }
    },
    moveTo: function () {
      if (!this.multiple) {
        const container = this.$refs.content;
        const element = this.$refs.content.children[this.focusedIndex];
        if (element) {
          container.scrollTop =
            element.offsetTop +
            element.clientHeight / 2 -
            container.clientHeight / 2;
        }
      }
    },
    isSelected: function (value) {
      return this.isMultiple && this.isArray
        ? this.input.includes(value)
        : this.input === value;
    },
    config: function () {
      this.$slots.default?.forEach((item) => {
        if (/option/g.test(item.tag)) {
          this.elements.push({
            value: item.elm.value,
            text: item.elm?.textContent ?? item.elm.value,
            disabled: item.elm?.disabled ?? false,
          });
          item.elm.parentNode.removeChild(item.elm);
        }
      });
    },
  },
};
</script>
