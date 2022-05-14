# Dropdown

The `gv-dropdown` provides a dropdown menu with items. Learn more about the component and its featureas in the following examples.

## Header

The default example of using the `header` property.

<dropdown-example-1 />

<<< @/docs/.vuepress/components/DropdownExample1.vue

## Left

The component can be manually positioned to open to the left.

<dropdown-example-2 />

<<< @/docs/.vuepress/components/DropdownExample2.vue

## Custom

It can be customized to have different sections.

<dropdown-example-3 />

<<< @/docs/.vuepress/components/DropdownExample3.vue

## Props

### `gv-dropdown`

| Name   |  Type   | Description             | Default | Required |
| ------ | :-----: | ----------------------- | ------- | -------- |
| left   | boolean | position                | `false` | false    |
| arrow  | boolean | toggles arrow icon      | `false` | false    |
| active | boolean | sets dropdown visiblity | `false` | false    |

### `gv-dropdown-item`

| Name        |            Type            | Description         | Default | Required |
| ----------- | :------------------------: | ------------------- | ------- | -------- |
| header      |          boolean           | show item as header | `false` | false    |
| href        | string, object or function | html attribute      | -       | false    |
| target      |           string           | hyperlink open mode | `_self` | false    |
| href        |           string           | anchor              | -       | false    |
| onclick     |          function          | click callback      | -       | false    |
| onmousedown |          function          | mousedown callback  | -       | false    |

## Events

`gv-dropdown`

| Name  | Return | Description    |
| ----- | ------ | -------------- |
| onopen  | -      | open callback  |
| onclose | -      | close callback |

`gv-dropdown-item`

| Name        | Return | Description        |
| ----------- | ------ | ------------------ |
| onclick     | event  | click callback     |
| onmousedown | event  | mousedown callback |

## Slots

| Name    | Description                |
| ------- | -------------------------- |
| content | insert the content (items) |
