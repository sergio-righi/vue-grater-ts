<template>
  <gv-row>
    <gv-col>
      <gv-form-group>
        <gv-input label="Phone" v-validation.pattern="/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g" />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>
