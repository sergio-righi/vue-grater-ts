<template>
  <gv-card>
    <template #content>
      <gv-tab :tab="1" bg="teal" color="white" upsidedown embed>
        <template #content>
          <gv-tab-item
            v-for="(tab, index) in tabs"
            :key="tab.id"
            :icon="tab.icon"
            :header="`Tab ${index + 1}`"
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
        { icon: "star", disabled: false },
        { icon: "clock", disabled: false },
        { icon: "account-multiple", disabled: false },
        { icon: "dialpad", disabled: false },
        { name: "Lorem ipsum dolor", icon: "voicemail", disabled: false }
      ]
    };
  }
};
</script>
