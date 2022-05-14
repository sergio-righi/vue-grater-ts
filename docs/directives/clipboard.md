# Clipboard

The `v-clipboard` directive is useful for offering a easy way to copy content to the user's clipboard. The directive also provides a callback option by using `@oncopy` passing the function on it. Learn more about the directive and its featureas in the following example.

## Standard

The default example of the directive.

<clipboard-example-1 />

<<< @/docs/.vuepress/components/ClipboardExample1.vue

## Self

The modifier `self` allows the component to copy the inside text of the element. The directive also has the modifier `html` and `outer` to explicitly tell the component to copy the content as html.

<clipboard-example-2 />

<<< @/docs/.vuepress/components/ClipboardExample2.vue

## Target

The modifier `target` allows the component to copy from a different target other than the trigger one. The directive also has the modifier `value` to explicitly tell the component to copy the value attribute.

<clipboard-example-3 />

<<< @/docs/.vuepress/components/ClipboardExample3.vue
