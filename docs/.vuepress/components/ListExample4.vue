<template>
  <gv-list :items="items" tree />
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Lorem ipsum dolor sit amet",
        { text: "Lorem ipsum dolor sit amet", href: "#" },
        {
          "Lorem ipsum dolor sit amet": [
            "Lorem ipsum dolor sit amet",
            { text: "Lorem ipsum dolor sit amet", href: "#", target: "_self" },
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
