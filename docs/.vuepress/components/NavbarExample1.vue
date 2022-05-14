<template>
  <gv-navbar bg="teal" color="white">
    <template #brand>
      <gv-link href="#">Brand</gv-link>
    </template>
    <template #menu>
      <gv-navbar-item href="#">Products</gv-navbar-item>
      <gv-navbar-item href="#">People</gv-navbar-item>
      <gv-navbar-item href="#">Sales</gv-navbar-item>
    </template>
    <template #control>
      <gv-navbar-item>
        <gv-dropdown left>
          <template #trigger>
            <gv-image src="/img/user_m.png" circle />
          </template>
          <template #content>
            <gv-dropdown-item href="#">English</gv-dropdown-item>
            <gv-dropdown-item @onclick="clickCallback">French</gv-dropdown-item>
          </template>
        </gv-dropdown>
      </gv-navbar-item>
    </template>
  </gv-navbar>
</template>

<script>
export default {
  methods: {
    clickCallback() {
      console.log("click callback");
    }
  }
};
</script>
