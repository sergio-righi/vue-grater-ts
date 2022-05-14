# Chip

The `gv-chip` is used to display small pieces of information. Learn more about the component and its featureas in the following example.

## Style

You can modify the shape or style of the component using its options.

<chip-example-1 />

<<< @/docs/.vuepress/components/ChipExample1.vue

## Size

There are two predefined customizable sizes `sm` and `lg`.

<chip-example-2 />

<<< @/docs/.vuepress/components/ChipExample2.vue

## Dismissible

It can be dismissed if the `dismissible` property is set `true`. There is also the possibility to show a confirmation dialog setting the `message` property.

<chip-example-3 />

<<< @/docs/.vuepress/components/ChipExample3.vue

## Custom

It can be customized adding images and icons.

<chip-example-4 />

<<< @/docs/.vuepress/components/ChipExample4.vue

## Props

| Name        |            Type            | Description                     | Default | Required |
| ----------- | :------------------------: | ------------------------------- | ------- | -------- |
| href        | string, object or function | html attribute                  | -       | false    |
| target      |           string           | hyperlink open mode             | `_self` | false    |
| bg          |           string           | background                      | -       | false    |
| color       |           string           | font color                      | -       | false    |
| square      |          boolean           | border shape                    | `false` | false    |
| sm          |          boolean           | small size                      | `false` | false    |
| lg          |          boolean           | large size                      | `false` | false    |
| round       |          boolean           | border shape                    | `false` | false    |
| active      |          boolean           | active style                    | `false` | false    |
| outline     |          boolean           | transparent                     | `false` | false    |
| dismissible |          boolean           | toggles dismiss                 | `false` | false    |
| focusable   |          boolean           | makes the component focusable   | `false` | false    |
| message     |           string           | enables the dialog confirmation | -       | false    |

## Events

| Name      | Return      | Description      |
| --------- | ----------- | ---------------- |
| ondismiss | DOM element | dismiss callback |

## Slots

| Name    | Description                            |
| ------- | -------------------------------------- |
| leading | insert content before the main content |
| content | inner content                          |
