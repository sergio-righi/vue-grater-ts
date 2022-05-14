<template>
  <p>
    <slot v-for="i in 20">
      <slot v-if="i % 5 == 0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
        consequat odio.
        <gv-highlight>
          Suspendisse sit amet nibh id nibh vestibulum facilisis. Ut at purus
          tempus, pellentesque orci at, tincidunt lacus.
        </gv-highlight>
        Duis rhoncus quis neque a dignissim.
      </slot>
      <slot v-else-if="i % 3 == 0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <gv-highlight> Nulla eget consequat odio. </gv-highlight>
        Suspendisse sit amet nibh id nibh vestibulum facilisis. Ut at purus
        tempus, pellentesque orci at, tincidunt lacus. Duis rhoncus quis neque a
        dignissim.
      </slot>
      <slot v-else>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
        consequat odio. Suspendisse sit amet nibh id nibh vestibulum facilisis.
        Ut at purus tempus, pellentesque orci at, tincidunt lacus. Duis rhoncus
        quis neque a dignissim.
      </slot>
    </slot>
  </p>
</template>

<script>
export default {};
</script>
