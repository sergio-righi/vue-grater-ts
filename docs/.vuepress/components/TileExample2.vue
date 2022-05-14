<template>
  <gv-card border="gray">
    <template #content>
      <gv-tile>
        <template #content>
          <gv-tile-header>Lorem ipsum dolor sit amet</gv-tile-header>
          <gv-tile-header sub>Lorem ipsum dolor sit amet</gv-tile-header>
        </template>
        <template #trailing>
          <gv-icon value="phone" />
        </template>
      </gv-tile>
      <gv-tile>
        <template #content>
          <gv-tile-header sub>Lorem ipsum dolor sit amet</gv-tile-header>
        </template>
        <template #trailing>
          <gv-emoji value="swimming" />
        </template>
      </gv-tile>
      <gv-tile>
        <template #content>
          <gv-tile-header sm sub>
            Lorem ipsum dolor sit amet
          </gv-tile-header>
          <gv-tile-header>Lorem ipsum dolor sit amet</gv-tile-header>
        </template>
        <template #trailing>
          <gv-emoji value="malaysia" />
        </template>
      </gv-tile>
    </template>
  </gv-card>
</template>
