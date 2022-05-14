# Snackbar

The `gv-snackbar` is used to display a quick message to a user. Snackbars support positioning, timeout controlling, and callbacks. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<snackbar-example-1 />

<<< @/docs/.vuepress/components/SnackbarExample1.vue

## Custom

It is flexible and it can be customized according to the needs.

<snackbar-example-2 />

<<< @/docs/.vuepress/components/SnackbarExample2.vue

## Props

| Name    |  Type   | Description                      | Default | Required |
| ------- | :-----: | -------------------------------- | ------- | -------- |
| timeout | number  | time before hide in milliseconds | `3000`  | false    |
| message | string  | content message                  | -       | true     |
| left    | boolean | positioning                      | -       | false    |
| action  | string  | action label                     | -       | false    |
| dismiss | string  | dismiss label                    | `Hide`  | false    |
| right   | boolean | positining                       | -       | false    |
| visible | boolean | sets visibility state            | -       | false    |

## Events

| Name    | Return | Description     |
| ------- | :----: | --------------- |
| onclick |   -    | action callback |
| onshow  |   -    | open callback   |
| onhide  |   -    | close callback  |
