<template>
  <gv-card>
    <template #content>
      <gv-tab :tab="1" bg="deep-purple" color="white" embed>
        <template #content>
          <gv-tab-item
            v-for="item in 15"
            :key="item.id"
            :header="`Tab ${item}`"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              risus massa. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Quisque porta condimentum
              vestibulum. Aenean vulputate in velit sit amet dignissim.
              Suspendisse fermentum suscipit arcu sit amet rutrum. Integer
              dictum ultrices erat sed vulputate.
            </p>
          </gv-tab-item>
        </template>
      </gv-tab>
    </template>
  </gv-card>
</template>
