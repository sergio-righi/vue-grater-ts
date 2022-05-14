<template>
  <gv-row>
    <gv-col>
      <gv-input label="Phone" v-mask="['(##) # #### ####', '(###) ### ####']" />
    </gv-col>
    <gv-col sm="6">
      <gv-input v-mask="'a*'" label="Letters only" />
    </gv-col>
    <gv-col sm="6">
      <gv-input label="Numbers only" v-mask="'#*'" />
    </gv-col>
  </gv-row>
</template>
