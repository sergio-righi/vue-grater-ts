# Alert

The `gv-alert` provides feedback messages for user actions. Learn more about the component and its features in the following examples.

## Types

The supported types are `success`, `warning`, `error` and `info`.

<alert-example-1/>

<<< @/docs/.vuepress/components/AlertExample1.vue

## Style

There is another style option setting the `outline` property.

<alert-example-2/>

<<< @/docs/.vuepress/components/AlertExample2.vue

## Header

You can highlight the component adding the header.

<alert-example-3 />

<<< @/docs/.vuepress/components/AlertExample3.vue

## Dismissible

Allows user to dissmiss the alert.

<alert-example-4 />

<<< @/docs/.vuepress/components/AlertExample4.vue

## Multiple

Insert multiple items to create pagination.

<alert-example-5 />

<<< @/docs/.vuepress/components/AlertExample5.vue

## Slot

Use slots to customize the content.

<alert-example-6 />

<<< @/docs/.vuepress/components/AlertExample6.vue

## Props

`gv-alert`

| Name        |  Type   | Description                                    | Default | Required |
| ----------- | :-----: | ---------------------------------------------- | ------- | -------- |
| loop        | boolean | goes to the first item when it reachs the last | `false` | false    |
| outline     | boolean | no background style                            | `false` | false    |
| message     | boolean | enables the dialog confirmation                | `false` | false    |
| dismissible | boolean | toggles dismiss                                | `false` | false    |

`gv-alert-item`

| Name    |            Type            | Description         | Default | Required |
| ------- | :------------------------: | ------------------- | ------- | -------- |
| href    | string, object or function | html attribute      | -       | false    |
| target  |           string           | hyperlink open mode | `_self` | false    |
| bg      |           string           | background          | -       | false    |
| color   |           string           | font color          | -       | false    |
| info    |          boolean           | predefined style    | `false` | false    |
| error   |          boolean           | predefined style    | `false` | false    |
| active  |          boolean           | toggles selected    | `false` | false    |
| success |          boolean           | predefined style    | `false` | false    |
| warning |          boolean           | predefined style    | `false` | false    |
| primary |          boolean           | predefined style    | `false` | false    |

## Events

| Name      | Return      | Description      |
| --------- | ----------- | ---------------- |
| ondismiss | DOM element | dismiss callback |
