<template>
  <gv-row>
    <gv-col>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
        dignissim justo, id eleifend massa.
        <span
          v-viewport.self
          @onvisible="visibleCallback"
          @onhidden="hiddenCallback"
          >Curabitur tellus tortor, ornare a metus bibendum, dictum dignissim
          ante.</span
        >
        Donec sollicitudin condimentum nisl, sit amet rutrum justo aliquam in.
      </p>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  methods: {
    visibleCallback(elm) {
      elm.classList.add("bg-gray-100");
    },
    hiddenCallback(elm) {
      elm.classList.remove("bg-gray-100");
    }
  }
};
</script>
