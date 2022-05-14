# List

The `gv-list` replace the standard html `ul` and `ol` as well as adds some features. Learn more about the component and its featureas in the following examples.

## UL

The default example of the component.

<list-example-1 />

<<< @/docs/.vuepress/components/ListExample1.vue

## OL

The `ol` option default example.

<list-example-2 />

<<< @/docs/.vuepress/components/ListExample2.vue

## Slot

The same as the above example using slots.

<list-example-3 />

<<< @/docs/.vuepress/components/ListExample3.vue

## Tree

The `tree` option default example.

<list-example-4 />

<<< @/docs/.vuepress/components/ListExample4.vue

## Props

| Name  |  Type   | Description         | Default | Required |
| ----- | :-----: | ------------------- | ------- | -------- |
| ol    | boolean | ordered style       | `false` | false    |
| tree  | boolean | tree style          | `false` | false    |
| items |  array  | content of the list | `[]`    | false    |
