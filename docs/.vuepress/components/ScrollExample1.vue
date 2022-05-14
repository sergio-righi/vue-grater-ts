<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-button v-scroll.top="'.sidebar'">Top</gv-button>
        <gv-button
          v-scroll="'.sidebar li:nth-child(20)'"
          @onreach="reachCallback"
        >
          Element
        </gv-button>
        <gv-button v-scroll.bottom="'.sidebar'">Bottom</gv-button>
      </gv-flexbox>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  methods: {
    reachCallback(originalElement, targetElement) {
      // do something
    }
  }
};
</script>
