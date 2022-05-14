<template>
  <gv-row>
    <gv-col>
      <gv-form-group>
        <gv-input-file label="One file only" @onchange="changeCallback" />
      </gv-form-group>
      <gv-form-group>
        <gv-input-file
          label="Select multiple files"
          multiple
          @onchange="changeCallback"
        />
      </gv-form-group>
      <gv-form-group>
        <gv-input-file label="Validation error" @onchange="changeCallback" error />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  methods: {
    changeCallback(files) {
      console.log(this.getFilename(files));
    },
    getFilename(files) {
      return files.length ? [].map.call(files, item => item.name) : null;
    }
  }
};
</script>
