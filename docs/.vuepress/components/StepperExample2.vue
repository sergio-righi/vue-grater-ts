<template>
  <gv-stepper ref="stepper" @onprev="prevCallback" @onnext="nextCallback" locked>
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
        { icon: "account-details", header: "Basic details", note: "Step 1" },
        {
          icon: "office-building-outline",
          header: "Company details",
          note: "Step 2"
        },
        {
          icon: "notebook-multiple",
          header: "Subscription plan",
          note: "Step 3"
        },
        { icon: "cash", header: "Payment details", note: "Step 4" }
      ]
    };
  },
  computed: {
    stepper() {
      return this.$refs.stepper;
    }
  },
  methods: {
    prevCallback(elm, index) {
      if (index === 2) elm.set(false);
    },
    nextCallback(elm, index) {
      if (index === 2) elm.set(true);
    }
  }
};
</script>
