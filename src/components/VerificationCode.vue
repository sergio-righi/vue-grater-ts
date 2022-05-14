<template>
  <div class="gv-verification-code">
    <input
      v-for="(item, index) in Number(length)"
      :key="index"
      ref="elements"
      v-model="code[index]"
      @focus="onFocus"
      @input="onInput($event, index)"
      @keydown="onKeydown($event, index)"
      autocomplete="off"
      :autofocus="autofocus && index === 0"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: "gv-verification-code",
  props: {
    required: Boolean,
    autofocus: Boolean,
    value: [Number, String],
    length: {
      default: 6,
      type: [Number, String],
      validation: (value) => value > 0,
    },
  },
  data() {
    return {
      code: [],
    };
  },
  computed: {
    isDone() {
      return (
        this.code.filter((x) => /\S/.test(x)).join("").length ===
        Number(this.length)
      );
    },
    elements() {
      return this.$refs.elements;
    },
  },
  created() {
    this.set(this.value);
  },
  methods: {
    onInput: function (event, index) {
      const [first, ...rest] = event.target.value;

      this.code[index] = first ?? "";

      if (first) {
        if (index === this.length - 1) {
          if (this.isDone) {
            this.elements[index].blur();
            this.$emit("ondone", this.code.join(""));
          }
        } else {
          const element = this.elements[index + 1];
          element.focus();
          element.value = rest.join("");
          element.dispatchEvent(new Event("input"));
        }
      }
    },
    onKeydown: function (event, index) {
      const keycode = this.$utils.keycode;
      if (event.keyCode === keycode.backspace && event.target.value === "") {
        this.elements[Math.max(0, index - 1)].focus();
      }
    },
    onFocus: function (event) {
      event.target.select();
    },
    set: function (val) {
      this.code = val
        ? String(val).slice(0, this.length).split("")
        : Array.from({ length: Number(this.length) }, () => "");
    },
  },
  watch: {
    value(val) {
      this.set(val);
    },
  },
};
</script>
