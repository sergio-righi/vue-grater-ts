<template>
  <gv-row>
    <gv-col>
      <gv-alert
        v-for="item in ['success', 'warning', 'error', 'info']"
        :key="item.id"
      >
        <gv-alert-item v-bind="{ [item]: true }">
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </template>
        </gv-alert-item>
      </gv-alert>
    </gv-col>
  </gv-row>
</template>
