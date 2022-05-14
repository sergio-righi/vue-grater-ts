<template>
  <div>
    <gv-verification-code @ondone="onDone" />
  </div>
</template>

<script>
export default {
  methods: {
    onDone: function(val) {
      console.log(val);
    }
  }
};
</script>
