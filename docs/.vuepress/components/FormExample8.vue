<template>
  <gv-row>
    <gv-col>
      <gv-form-group label="Lorem ipsum dolor sit amet">
        <gv-switch sm />
        <gv-switch v-model="one" />
        <gv-switch v-model="two">
          <template #circle>
            <gv-icon value="theme-light-dark" />
          </template>
        </gv-switch>
        <gv-switch v-model="three" bg="yellow" color="black">
          <template #on>
            on
          </template>
          <template #off>
            off
          </template>
        </gv-switch>
      </gv-form-group>
      <gv-form-group label="Lorem ipsum dolor sit amet">
        <gv-switch disabled />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      one: false,
      two: true,
      three: false
    };
  }
};
</script>
