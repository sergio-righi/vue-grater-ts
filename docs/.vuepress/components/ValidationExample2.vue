<template>
  <gv-row>
    <gv-col sm="6">
      <gv-input label="Date" v-validation.date />
    </gv-col>
    <gv-col sm="6">
      <gv-input label="Number" v-validation.number />
    </gv-col>
    <gv-col sm="6">
      <gv-input label="URL" v-validation.url />
    </gv-col>
    <gv-col sm="6">
      <gv-input label="Email" v-validation.email />
    </gv-col>
  </gv-row>
</template>
