<template>
  <div class="gv-pick" :class="{loading: isLoading}">
    <div class="gv-content">
      <div v-if="hasValue" class="gv-wrap">
        <div class="gv-list">
          <div
            class="gv-item"
            @click="onClick(true)"
            :class="{'animate-dismiss': elms.right.animated}"
          >
            <gv-image
              v-if="'src' in itemL"
              :src="itemL.src"
              @onerror="swipeSkip"
            >
              <gv-inset v-if="'name' in itemL" lg overlay>
                {{ itemL.name }}
              </gv-inset>
            </gv-image>
            <div
              class="gv-choice"
              :class="{
                yep: elms.left.choice === true,
                nope: elms.left.choice === false,
              }"
            ></div>
          </div>
        </div>
        <div class="gv-list">
          <div
            :class="{'animate-dismiss': elms.left.animated}"
            class="gv-item"
            @click="onClick(false)"
          >
            <gv-image
              v-if="'src' in itemR"
              :src="itemR.src"
              @onerror="swipeSkip"
            >
              <gv-inset v-if="'name' in itemR" lg overlay>
                {{ itemR.name }}
              </gv-inset>
            </gv-image>
            <div
              class="gv-choice"
              :class="{
                yep: elms.right.choice === true,
                nope: elms.right.choice === false,
              }"
            ></div>
          </div>
        </div>
      </div>
      <div v-else class="gv-process">
        <gv-progress-circle indeterminate :size="80" />
      </div>
    </div>
    <div v-if="!isLoading" class="gv-footer">
      <gv-icon value="arrow-left" @onclick="swipeLeft" />
      <gv-icon v-if="shuffle" value="shuffle" @onclick="swipeSkip" />
      <gv-icon value="arrow-right" @onclick="swipeRight" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'gv-pick',
  props: {
    shown: {
      default: 5,
      type: Number,
    },
    items: Array,
    shuffle: {
      default: true,
      type: Boolean,
    },
    contest: Boolean,
  },
  data() {
    return {
      itemL: {},
      itemR: {},
      indexL: -1,
      indexR: -1,
      loading: false,
      elms: {
        left: {animated: false, choice: null},
        right: {animated: false, choice: null},
      },
    };
  },
  computed: {
    isLoading() {
      return this.loading || this.indexL < 0 || this.indexR < 0;
    },
    hasValue() {
      return this.items.length > 1 && this.itemL !== {} && this.itemR !== {};
    },
  },
  created() {
    this.sort();
  },
  methods: {
    sort: async function () {
      const length = this.items.length;

      this.indexL = -1;
      this.indexR = -1;

      if (length > 1) {
        this.indexL = this.random(length);
        this.indexR = this.random(length, this.indexL);
      }
    },
    move: function (direction) {
      if (direction) {
        this.elms.left.choice = true;
        this.elms.right.choice = false;

        this.$emit('onpick', this.itemL);
      } else {
        this.elms.left.choice = false;
        this.elms.right.choice = true;

        this.$emit('onpick', this.itemR);
      }

      setTimeout(() => {
        this.elms.left.animated = true;
        this.elms.right.animated = true;

        this.loading = true;

        setTimeout(async () => {
          this.elms.left.choice = null;
          this.elms.right.choice = null;

          if (this.contest) {
            this.items.splice(this.indexL, 1);
            this.items.splice(this.indexR, 1);
          }

          this.sort().then(() => {
            this.loading = false;
            this.elms.left.animated = false;
            this.elms.right.animated = false;
          });
        }, 300);
      }, 200);
    },
    random: function (max, not = -1) {
      const value = Math.max(0, Math.floor(Math.random() * max));
      return value === not ? this.random(max, not) : value;
    },
    swipeLeft: function () {
      this.move(true);
    },
    swipeSkip: function () {
      this.loading = true;
      this.sort().then(() => (this.loading = false));
    },
    swipeRight: function () {
      this.move(false);
    },
    onClick: function (direction) {
      this.move(direction);
    },
  },
  watch: {
    items() {
      this.items.length === 0 ? this.sort() : null;
    },
    indexL(val) {
      this.itemL = val >= 0 ? {...this.items[val]} : {};
    },
    indexR(val) {
      this.itemR = val >= 0 ? {...this.items[val]} : {};
    },
  },
};
</script>