# Tab

The `gv-tab` is used for hiding content behind a selectable item. This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<tab-example-1 />

<<< @/docs/.vuepress/components/TabExample1.vue

## Upside Down

The option to move the header to the bottom.

<tab-example-2 />

<<< @/docs/.vuepress/components/TabExample2.vue

## Icon

The component supports icons.

<tab-example-3 />

<<< @/docs/.vuepress/components/TabExample3.vue

## Custom

The options can be mixed to adapt the component according to the needs.

<tab-example-4 />

<<< @/docs/.vuepress/components/TabExample4.vue

## Props

### `gv-tab`

| Name       |  Type   | Description           | Default | Required |
| ---------- | :-----: | --------------------- | ------- | -------- |
| tab        | number  | current active tab    | `1`     | false    |
| bg         | string  | background            | -       | false    |
| stretch    | boolean | fit to parent         | `false` | false    |
| color      | string  | font color            | -       | false    |
| right      | boolean | align header to right | `false` | false    |
| upsidedown | boolean | invert header         | `false` | false    |
| embed      | boolean | toggles the border    | `false` | false    |

### `gv-tab-item`

| Name     |  Type   | Description           | Default | Required |
| -------- | :-----: | --------------------- | ------- | -------- |
| name     | string  | tab header            | -       | false    |
| icon     | string  | icon name             | -       | false    |
| disabled | boolean | prevent action events | `false` | false    |
