<template>
  <span
    class="gv-emoji"
    v-html="emoji.emoji"
    :title="emoji.name"
    :style="style"
    v-if="emoji"
  ></span>
</template>

<script>
import Activity from "emoji/activity.json";
import AnimalNature from "emoji/animal-nature.json";
import FacePeople from "emoji/face-people.json";
import FoodDrink from "emoji/food-drink.json";
import Flag from "emoji/flag.json";
import Object from "emoji/object.json";
import TravelPlace from "emoji/travel-place.json";
import Symbol from "emoji/symbol.json";

export default {
  name: "gv-emoji",
  props: {
    value: {
      type: String,
      required: true,
    },
    size: String,
  },
  data() {
    return {
      data: [
        ...Activity,
        ...AnimalNature,
        ...FacePeople,
        ...Flag,
        ...FoodDrink,
        ...Object,
        ...TravelPlace,
        ...Symbol,
      ],
    };
  },
  computed: {
    emoji() {
      if (this.value === undefined) return null;
      const item = this.data.find((item) => item.shortname === this.value);
      return item || null;
    },
    style() {
      return this.size ? { "font-size": this.size } : null;
    },
  },
};
</script>
