<template>
  <div>
    <gv-button v-responsive.md.on sm>Show > MD</gv-button>
    <gv-button v-responsive.hide.sm.on sm>Hide SM onwards</gv-button>
    <gv-button v-responsive.xs sm>Show only XS</gv-button>
    <gv-button v-responsive.sm.lg.hide.xs.md sm>Show SM/LG and Hide XS/MD</gv-button>
    <gv-button v-responsive.hide.md sm>Show XS/SM/LG/XL</gv-button>
  </div>
</template>
