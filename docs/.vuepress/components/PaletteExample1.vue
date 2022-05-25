<template>
  <gv-row>
    <gv-col>
      <ClientOnly>
        <gv-booth>
          <gv-card v-for="color in colors" :key="color.id">
            <template #content>
              <gv-tile
                :id="shade"
                :bg="shade"
                :color="fontColor(`--gv-color-${shade}`)"
                v-for="shade in color"
                :key="shade"
              >
                <template #content>
                  <gv-tile-header v-clipboard.self @oncopy="copyCallback" sub>
                    {{ shade }}
                  </gv-tile-header>
                </template>
                <template #trailing>
                  <small v-clipboard.self @oncopy="copyCallback">
                    {{ hex(`--gv-color-${shade}`) }}
                  </small>
                </template>
              </gv-tile>
            </template>
          </gv-card>
          <gv-card>
            <template #content>
              <gv-tile
                v-for="color in [
                  'black',
                  'white',
                  'primary',
                  'accent',
                  'secondary',
                  'success',
                  'error',
                  'warning',
                  'info',
                ]"
                :key="color"
                :id="color"
                :bg="color"
                :color="fontColor(`--gv-${color}`)"
              >
                <template #content>
                  <gv-tile-header v-clipboard.self @oncopy="copyCallback" sub>
                    {{ color }}
                  </gv-tile-header>
                </template>
                <template #trailing>
                  <small v-clipboard.self @oncopy="copyCallback">
                    {{ hex(`--gv-${color}`) }}
                  </small>
                </template>
              </gv-tile>
            </template>
          </gv-card>
        </gv-booth>
        <gv-snackbar ref="snackbar" :message="message" />
      </ClientOnly>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      items: [
        'amber',
        'blue',
        'blue-gray',
        'brown',
        'cyan',
        'deep-orange',
        'deep-purple',
        'gray',
        'green',
        'indigo',
        'light-blue',
        'light-green',
        'lime',
        'orange',
        'pink',
        'purple',
        'red',
        'teal',
        'yellow',
      ],
    };
  },
  computed: {
    colors() {
      return this.items.map((item) => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((subitem) => {
          return subitem === 5 ? item : `${item}-${subitem * 100}`;
        });
      });
    },
    snackbar() {
      return this.$refs.snackbar;
    },
  },
  methods: {
    hex(value) {
      return this.get(value)?.text;
    },
    fontColor(value) {
      return /f/.test(this.get(value)?.color) ? 'white' : 'black';
    },
    get(value) {
      const color = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(value);
      if (color) {
        const hexColor = this.$utils.string.toHex(String(color).trim());
        return {
          text: hexColor,
          color: this.$utils.string.getContrast(hexColor),
        };
      }
      return {};
    },
    copyCallback(value) {
      this.message = value + ' was copied to the clipboard';
      this.snackbar.show();
    },
  },
};
</script>
