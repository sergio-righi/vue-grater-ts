<template>
  <gv-row>
    <gv-col>
      <gv-alert loop dismissible>
        <gv-alert-item
          v-for="item in ['success', 'warning', 'error', 'info']"
          :key="item.id"
          v-bind="{ [item]: true }"
          href="#"
        >
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </template>
        </gv-alert-item>
      </gv-alert>
    </gv-col>
  </gv-row>
</template>
