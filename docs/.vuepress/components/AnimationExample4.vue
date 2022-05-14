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
        "slide-in-up",
        "slide-in-down",
        "slide-in-left",
        "slide-in-right",
        "slide-out-up",
        "slide-out-down"
      ]
    };
  }
};
</script>
