# Table

The `gv-table` replaces the standard html table component and adds some features. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<table-example-1 />

<<< @/docs/.vuepress/components/TableExample1.vue

## Slots

There is an option to create the table using slots.

<table-example-2 />

<<< @/docs/.vuepress/components/TableExample2.vue

## Selectable

Use the property `selectable` to make the rows selectable.

<table-example-3 />

<<< @/docs/.vuepress/components/TableExample3.vue

## Props

### `gv-table`

| Name       | Type  | Description       | Default | Required |
| ---------- | :---: | ----------------- | ------- | -------- |
| columns    | array | header            | `[]`    | false    |
| rows       | array | data              | `[]`    | false    |
| selectable | array | enables selection | `false` | false    |

### `gv-tr`

| Name   |               Type                | Description            | Default | Required |
| ------ | :-------------------------------: | ---------------------- | ------- | -------- |
| val    | string, number, boolean or object | html attribute `value` | null    | false    |
| value  |               array               | `v-model`              | -       | false    |
| active |              boolean              | sets active style      | `false` | false    |

### `gv-th`

| Name   |  Type   | Description           | Default | Required |
| ------ | :-----: | --------------------- | ------- | -------- |
| label  | string  | header texxt          | -       | false    |
| prop   | string  | object key            | -       | false    |
| fit    | boolean | size fits the content | `false` | false    |
| active | boolean | sets active style     | `false` | false    |

### `gv-td`

| Name   |  Type   | Description           | Default | Required |
| ------ | :-----: | --------------------- | ------- | -------- |
| fit    | boolean | size fits the content | `false` | false    |
| active | boolean | sets active style     | `false` | false    |

## Slots

`gv-table`

| Name | Description          |
| ---- | -------------------- |
| head | content of the table |
| body | content of the table |
