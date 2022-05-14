<template>
  <gv-row>
    <gv-col>
      <gv-button primary v-click-outside="clickCallback" @oninside="oppositeCallback">
        Click inside {{ inside }} and outside {{ outside }}
      </gv-button>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      inside: 0,
      outside: 0
    };
  },
  methods: {
    clickCallback() {
      ++this.outside;
    },
    oppositeCallback() {
      ++this.inside;
    }
  }
};
</script>
