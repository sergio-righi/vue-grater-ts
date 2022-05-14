# Discussion

The `gv-discussion` is a aiming to provide an easy way to create group discussions or comments sections. Learn more about the component and its features in the following examples.

## Usage

The standard example of the component.

<discussion-example-1 />

<<< @/docs/.vuepress/components/DiscussionExample1.vue

## Props

### `gv-discussion-item`

| Name   |  Type  | Description                       | Default | Required |
| ------ | :----: | --------------------------------- | ------- | -------- |
| avatar | string | the content of the avatar section | -       | false    |
| header | string | the main content (comment)        | -       | true     |

## Slots

### `gv-discussion`

| Name    | Description      |
| ------- | ---------------- |
| content | sets the content |

### `gv-discussion-item`

| Name    | Description              |
| ------- | ------------------------ |
| control | sets the controls        |
| content | sets the replies content |
