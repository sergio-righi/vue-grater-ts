<template>
  <gv-row>
    <gv-col>
      <gv-button @onclick="clickCallback">Show</gv-button>
      <gv-modal ref="modal" embed>
        <template #content>
          <gv-embed
            src="https://www.youtube.com/embed/H0Z7ewOXCKw?rel=0?enablejsapi=1&version=3&playerapiid=ytplayer"
            widescreen
          />
        </template>
      </gv-modal>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  methods: {
    clickCallback() {
      this.$refs.modal.open();
    }
  }
};
</script>
