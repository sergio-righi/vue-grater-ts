<template>
  <gv-fab sm horizontal>
    <template #content>
      <gv-fab-item>
        <gv-image src="/img/user_m.png" />
      </gv-fab-item>
      <gv-fab-item>
        <gv-avatar bg="deep-orange" color="white">C</gv-avatar>
      </gv-fab-item>
      <gv-fab-item>
        <gv-avatar bg="amber" color="black">
          <gv-icon value="email" />
        </gv-avatar>
      </gv-fab-item>
      <gv-fab-item>
        <gv-avatar bg="purple" color="white">E</gv-avatar>
      </gv-fab-item>
      <gv-fab-item>
        <gv-image src="/img/user_f.png" />
      </gv-fab-item>
      <gv-fab-item>
        <gv-icon value="cog" />
      </gv-fab-item>
    </template>
    <template #open>
      <gv-icon value="pencil" />
    </template>
  </gv-fab>
</template>
