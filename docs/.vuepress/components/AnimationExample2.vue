<template>
  <gv-row>
    <gv-col>
    <gv-animation :name="item" v-for="item in animations" :key="item.id">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
        amet lacus nec sem cursus viverra ut et odio.
      </p>
    </gv-animation>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      animations: [
        "fade-in",
        "fade-in-up",
        "fade-in-down",
        "fade-in-left",
        "fade-in-right"
      ]
    };
  }
};
</script>
