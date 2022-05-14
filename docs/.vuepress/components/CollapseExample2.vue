<template>
  <gv-collapse>
    <gv-collapse-item v-for="item in [1, 2, 3]" :key="item">
      <template #title>Lorem ipsum dolor sit amet</template>
      <template #trailing>
        <gv-button sm>Example</gv-button>
      </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
          amet lacus nec sem cursus viverra ut et odio. Mauris sollicitudin,
          mauris a facilisis ultricies, magna mauris tristique nunc, sit amet
          lacinia leo tellus eu elit.
        </p>
        <gv-collapse v-if="item % 2 === 0">
          <gv-collapse-item v-for="subitem in [4, 5, 6]" :key="subitem">
            <template #title>Lorem ipsum dolor sit amet</template>
            <template #content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sit amet lacus nec sem cursus viverra ut et odio. Mauris
                sollicitudin, mauris a facilisis ultricies, magna mauris
                tristique nunc, sit amet lacinia leo tellus eu elit.
              </p>
            </template>
          </gv-collapse-item>
        </gv-collapse>
      </template>
    </gv-collapse-item>
  </gv-collapse>
</template>
