<template>
  <gv-collapse hide-arrow>
    <gv-collapse-item v-for="item in [1, 2, 3]" :key="item">
      <template #title>Lorem ipsum dolor sit amet</template>
      <template #subtitle>Lorem ipsum dolor sit amet</template>
      <template #leading>
        <gv-icon v-if="item === 2" value="check" size="24px" />
        <gv-icon
          v-if="item === 3"
          value="alert-circle"
          size="24px"
        />
      </template>
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
