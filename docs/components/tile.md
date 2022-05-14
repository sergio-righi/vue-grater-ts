# Tile

The `gv-tile` is used to display information that can be used within lists, cards, etc. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component

<tile-example-1 />

<<< @/docs/.vuepress/components/TileExample1.vue

## Options

The options can be mixed to adapt the component according to the needs.

<tile-example-2 />

<<< @/docs/.vuepress/components/TileExample2.vue

## Custom

It is flexible and can interact with different components such as `checkboxes`.

<tile-example-3 />

<<< @/docs/.vuepress/components/TileExample3.vue

## Props

### `gv-tile`

| Name      |            Type            | Description                    | Default | Required |
| --------- | :------------------------: | ------------------------------ | ------- | -------- |
| href      | string, ojbect or function | html attribute                 | -       | false    |
| target    |           string           | hyperlink open mode            | `_self` | false    |
| bg        |           string           | background                     | -       | false    |
| color     |           string           | font color                     | -       | false    |
| header    |          boolean           | header style                   | `false` | false    |
| active    |          boolean           | toggles the expandable content | `false` | false    |
| activable |          boolean           | enables the active feature     | `false` | false    |
| disabled  |          boolean           | disables action events         | `false` | false    |

### `gv-tile-header`

| Name |  Type   | Description | Default | Required |
| ---- | :-----: | ----------- | ------- | -------- |
| sub  | boolean | style       | `false` | false    |
| sm   | boolean | size        | `false` | false    |

## Slots

| Name       | Description           |
| ---------- | --------------------- |
| leading    | before content        |
| content    | sets the main content |
| trailing   | after content         |
| expandable | hidden content        |
