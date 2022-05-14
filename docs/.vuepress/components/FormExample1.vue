<template>
  <gv-row>
    <gv-col>
      <gv-form-group>
        <gv-input
          id="example"
          name="name"
          label="Name"
          placeholder="Hint below the input"
          required
        >
          <template #leading>
            <gv-icon value="heart" />
          </template>
          <template #trailing>
            <gv-icon value="information" />
          </template>
        </gv-input>
      </gv-form-group>
    </gv-col>
    <gv-col>
      <gv-form-group>
        <gv-input
          label="Name"
          data-validation-message="Replaces hint on error"
          error
        />
      </gv-form-group>
    </gv-col>
    <gv-col>
      <gv-form-group>
        <gv-input label="Name" maxLength="20" outline />
      </gv-form-group>
    </gv-col>
    <gv-col>
      <gv-form-group>
        <gv-input label="Disabled" disabled />
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>
