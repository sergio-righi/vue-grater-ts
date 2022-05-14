<template>
  <gv-stepper ref="stepper" @onmove="moveCallback">
    <gv-step v-for="item in steps" :key="item.id" v-bind="item">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
        consequat odio. Suspendisse sit amet nibh id nibh vestibulum facilisis.
        Ut at purus tempus, pellentesque orci at, tincidunt lacus. Duis rhoncus
        quis neque a dignissim.
      </p>
    </gv-step>
  </gv-stepper>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { header: "Basic details" },
        { header: "Company details" },
        { header: "Subscription plan" },
        { header: "Payment details" }
      ]
    };
  },
  computed: {
    stepper() {
      return this.$refs.stepper;
    }
  },
  methods: {
    moveCallback(elms, index, next) {
      if (index === 2) elms[index].set(true);
    }
  }
};
</script>
