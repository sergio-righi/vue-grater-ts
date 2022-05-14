<template>
  <gv-row>
    <gv-col>
      <gv-chip outline>
        <template #leading>
          <gv-icon value="bike" />
        </template>
        <template #content>
          Lorem ipsum dolor sit amet
        </template>
      </gv-chip>
      <gv-chip outline>
        <template #leading>
          <gv-image src="/img/user_f.png" />
        </template>
        <template #content>
          Lorem ipsum dolor sit amet
        </template>
      </gv-chip>
      <gv-chip bg="teal" color="white" round>
        <template #leading>
          <gv-icon value="map-marker" />
        </template>
        <template #content>
          Lorem ipsum dolor sit amet
        </template>
      </gv-chip>
      <gv-chip>
        <template #leading>
          <gv-avatar>SR</gv-avatar>
        </template>
        <template #content>
          Lorem ipsum dolor sit amet
        </template>
      </gv-chip>
    </gv-col>
  </gv-row>
</template>
