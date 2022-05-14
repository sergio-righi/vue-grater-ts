<template>
  <gv-dropdown>
    <template #trigger>
      <gv-button>
        <gv-icon value="dots-vertical" />
      </gv-button>
    </template>
    <template #content>
      <gv-dropdown-item header>Header</gv-dropdown-item>
      <gv-dropdown-item>Option</gv-dropdown-item>
      <gv-dropdown-item href="#">Calendar</gv-dropdown-item>
      <gv-dropdown-item href="#">Clock</gv-dropdown-item>
      <gv-dropdown-item>Other</gv-dropdown-item>
    </template>
  </gv-dropdown>
</template>
