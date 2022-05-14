# Booth

The `gv-booth` provides a way to display items as a grid. Learn more about the component and its featureas in the following examples.

## Standard

Creates the grid via `items` property.

<booth-example-1 />

<<< @/docs/.vuepress/components/BoothExample1.vue

## Slot

Creates the grid using slots.

<booth-example-2 />

<<< @/docs/.vuepress/components/BoothExample2.vue

## Props

| Name  |  Type  | Description             | Default | Required |
| ----- | :----: | ----------------------- | ------- | -------- |
| items | array  | object array with items | `[]`    | false    |
| gap   | number | gap between items       | `10`    | false    |
