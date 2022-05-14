<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-badge dot>
          <gv-icon value="bell" />
        </gv-badge>
        <gv-badge :value="4" inline><gv-icon value="account"/></gv-badge>
        <gv-badge :value="4">
          <gv-icon value="bell" />
        </gv-badge>
      </gv-flexbox>
    </gv-col>
  </gv-row>
</template>
