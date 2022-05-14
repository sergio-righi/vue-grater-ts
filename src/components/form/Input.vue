<template>
  <div
    class="gv-field"
    :class="{
      embed: embed,
      error: berror,
      outline: outline,
      required: required,
      disabled: disabled,
      multiline: multiline,
      'no-label': !hasLabel,
      'has-focus': bfocused,
      'has-value': hasValue,
    }"
  >
    <div
      class="gv-inline"
      :class="{
        'has-leading': hasLeading,
        'has-trailing': hasTrailing,
      }"
    >
      <div class="gv-leading" v-if="hasLeading">
        <slot name="leading" />
      </div>
      <div class="gv-trailing" v-if="hasTrailing">
        <slot name="trailing" />
      </div>
      <textarea
        ref="element"
        class="gv-element"
        v-model="input"
        v-bind="$attrs"
        v-on="listeners"
        :class="staticClass"
        autocorrect="off"
        autocomplete="off"
        spellcheck="false"
        @blur="onBlur"
        @focus="onFocus"
        v-if="multiline"
      />
      <div
        ref="element"
        tabindex="0"
        class="gv-element"
        v-on="listeners"
        :class="staticClass"
        @blur="onBlur"
        @focus="onFocus"
        v-else-if="embed"
      >
        {{ input }}
      </div>
      <input
        class="gv-element"
        ref="element"
        v-model="input"
        v-bind="$attrs"
        v-on="listeners"
        :class="staticClass"
        autocorrect="off"
        autocomplete="off"
        spellcheck="false"
        @blur="onBlur"
        @focus="onFocus"
        v-else
      />
      <label :for="$attrs.id" class="gv-label" v-if="hasLabel && !outline">
        {{ label }}
      </label>
      <div class="gv-line" v-if="!outline"></div>
      <div class="gv-outline" v-else>
        <div class="gv-leading"></div>
        <div class="gv-notch" v-if="hasLabel">
          <label :for="$attrs.id" class="gv-label">{{ label }}</label>
        </div>
        <div class="gv-trailing"></div>
      </div>
      <slot name="embed" />
      <input
        ref="hidden"
        type="hidden"
        :value="input"
        v-if="embed"
        v-bind="$attrs"
      />
    </div>
    <div class="gv-helper" :class="{ persistent: placeholder }">
      <div
        class="gv-text"
        :class="{ active: validationMessage }"
        v-if="hasText"
      >
        {{ helperText }}
      </div>
      <div class="gv-counter" v-if="hasCounter">
        {{ this.length }} / {{ this.maxLength }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-input",
  inheritAttrs: false,
  props: {
    value: null,
    label: String,
    embed: Boolean,
    error: Boolean,
    outline: Boolean,
    required: Boolean,
    disabled: Boolean,
    multiline: Boolean,
    placeholder: String,
    maxLength: [Number, String],
  },
  data() {
    return {
      bfocused: false,
      staticClass: [],
      input: this.value,
      berror: this.error,
      validationMessage: null,
    };
  },
  created() {
    this.staticClass = this.$vnode.data.staticClass;
    delete this.$vnode.data.staticClass;
  },
  computed: {
    element() {
      return this.$refs.element;
    },
    hidden() {
      return this.$refs.hidden;
    },
    hasValue() {
      const boolean = this.$utils.boolean;
      return Array.isArray(this.input)
        ? !boolean.isArrayEmpty(this.input)
        : boolean.isNumber(this.input) || boolean.hasValue(this.input);
    },
    hasLeading() {
      return !!this.$slots.leading;
    },
    hasTrailing() {
      return !!this.$slots.trailing;
    },
    hasLabel() {
      return this.label;
    },
    hasText() {
      return this.helperText;
    },
    hasCounter() {
      return this.maxLength;
    },
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
    length() {
      return this.input?.length ?? 0;
    },
    helperText() {
      return this.validationMessage ?? this.placeholder;
    },
  },
  methods: {
    focus: function () {
      this.element.focus();
    },
    blur: function () {
      this.element.blur();
    },
    setState: function (state, message) {
      this.berror = state;
      this.validationMessage = message;
    },
    validate: function () {
      if (this.maxLength !== null && this.length >= this.maxLength) {
        this.input = this.input.substring(0, this.maxLength);
      }
    },
    onInput: function () {
      this.validate();
      this.$emit("input", this.input);
      if (this.embed) {
        this.$nextTick(() => {
          this.$utils.node.trigger(this.hidden, "input", true);
        });
      }
    },
    onBlur: function (event) {
      this.bfocused = false;
      this.$emit("onblur", event);
      if (this.embed) {
        this.$utils.node.trigger(this.hidden, "blur", true);
      }
    },
    onFocus(event) {
      this.bfocused = true;
      this.$emit("onfocus", event);
    },
  },
  watch: {
    value(val) {
      this.input = val;
      this.onInput();
    },
    error(val) {
      this.berror = val;
    },
  },
};
</script>
