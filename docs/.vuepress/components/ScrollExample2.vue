<template>
  <gv-row>
    <gv-col>
      <gv-scroll>
        <template #content>
          <gv-chip v-for="i in 3" :key="i">
            <template #content>
              Lorem ipsum dolor sit amet
            </template>
          </gv-chip>
        </template>
      </gv-scroll>
    </gv-col>
  </gv-row>
</template>
