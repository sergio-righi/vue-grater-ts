# Progress

This bunch of components have the goal to give the user some feedback when the system is loading/waiting some information.

## Linear

The `gv-progress-linear` provides a linear styled progressbar.

<progress-example-1 />

<<< @/docs/.vuepress/components/ProgressExample1.vue

## Circle

The `gv-progress-circle` provides a circular styled progressbar.

<progress-example-2 />

<<< @/docs/.vuepress/components/ProgressExample2.vue

## Placeholder

The `gv-placeholder` provides a more complex way to display loading to the user where you can give an idea of how the content will be when it has been loaded.

<progress-example-3 />

<<< @/docs/.vuepress/components/ProgressExample3.vue

## Props

### `gv-progress-linear`

| Name          |  Type   | Description           | Default | Required |
| ------------- | :-----: | --------------------- | ------- | -------- |
| indeterminate | boolean | random animation      | `false` | false    |
| percentage    | number  | progress              | `0`     | false    |
| buffer        | number  | percentage loaded     | `0`     | false    |
| query         | boolean | indeterminate while 0 | `false` | false    |
| error         | boolean | sets error style      | `false` | false    |
| success       | boolean | sets success on done  | `false` | false    |
| stream        | stream  | buffering animation   | `false` | false    |

### `gv-progress-circle`

| Name          |  Type   | Description          | Default | Required |
| ------------- | :-----: | -------------------- | ------- | -------- |
| color         | string  | paint                | `gray`  | false    |
| success       | boolean | sets success on done | `false` | false    |
| percentage    | number  | progress             | `false` | false    |
| size          | number  | diameter in pixels   | `60`    | false    |
| width         | number  | stroke in pixels     | `2`     | false    |
| display       | boolean | show percentage      | `false` | false    |
| dismissible   | boolean | dismiss on done      | `false` | false    |
| indeterminate | boolean | random animation     | `false` | false    |

### `gv-placeholder-align`

| Name       |  Type   | Description | Default | Required |
| ---------- | :-----: | ----------- | ------- | -------- |
| vertical   | boolean | orientation | `false` | false    |
| horizontal | boolean | orientation | `false` | false    |

### `gv-placeholder-row`

| Name  |  Type   | Description       | Default | Required |
| ----- | :-----: | ----------------- | ------- | -------- |
| empty | boolean | transparent line  | `false` | false    |
| thick | boolean | double sized line | `false` | false    |

### `gv-placeholder-item`

| Name   |  Type   | Description               | Default | Required |
| ------ | :-----: | ------------------------- | ------- | -------- |
| gap    | boolean | transparent               | `false` | false    |
| image  | boolean | image predetermined size  | `false` | false    |
| sm     | boolean | size                      | `false` | false    |
| avatar | boolean | avatar predetermined size | `false` | false    |
