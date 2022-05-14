# Poll

The `gv-poll` is a tool for providing an easy and simple way to create polls. Learn more about the component and its features in the following examples.

## Usage

The standard example of the component.

<poll-example-1 />

<<< @/docs/.vuepress/components/PollExample1.vue

## Props

| Name     |  Type   | Description                                           | Default | Required |
| -------- | :-----: | ----------------------------------------------------- | ------- | -------- |
| value    |  array  | the items that will be displayed as options `v-model` | `[]`    | true     |
| done     | boolean | sets the status as done to show the results           | -       | false    |
| selected | number  | marks the selected item                               | `-1`    | false    |

## Events

| Name   | Return | Description                        |
| ------ | ------ | ---------------------------------- |
| onvote | number | return the index of the voted item |

## Slots

| Name   | Description                     |
| ------ | ------------------------------- |
| header | the description of the question |
| footer | footnotes                       |
