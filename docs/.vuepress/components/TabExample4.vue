<template>
  <gv-card>
    <template #content>
      <gv-tab :tab="12" bg="brown" color="white" stretch embed>
        <template #content>
          <gv-tab-item
            v-for="tab in tabs"
            :key="tab.id"
            :header="tab.name"
            :disabled="tab.disabled"
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

<script>
export default {
  data() {
    return {
      tabs: [
        { name: "English", disabled: false },
        { name: "German", disabled: false },
        { name: "Italian", disabled: true },
        { name: "Korean", disabled: false },
        { name: "Spanish", disabled: false }
      ]
    };
  }
};
</script>
