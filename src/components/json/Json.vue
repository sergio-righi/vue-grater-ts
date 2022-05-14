<template>
  <div class="gv-json">
    <div class="gv-content" :key="componentKey">
      <gv-json-item
        v-for="(key, index) in keys"
        :key="key"
        :prop="key"
        :index="index"
        :readonly="readonly"
        :value="value[key]"
        :keys="getKeys(key)"
      />
    </div>
    <div v-if="!readonly" class="gv-footer">
      <gv-button primary @onclick="addKey">
        <gv-icon value="plus" />
      </gv-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "gv-json",
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    readonly: Boolean
  },
  data() {
    return {
      keys: [],
      componentKey: -1
    };
  },
  created() {
    this.keys = Object.keys(this.value);
  },
  methods: {
    getKeys: function(key) {
      const keys = Object.keys(this.value);
      keys.splice(keys.indexOf(key), 1);
      return keys;
    },
    deleteKey: function(index) {
      const key = this.keys[index];
      if (key in this.value) {
        delete this.value[key];
        this.keys.splice(index, 1);
        this.onInput();
      }
    },
    deleteValue: function(key, i) {
      if (key in this.value) {
        this.value[key].splice(i, 1);
      }
    },
    updateKey: function(okey, nkey) {
      if (okey === nkey) return;
      if (okey in this.value) {
        const vold = this.value[okey];
        delete this.value[okey];
        this.value[nkey] = vold;
        const index = this.keys.indexOf(okey);
        this.keys[index] = nkey;
      }
      this.onInput();
    },
    updateValue: function(key, val, index) {
      if (key in this.value) {
        if (index !== -1) {
          this.value[key][index] = val;
        } else {
          this.value[key] = val;
        }
        this.onInput();
      }
    },
    addKey: function() {
      const key = new Date().getTime().toString();
      if (!(key in this.value)) {
        this.keys.push(key);
        this.value[key] = "";
        this.onInput();
      }
    },
    addValue: function(key) {
      this.value[key].push("");
      this.onInput();
      this.componentKey++;
    },
    onInput: function() {
      this.$emit("input", { ...this.value });
    }
  }
};
</script>
