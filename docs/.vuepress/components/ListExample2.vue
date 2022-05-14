<template>
  <gv-list :items="items" ol />
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        {
          "Lorem ipsum dolor sit amet": [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            { "Lorem ipsum dolor sit amet": ["Lorem ipsum dolor sit amet"] },
            "Lorem ipsum dolor sit amet"
          ]
        },
        "Lorem ipsum dolor sit amet",
        {
          "Lorem ipsum dolor sit amet": [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
          ]
        }
      ]
    };
  }
};
</script>
