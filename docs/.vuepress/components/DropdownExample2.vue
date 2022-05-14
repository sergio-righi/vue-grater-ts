<template>
  <gv-dropdown left>
    <template #trigger>
      <gv-button>
        <gv-icon value="dots-vertical" />
      </gv-button>
    </template>
    <template #content>
      <gv-dropdown-item>Action</gv-dropdown-item>
      <gv-dropdown-item href="#">Agree</gv-dropdown-item>
      <gv-dropdown-item href="#">Refuse</gv-dropdown-item>
      <gv-dropdown-item>Indeterminate</gv-dropdown-item>
    </template>
  </gv-dropdown>
</template>
