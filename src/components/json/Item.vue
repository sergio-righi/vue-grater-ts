<template>
  <div class="gv-item">
    <div class="gv-key">
      <gv-input
        v-if="!readonly"
        :class="{ error: hasError }"
        :value="k"
        required
        tabindex="0"
        @input="preventKey"
        @onblur="updateKey($event)"
      >
        <template #trailing>
          <gv-button error @onclick="deleteKey" sm tabindex="-1">
            <gv-icon value="close" />
          </gv-button>
        </template>
      </gv-input>
      <span v-else>{{ k }}</span>
    </div>
    <div v-if="isArray" class="gv-value">
      <div v-for="(item, index) in v" :key="item.id" class="gv-array">
        <gv-input
          :value="item"
          tabindex="0"
          v-if="!readonly"
          @onblur="updateValue($event.target.value, index)"
        >
          <template #trailing>
            <gv-button
              v-if="v.length > 1"
              primary
              tabindex="-1"
              @onclick="deleteValue(index)"
              sm
            >
              <gv-icon value="close" />
            </gv-button>
          </template>
        </gv-input>
        <span v-else>{{ item }}</span>
      </div>
      <gv-button v-if="!readonly" info @onclick="addValue">
        {{ toCapitalize(k) }} <gv-icon value="plus" />
      </gv-button>
    </div>
    <div v-else class="gv-value">
      <gv-input
        tabindex="0"
        v-if="isEditable"
        :value="v"
        @onblur="updateValue($event.target.value)"
      />
      <span v-else>{{ v }}</span>
    </div>
    <div class="gv-type">
      <gv-select
        tabindex="0"
        v-if="!readonly"
        :items="types"
        :value="type"
        @input="updateType"
        required
      />
      <span v-else>{{ stype }}</span>
    </div>
  </div>
</template>

<script>
export const Type = {
  string: { value: 1, text: "String" },
  array: { value: 2, text: "Array" },
  null: { value: 3, text: "Null" },
  number: { value: 4, text: "Number" },
};
export default {
  name: "gv-json-item",
  props: {
    prop: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Array, Number],
      default: "",
    },
    index: Number,
    keys: {
      type: [Array],
      default: () => [],
    },
    readonly: Boolean,
  },
  data() {
    return {
      k: this.prop,
      o: this.prop,
      v: this.value,
      hasError: false,
      items: this.keys,
    };
  },
  computed: {
    isNull() {
      return this.v === null;
    },
    isArray() {
      return Array.isArray(this.v);
    },
    isString() {
      return typeof this.v === "string";
    },
    isNumber() {
      return !isNaN(this.v) && !isNaN(parseFloat(this.v, 10));
    },
    isEditable() {
      return !this.readonly && this.type !== Type.null.value;
    },
    isValidNumber() {
      return this.isString ? false : this.isNumber;
    },
    type() {
      if (this.isNull) return Type.null.value;
      else if (this.isArray) return Type.array.value;
      else if (this.isNumber) return Type.number.value;
      else return Type.string.value;
    },
    types() {
      return Object.values(Type).map((item) => item);
    },
    stype() {
      return (
        Object.values(Type).find((item) => item.value === this.type)?.text ??
        null
      );
    },
  },
  watch: {
    keys(val) {
      this.items = val;
    },
    value(val) {
      this.v = val;
    },
  },
  methods: {
    preventKey: function (value) {
      this.hasError = this.items.includes(value);
      this.k = value.replace(/\s/g, "").toLowerCase();
    },
    addValue: function () {
      this.$parent.addValue(this.k);
    },
    updateKey: function (event) {
      if (!this.hasError) {
        const key = event.target.value;
        this.$parent.updateKey(this.o, key, this.v);
        this.k = key;
        this.o = key;
      } else {
        event.target.focus();
      }
    },
    updateValue: function (value, index) {
      this.$parent.updateValue(this.k, value, index ?? -1);
    },
    updateType: function (value) {
      this.v = this.toType(value);
      this.updateValue(this.v);
    },
    deleteValue: function (index) {
      this.$parent.deleteValue(this.k, index);
    },
    deleteKey: function () {
      this.$parent.deleteKey(this.index);
    },
    toType: function (type) {
      this.v = this.isNull || !this.v ? "" : this.v;
      switch (type) {
        case Type.array.value:
          return this.isArray ? this.v : this.v.split(",");
        case Type.string.value:
          return this.isArray
            ? [...this.v].filter(Boolean).join(", ")
            : this.v.toString();
        case Type.number.value:
        case this.isValidNumber:
          return Number(this.v);
        case Type.null.value:
          return null;
      }
    },
    toCapitalize: function (value) {
      if (!value) return;
      return this.$utils.string.toCapitalize(value.split("_").join(" "));
    },
  },
};
</script>
