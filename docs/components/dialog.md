# Dialog

The `gv-dialog` provides a dialog popup where the user can interact with it. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<dialog-example-1 />

<<< @/docs/.vuepress/components/DialogExample1.vue

## Dismissible button

It adds the close button by setting the property `dismissible`.

<dialog-example-2 />

<<< @/docs/.vuepress/components/DialogExample2.vue

## Checkbox

It allows features such as preventing the dialog to show again when the user already saw it.

<dialog-example-3 />

<<< @/docs/.vuepress/components/DialogExample3.vue

## Required

It requires the attention from the user to interact with the dialog.

<dialog-example-4 />

<<< @/docs/.vuepress/components/DialogExample4.vue

## Single action

The user must give the feedback by clicking the positive button.

<dialog-example-5 />

<<< @/docs/.vuepress/components/DialogExample5.vue

## Pagination

It allows the dialog to follow a flow to prevent overlapping.

<dialog-example-6 />

<<< @/docs/.vuepress/components/DialogExample6.vue

## Props

### `gv-dialog`

| Name        |  Type   | Description                       | Default | Required |
| ----------- | :-----: | --------------------------------- | ------- | -------- |
| index       | number  | selected index                    | `0`     | false    |
| active      | boolean | sets visibility                   | `false` | false    |
| dismissible | boolean | toggles close button when allowed | `false` | false    |

### `gv-dialog-item`

| Name     |  Type   | Description              | Default | Required |
| -------- | :-----: | ------------------------ | ------- | -------- |
| id       | string  | reference id             | -       | false    |
| embed    | boolean | hides the content margin | `false` | false    |
| required | boolean | user must act            | `false` | false    |

## Methods

| Name  | Params | Description             |
| ----- | ------ | ----------------------- |
| open  | -      | show dialog             |
| close | -      | hide dialog             |
| prev  | -      | move to previous item   |
| next  | -      | move to the next item   |
| shake | -      | call user attention     |
| move  | index  | move to determined item |

## Events

`gv-dialog`

| Name    | Return | Description              |
| ------- | ------ | ------------------------ |
| onopen  | object | open component callback  |
| onclose | object | close component callback |
| onmove  | object | move button callback     |

## Slots

| Name    | Description      |
| ------- | ---------------- |
| header  | sets the header  |
| content | sets the content |
| footer  | sets the footer  |
