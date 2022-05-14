# Modal

The `gv-modal` provides a way to display information as well as forms to the user. Learn more about the component and its featureas in the following examples.

## Static

The default example of the component.

<modal-example-1 />

<<< @/docs/.vuepress/components/ModalExample1.vue

## Dynamic

It allows you to embed content inside the component.

<modal-example-2 />

<<< @/docs/.vuepress/components/ModalExample2.vue

## Embed

It makes the component invisible to embed the content.

<modal-example-3 />

<<< @/docs/.vuepress/components/ModalExample3.vue

## Props

| Name   |  Type  | Description              | Default | Required |
| ------ | :----: | ------------------------ | ------- | -------- |
| sm     | string | size                     | `false` | false    |
| embed  | string | hides the content margin | `false` | false    |
| active | string | toggles visibility       | `false` | false    |
| ready  | string | lazyload                 | `true`  | false    |

## Methods

| Name  | Params | Description    |
| ----- | ------ | -------------- |
| open  | -      | show the modal |
| close | -      | hide the modal |

## Events

| Name    | Return      | Description    |
| ------- | ----------- | -------------- |
| onopen  | DOM element | open callback  |
| onclose | DOM element | close callback |

## Slots

| Name    | Description     |
| ------- | --------------- |
| header  | sets the header  |
| content | sets the content |
| footer  | sets the footer  |
