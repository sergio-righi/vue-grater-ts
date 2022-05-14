<template>
  <gv-booth>
    <ClientOnly>
      <div v-for="i in 12" :key="i.id" class="item">
        <gv-lazyload
          :src="`/img/landscape/img_${i}.jpg`"
          :preload="`/img/landscape/mini/img_${i}.jpg`"
        />
      </div>
    </ClientOnly>
  </gv-booth>
</template>
