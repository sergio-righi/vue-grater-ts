# Collapse

The `gv-collapse` provides a panel where you can hide the within content. Learn more about the component and its featureas in the following examples.

## Exclusive

Each panel is exclusive which means that when you open one the other closes.

<collapse-example-1 />

<<< @/docs/.vuepress/components/CollapseExample1.vue

## Multilevel

Panels can have more panels as child.

<collapse-example-2 />

<<< @/docs/.vuepress/components/CollapseExample2.vue

## Custom

It can be customized to fit to some specific needs.

<collapse-example-3 />

<<< @/docs/.vuepress/components/CollapseExample3.vue

## Props

### `<gv-collapse/>`

| Name       |  Type   | Description         | Default | Required |
| ---------- | :-----: | ------------------- | ------- | -------- |
| exclusive  | boolean | one at a time       | `false` | false    |
| outline    | boolean | no background style | `false` | false    |
| hide-arrow | boolean | hides arrow icon    | `false` | false    |

### `<gv-collapse-item/>`

| Name   |  Type   | Description     | Default | Required |
| ------ | :-----: | --------------- | ------- | -------- |
| active | boolean | sets visibility | `false` | false    |

## Events

| Name    | Return | Description    |
| ------- | ------ | -------------- |
| onopen  | -      | open callback  |
| onclose | -      | close callback |

## Slots

| Name     | Description            |
| -------- | ---------------------- |
| header   | header content         |
| title    | title inside header    |
| subtitle | subtitle inside header |
| icon     | content before         |
| control  | content after          |
| content  | sets the main content  |
