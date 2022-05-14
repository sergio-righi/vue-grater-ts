# Scroll

The `v-scroll` directive provides a flexible way to create anchors for scrolling. Learn more about the directive and its featureas in the following example.

## Usage

The default example of the directive using the modifiers `top` for moving to the top and `bottom` for moving to the bottom. There is an option to specify a value with the selector of the element you want to scroll to such as `.{some-class}` and `#{some_id}`. Use `@onreach` in case you want to run some action when the scroll hits the target.

<scroll-example-1 />

<<< @/docs/.vuepress/components/ScrollExample1.vue
