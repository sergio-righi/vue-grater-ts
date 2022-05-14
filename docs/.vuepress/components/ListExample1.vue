<template>
  <gv-list :items="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        {
          "Lorem ipsum dolor sit amet": [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            { "Lorem ipsum dolor sit amet": ["Lorem ipsum dolor sit amet"] }
          ]
        },
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
      ]
    };
  }
};
</script>
