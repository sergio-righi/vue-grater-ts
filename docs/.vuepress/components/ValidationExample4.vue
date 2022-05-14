<template>
  <gv-row>
    <gv-col sm="6">
      <gv-form-group>
        <gv-input type="password" label="Password" id="password" v-validation.required />
      </gv-form-group>
    </gv-col>
    <gv-col sm="6">
      <gv-form-group>
        <gv-input type="password" label="Confirm Password" id="confirm_password" v-validation.match="'#password'" />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>
