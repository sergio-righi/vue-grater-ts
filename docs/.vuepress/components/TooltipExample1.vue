<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-button v-tooltip.right="message">Right</gv-button>
        <gv-button v-tooltip.top="message">Top</gv-button>
        <gv-button v-tooltip.bottom="message">Bottom</gv-button>
        <gv-button v-tooltip.left="message">Left</gv-button>
      </gv-flexbox>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      message: "Lorem ipsum dolor sit amet"
    };
  }
};
</script>
