<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const ButtonProps = Vue.extend({
  props: {
    name: String,
  },
});

@Component({ name: "gv-button" })
export default class Button extends ButtonProps {
  get message(): string {
    return "hu3";
  }
}
</script>
