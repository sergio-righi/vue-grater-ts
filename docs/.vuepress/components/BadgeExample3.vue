<template>
  <gv-row>
    <gv-col>
      <gv-flexbox justify="space-around" align="center">
        <gv-badge bg="teal" value="3" square>
          <gv-icon value="bell" />
        </gv-badge>
        <gv-badge bg="pink" dot>
          <gv-icon value="airplane" />
        </gv-badge>
        <gv-badge bg="black" :value="3">
          <gv-icon value="account" />
        </gv-badge>
      </gv-flexbox>
    </gv-col>
  </gv-row>
</template>
