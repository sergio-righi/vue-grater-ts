# Dual List

The `gv-dual-list` allows to select a list of items based on the provided list. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<dual-list-example-1 />

<<< @/docs/.vuepress/components/DualListExample1.vue

## Dynamic

The dynamic example of the component.

<dual-list-example-2 />

<<< @/docs/.vuepress/components/DualListExample2.vue

## Props

| Name        |  Type   | Description                                 | Default | Required |
| ----------- | :-----: | ------------------------------------------- | ------- | -------- |
| data\*      |  array  | content of the lists                        | `[]`    | false    |
| value\*     |  array  | `v-model` attribute with the selected items | `[]`    | false    |
| hideControl | boolean | hides arrow controls                        | -       | false    |

\* properties supported `id`, `header`, `subheader`

## Events

| Name     | Return        | Description                       |
| -------- | ------------- | --------------------------------- |
| onscroll | -             | reach the bottom of page callback |
| onfilter | searched term | input callback                    |
