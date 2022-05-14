# Form

## Input

The `gv-input` replaces the standard html input and adds some features.

<form-example-1 />

<<< @/docs/.vuepress/components/FormExample1.vue

## Select

The `gv-select` replaces the standard html select and adds some features. Items with the same `key` will be filtered.

<form-example-2 />

<<< @/docs/.vuepress/components/FormExample2.vue

## Textarea

The `gv-input` + `multiline` replaces the standard html textarea and adds some features.

<form-example-3 />

<<< @/docs/.vuepress/components/FormExample3.vue

## Input + Button

It is possible to add button on the `gv-input`.

<form-example-4 />

<<< @/docs/.vuepress/components/FormExample4.vue

## File

The `gv-input-file` replaces the standard html input `type="file"` and adds some features.

<form-example-5 />

<<< @/docs/.vuepress/components/FormExample5.vue

## Radiobutton

The `gv-input-box` replaces the standard html input `type="radio"` and adds some features.

<form-example-6 />

<<< @/docs/.vuepress/components/FormExample6.vue

## Checkbox

The `gv-input-box` replaces the standard html input `type="checkbox"` and adds some features.

<form-example-7 />

<<< @/docs/.vuepress/components/FormExample7.vue

## Switch

The `gv-switch` is a customized checkbox.

<form-example-8 />

<<< @/docs/.vuepress/components/FormExample8.vue

## Props

### `gv-input`

| Name        |       Type       | Description             | Default | Required |
| ----------- | :--------------: | ----------------------- | ------- | -------- |
| value       | string or number | current value `v-model` | -       | false    |
| label       |      string      | field label             | -       | false    |
| error       |     boolean      | set error style         | `false` | false    |
| outline     |     boolean      | no background style     | `false` | false    |
| required    |     boolean      | set required style      | `false` | false    |
| placeholder |      string      | hint                    | -       | false    |
| maxLength   | string or number | validate max length     | -       | false    |
| multiline   |     boolean      | set textarea style      | `false` | false    |

### `gv-select`

| Name        |       Type       | Description             | Default | Required |
| ----------- | :--------------: | ----------------------- | ------- | -------- |
| value       | string or number | current value `v-model` | -       | false    |
| label       |      string      | field label             | -       | false    |
| error       |     boolean      | set error style         | `false` | false    |
| outline     |     boolean      | no background style     | `false` | false    |
| disabled    |     boolean      | set disabled style      | `false` | false    |
| required    |     boolean      | set required style      | `false` | false    |
| items\*     |      array       | options `object`        | `[]`    | false    |
| placeholder |      string      | hint                    | -       | false    |

\* attributes: `value`, `text` and `disabled`

### `gv-textarea`

| Name  |       Type       | Description                  | Default | Required |
| ----- | :--------------: | ---------------------------- | ------- | -------- |
| max   |      number      | maximum number of characters | -       | false    |
| value | string or number | current value `v-model`      | -       | false    |

### `gv-input-file`

| Name     |  Type   | Description                           | Default    | Required |
| -------- | :-----: | ------------------------------------- | ---------- | -------- |
| label    | string  | default text                          | null       | true     |
| multiple | boolean | toggles multiple files                | `false`    | false    |
| message  | string  | text when files are selected (suffix) | `selected` | false    |

### `gv-input-box`

| Name     |               Type                | Description             | Default | Required |
| -------- | :-------------------------------: | ----------------------- | ------- | -------- |
| val      | string, number, boolean or object | html attribute `value`  | null    | false    |
| value    | array, string, number or boolean  | current value `v-model` | `false` | false    |
| name     |              string               | html attribute          | null    | false    |
| radio    |              boolean              | is radiobutton          | `false` | false    |
| checkbox |              boolean              | is checkbox             | `false` | false    |
| checked  |              boolean              | toggles checked         | `false` | false    |
| required |              boolean              | html attribute          | `false` | false    |
| disabled |              boolean              | html attribute          | `false` | false    |

### `gv-switch`

| Name     |  Type   | Description                       | Default | Required |
| -------- | :-----: | --------------------------------- | ------- | -------- |
| id       | string  | html attribute                    | -       | false    |
| val      |    -    | html attribute                    | -       | false    |
| value    | boolean | control the check state `v-model` | `false` | false    |
| name     | string  | html attribute                    | -       | false    |
| bg       | string  | background when checked           | -       | false    |
| color    | string  | font color when checked           | -       | false    |
| sm       | boolean | small size                        | `false` | false    |
| disabled | string  | html attribute                    | -       | false    |

## Events

### `gv-input`

| Name    | Return | Description    |
| ------- | ------ | -------------- |
| onclick | event  | click callback |
| onfocus | event  | focus callback |
| onblur  | event  | blur callback  |

### `gv-input-file`

| Name     | Return | Description                        |
| -------- | ------ | ---------------------------------- |
| onchange | object | triggered when files were selected |

## Slots

### `gv-input-box`

| Name    | Description          |
| ------- | -------------------- |
| default | content of the label |

### `gv-switch`

| Name   | Description               |
| ------ | ------------------------- |
| circle | content inside the circle |
| on     | content when on           |
| off    | content when off          |
