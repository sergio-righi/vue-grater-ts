<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-countdown :value="seconds" @ontimeup="timeupCallback" />
      </gv-flexbox>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      seconds: 15
    };
  },
  methods: {
    timeupCallback() {
      console.log("callback");
    }
  }
};
</script>
