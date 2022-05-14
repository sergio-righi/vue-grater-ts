<template>
  <gv-row>
    <gv-col :sm="6">
      <gv-card bg="deep-orange" color="white" border="deep-orange-400">
        <template #header>
          <gv-tile>
            <template #content>
              <gv-tile-header>Lorem ipsum dolor sit amet</gv-tile-header>
            </template>
          </gv-tile>
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            consequat odio. Suspendisse sit amet nibh id nibh vestibulum
            facilisis. Ut at purus tempus, pellentesque orci at, tincidunt
            lacus. Duis rhoncus quis neque a dignissim.
          </p>
          <gv-divider />
        </template>
        <template #footer>
          <gv-link href="#">Details</gv-link>
          <gv-icon value="help-circle" class="ml-auto" />
        </template>
      </gv-card>
    </gv-col>

    <gv-col :sm="6">
      <gv-card bg="deep-purple" color="white" border="deep-purple-400">
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            consequat odio. Suspendisse sit amet nibh id nibh vestibulum
            facilisis. Ut at purus tempus, pellentesque orci at, tincidunt
            lacus.
          </p>
          <gv-divider />
        </template>
        <template #footer>
          <small>
            {{ new Date().toLocaleDateString("en-CA") }}
          </small>
          <gv-chip class="ml-auto" bg="deep-purple-400" color="white" sm>
            <template #content>
              Lorem ipsum dolor
            </template>
          </gv-chip>
        </template>
      </gv-card>
      <gv-card bg="indigo" color="white" border="indigo-400">
        <template #content>
          <gv-tile>
            <template #content>
              <gv-tile-header sub> Lorem ipsum dolor sit amet </gv-tile-header>
              <gv-tile-header>1.75M</gv-tile-header>
            </template>
            <template #trailing>
              <gv-icon value="account" />
            </template>
          </gv-tile>
        </template>
      </gv-card>
    </gv-col>
  </gv-row>
</template>
