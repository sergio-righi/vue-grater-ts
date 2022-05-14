<template>
  <gv-row>
    <gv-col>
      <gv-alert dismissible>
        <gv-alert-item bg="deep-orange" color="white">
          <template #leading>
            <gv-avatar sm>
              <gv-image src="/img/user_f.png" />
            </gv-avatar>
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </template>
          <template #trailing>
            <gv-emoji value="victory" size="24px" />
          </template>
        </gv-alert-item>
      </gv-alert>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  methods: {
    clickCallback() {
      // do something
    }
  }
};
</script>
