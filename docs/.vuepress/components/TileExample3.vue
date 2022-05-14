<template>
  <gv-card border="gray">
    <template #content>
      <gv-tile header>
        <template #content>
          <gv-tile-header sub>Lorem ipsum dolor sit amet</gv-tile-header>
        </template>
      </gv-tile>
      <gv-tile>
        <template #content>
          <gv-tile-header>Lorem ipsum dolor sit amet</gv-tile-header>
          <gv-tile-header sub>Lorem ipsum dolor sit amet</gv-tile-header>
        </template>
        <template #leading>
          <gv-input-box :val="1" checked />
        </template>
        <template #trailing>
          <gv-icon value="information" />
          <gv-icon value="briefcase" />
        </template>
      </gv-tile>
      <gv-tile>
        <template #leading>
          <gv-emoji value="surfing" />
        </template>
        <template #content>
          <gv-tile-header sub>Lorem ipsum dolor sit amet</gv-tile-header>
        </template>
        <template #trailing>
          <gv-icon value="heart" color="red" />
        </template>
      </gv-tile>
      <gv-tile>
        <template #leading>
          <gv-emoji value="hong_kong" />
        </template>
        <template #content>
          <gv-tile-header sub>Lorem ipsum dolor sit amet</gv-tile-header>
          <gv-tile-header>Lorem ipsum dolor sit amet</gv-tile-header>
        </template>
        <template #trailing>
          <gv-switch :val="2" sm />
        </template>
      </gv-tile>
      <gv-tile disabled>
        <template #leading>
          <gv-avatar>SR</gv-avatar>
        </template>
        <template #content>
          <gv-tile-header>Lorem ipsum dolor sit amet</gv-tile-header>
          <gv-tile-header sub>Lorem ipsum dolor sit amet</gv-tile-header>
        </template>
        <template #trailing>
          <gv-input-box :val="3" />
        </template>
      </gv-tile>
    </template>
  </gv-card>
</template>

<script>
export default {};
</script>
