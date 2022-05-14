<template>
  <gv-row>
    <gv-col :sm="6">
      <gv-card overflow color="white">
        <template #content>
          <gv-image src="/img/landscape/img_2.jpg">
            <gv-position lg overlay>imagem_bg.jpg</gv-position>
          </gv-image>
        </template>
      </gv-card>
    </gv-col>
    <gv-col :sm="6">
      <gv-card overflow>
        <template #content>
          <gv-image src="/img/landscape/img_9.jpg" />
        </template>
      </gv-card>
    </gv-col>
  </gv-row>
</template>
