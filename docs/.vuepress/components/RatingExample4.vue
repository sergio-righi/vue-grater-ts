<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-rating v-model="input" icon="heart" color="pink" decimal />
        <gv-emoji :value="emoji" />
      </gv-flexbox>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      input: 2.5,
      scale: {
        5: "hearteye",
        4.5: "beaming",
        4: "biggrinning",
        3.5: "grinning",
        3: "slightly",
        2.5: "neutral",
        2: "slightlyfrowning",
        1.5: "frowning",
        1: "pleading",
        0.5: "crying",
        0: "loudlycrying"
      }
    };
  },
  computed: {
    emoji() {
      return this.scale[this.input];
    }
  }
};
</script>
