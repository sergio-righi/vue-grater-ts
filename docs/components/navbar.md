### Navbar

The `gv-navbar` is used to create navigation bars. Learn more about the component and its featureas in the following example.

## Standard

The default example of the component.

<navbar-example-1 />

<<< @/docs/.vuepress/components/NavbarExample1.vue

## Props

### `gv-navbar`

| Name    |  Type   | Description                                   | Default | Required |
| ------- | :-----: | --------------------------------------------- | ------- | -------- |
| bg      | string  | background                                    | -       | false    |
| color   | string  | font color                                    | -       | false    |
| fixed   | boolean | sticky on top                                 | `false` | false    |
| center  | boolean | sets content to center                        | `false` | false    |
| sidebar | boolean | hides the menu and add to the sidebar content | `false` | false    |

### `gv-navbar-item`

| Name   |            Type            | Description         | Default | Required |
| ------ | :------------------------: | ------------------- | ------- | -------- |
| href   | string, object or function | html attribute      | -       | false    |
| target |           string           | hyperlink open mode | `_self` | false    |
| active |          boolean           | toggle highlight    | `false` | false    |

## Slots

| Name    | Description             |
| ------- | ----------------------- |
| brand   | insert the home content |
| menu    | insert left content     |
| control | insert right content    |
