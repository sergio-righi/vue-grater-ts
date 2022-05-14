<template>
  <gv-stepper number inline :step="3">
    <gv-step v-for="item in steps" :key="item.id" v-bind="item" />
  </gv-stepper>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { success: true, header: "Basic details" },
        { success: true, header: "Company details" },
        { header: "Subscription plan" },
        { header: "Payment details" }
      ]
    };
  }
};
</script>
