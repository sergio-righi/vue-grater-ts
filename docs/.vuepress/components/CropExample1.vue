<template>
  <gv-row>
    <gv-col>
      <gv-row>
        <gv-col>
          <gv-crop ref="crop" src="/img/portrait/img_3.jpg" @oncrop="onCrop" />
        </gv-col>
      </gv-row>
      <gv-row>
        <gv-col>
          <gv-space y top>
            <gv-input id="canvas" label="Canvas" readonly v-model="canvas">
              <template #trailing>
                <gv-button @onclick.prevent="crop" primary sm>
                  <gv-icon value="crop" />
                </gv-button>
                <gv-button @onclick.prevent="download" primary sm>
                  <gv-icon value="download" />
                </gv-button>
                <gv-button primary sm v-clipboard.value.target="'#canvas'">
                  <gv-icon value="clipboard" />
                </gv-button>
              </template>
            </gv-input>
          </gv-space>
        </gv-col>
      </gv-row>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      canvas: null
    };
  },
  methods: {
    onCrop: function(val) {
      this.canvas = val;
    },
    download: function() {
      this.$refs.crop.download();
    },
    crop: function() {
      this.$refs.crop.crop();
    }
  }
};
</script>
