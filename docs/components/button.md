# Button

The `gv-button` replaces the standard html button and adds some features. Learn more about the component and its featureas in the following examples.

## Style

You can modify the shape or style of the component using its options.

<button-example-1 />

<<< @/docs/.vuepress/components/ButtonExample1.vue

## Size

There are two predefined sizes `sm` and `lg`.

<button-example-2 />

<<< @/docs/.vuepress/components/ButtonExample2.vue

## Action

The component also has predefined style for some actions.

<button-example-3 />

<<< @/docs/.vuepress/components/ButtonExample3.vue

## Link

Use the property `href` to create a link.

<button-example-4 />

<<< @/docs/.vuepress/components/ButtonExample4.vue

## Button Group

The button group is a controller for a group of buttons.

<button-example-5 />

<<< @/docs/.vuepress/components/ButtonExample5.vue

## Float Action Button (FAB)

A variation of the previous component is a float button who stands fixed on the window.

<button-example-6 />

<<< @/docs/.vuepress/components/ButtonExample6.vue

## Props

### `gv-button`

| Name    |  Type   | Description              | Default | Required |
| ------- | :-----: | ------------------------ | ------- | -------- |
| bg      | string  | background               | -       | false    |
| color   | string  | font color               | -       | false    |
| stretch | boolean | fit to parent            | `false` | false    |
| flat    | boolean | text only style          | `false` | false    |
| square  | boolean | border shape             | `false` | false    |
| sm      | boolean | small size               | `false` | false    |
| lg      | boolean | large size               | `false` | false    |
| round   | boolean | border shape             | `false` | false    |
| outline | boolean | no background style      | `false` | false    |
| process | boolean | toggles a process icon   | `false` | false    |
| active  | boolean | toggle selected style    | `false` | false    |
| primary | boolean | predefined style         | `false` | false    |
| success | boolean | predefined style         | `false` | false    |
| error   | boolean | predefined style         | `false` | false    |
| warning | boolean | predefined style         | `false` | false    |
| info    | boolean | predefined style         | `false` | false    |
| button  | boolean | prevent submit attribute | `false` | false    |
| href    | string  | html attribute           | -       | false    |

### `gv-button-group`

| Name  |  Type   | Description    | Default | Required |
| ----- | :-----: | -------------- | ------- | -------- |
| fluid | boolean | fit to content | `false` | false    |
| sm    | boolean | size           | `false` | false    |
| lg    | boolean | size           | `false` | false    |

### `gv-fab`

| Name       |  Type   | Description    | Default | Required |
| ---------- | :-----: | -------------- | ------- | -------- |
| id         | string  | html attribute | -       | false    |
| bg         | string  | background     | -       | false    |
| color      | string  | font color     | -       | false    |
| sm         | boolean | size           | `false` | false    |
| lg         | boolean | size           | `false` | false    |
| horizontal | boolean | orientation    | `true`  | false    |

## Events

`gv-button`

| Name    | Return | Description    |
| ------- | ------ | -------------- |
| onclick | -      | click callback |

`gv-fab`

| Name    | Return      | Description    |
| ------- | ----------- | -------------- |
| onopen  | DOM element | open callback  |
| onclose | DOM element | close callback |

`gv-fab-item`

| Name    | Return | Description    |
| ------- | ------ | -------------- |
| onclick | event  | click callback |

## Slots

`gv-fab`

| Name    | Description                             |
| ------- | --------------------------------------- |
| open    | icon when closed                        |
| close   | icon when opened                        |
| content | content when opened                     |
| control | static icon with content always visible |
