<template>
  <gv-collapse exclusive>
    <gv-collapse-item v-for="item in [1, 2, 3]" :key="item">
      <template #title>Lorem ipsum dolor sit amet</template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
          amet lacus nec sem cursus viverra ut et odio. Mauris sollicitudin,
          mauris a facilisis ultricies, magna mauris tristique nunc, sit amet
          lacinia leo tellus eu elit.
        </p>
      </template>
    </gv-collapse-item>
  </gv-collapse>
</template>
