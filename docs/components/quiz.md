# Quiz

The `gv-quiz` is a tool for creating questionaires. Learn more about the component and its features in the following examples.

## Usage

The standard example of the component.

<quiz-example-1 />

<<< @/docs/.vuepress/components/QuizExample1.vue

## Props

### `gv-quiz`

| Name         |  Type   | Description                                | Default | Required |
| ------------ | :-----: | ------------------------------------------ | ------- | -------- |
| min          | number  | sets the min value for scale questions     | `1`     | false    |
| max          | number  | sets the max value for scale questions     | `5`     | false    |
| pageSize     | number  | sets how many itms to display in each page | `1`     | false    |
| forward      | boolean | the pagination only moves forward          | -       | false    |
| confirmation | boolean | shows a dialog to confirm the submission   | -       | false    |

### `gv-quiz-item`

| Name      |  Type   | Description                                          | Default | Required |
| --------- | :-----: | ---------------------------------------------------- | ------- | -------- |
| id        | string  | sets the `id` of the question                        | -       | false    |
| open      | boolean | brief description (type of question)                 | -       | false    |
| rank      | boolean | sort by rank (type of question)                      | -       | false    |
| scale     | boolean | scale (type of question)                             | -       | false    |
| options   |  array  | the items that will be used as options               | `[]`    | false    |
| required  | boolean | sets the question as required                        | -       | false    |
| multiple  | boolean | accepts multiple selections (type of question)       | -       | false    |
| multiline | boolean | uses combined with `open` to accept long description | -       | false    |

## Slots

### `gv-quiz`

| Name    | Description                  |
| ------- | ---------------------------- |
| header  | header content               |
| content | the main content (questions) |

### `gv-quiz-item`

| Name   | Description    |
| ------ | -------------- |
| header | header content |
| footer | footer content |
