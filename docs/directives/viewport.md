# Viewport

The `v-viewport` directive is aimed to provide a simple way to detect if the element is in viewport `@onvisible` as well as when it left `@onhidden`. Learn more about the directive and its featureas in the following example.

## Usage

The default example of the directive using the modifer `self` to indicate that the trigger is the element itself however, it is possible to specify a value with the selector of the element you want to watch such as `.{some-class}` and `#{some_id}`.

<viewport-example-1 />

<<< @/docs/.vuepress/components/ViewportExample1.vue
