<template>
  <gv-row>
    <gv-col>
      <gv-card>
        <template #content>
          <gv-scroll vertical height="200px">
            <template #content>
              <gv-tile v-for="i in 5" :key="i" condensed>
                <template #leading>
                  <gv-avatar sm>{{
                    ["B", "D", "F", "H", "I", "K"][i]
                  }}</gv-avatar>
                </template>
                <template #content>
                  <gv-tile-header sm>
                    Nulla eget consequat odio
                  </gv-tile-header>
                  <gv-tile-header sub>
                    Duis rhoncus quis neque a dignissim
                  </gv-tile-header>
                </template>
              </gv-tile>
            </template>
          </gv-scroll>
        </template>
      </gv-card>
    </gv-col>
  </gv-row>
</template>
