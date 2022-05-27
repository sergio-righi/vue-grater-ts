# Form

## Input

O `gv-input` substitui a entrada html padrão e adiciona alguns recursos.

<form-example-1 />

<<< @/docs/.vuepress/components/FormExample1.vue

## Select

O `gv-select` substitui o padrão html select e adiciona alguns recursos. Itens com a mesma `chave` serão filtrados.

<form-example-2 />

<<< @/docs/.vuepress/components/FormExample2.vue

## Textarea

O `gv-input` + `multiline` substitui a área de texto html padrão e adiciona alguns recursos.

<form-example-3 />

<<< @/docs/.vuepress/components/FormExample3.vue

## Input + Button

É possível adicionar um botão no `gv-input`.

<form-example-4 />

<<< @/docs/.vuepress/components/FormExample4.vue

## File

O `gv-input-file` substitui a entrada html padrão `type="file"` e adiciona alguns recursos.

<form-example-5 />

<<< @/docs/.vuepress/components/FormExample5.vue

## Radiobutton

A `gv-input-box` substitui a entrada html padrão `type="radio"` e adiciona alguns recursos.

<form-example-6 />

<<< @/docs/.vuepress/components/FormExample6.vue

## Checkbox

A `gv-input-box` substitui a entrada html padrão `type="checkbox"` e adiciona alguns recursos.

<form-example-7 />

<<< @/docs/.vuepress/components/FormExample7.vue

## Switch

O `gv-switch` é uma caixa de seleção personalizada.

<form-example-8 />

<<< @/docs/.vuepress/components/FormExample8.vue

## Propriedades

### `gv-input`

| Nome        |       Tipo       | Descrição               | Padrão  | Obrigatório |
| ----------- | :--------------: | ----------------------- | ------- | ----------- |
| value       | string or number | current value `v-model` | -       | false       |
| label       |      string      | field label             | -       | false       |
| error       |     boolean      | set error style         | `false` | false       |
| outline     |     boolean      | no background style     | `false` | false       |
| required    |     boolean      | set required style      | `false` | false       |
| placeholder |      string      | hint                    | -       | false       |
| maxLength   | string or number | validate max length     | -       | false       |
| multiline   |     boolean      | set textarea style      | `false` | false       |

### `gv-select`

| Nome        |       Tipo       | Descrição               | Padrão  | Obrigatório |
| ----------- | :--------------: | ----------------------- | ------- | ----------- |
| value       | string or number | current value `v-model` | -       | false       |
| label       |      string      | field label             | -       | false       |
| error       |     boolean      | set error style         | `false` | false       |
| outline     |     boolean      | no background style     | `false` | false       |
| disabled    |     boolean      | set disabled style      | `false` | false       |
| required    |     boolean      | set required style      | `false` | false       |
| items\*     |      array       | options `object`        | `[]`    | false       |
| placeholder |      string      | hint                    | -       | false       |

\* atributos: `value`, `text` e `disabled`

### `gv-textarea`

| Nome  |       Tipo       | Descrição                    | Padrão | Obrigatório |
| ----- | :--------------: | ---------------------------- | ------ | ----------- |
| max   |      number      | maximum number of characters | -      | false       |
| value | string or number | current value `v-model`      | -      | false       |

### `gv-input-file`

| Nome     |  Tipo   | Descrição                             | Padrão     | Obrigatório |
| -------- | :-----: | ------------------------------------- | ---------- | ----------- |
| label    | string  | default text                          | null       | true        |
| multiple | boolean | toggles multiple files                | `false`    | false       |
| message  | string  | text when files are selected (suffix) | `selected` | false       |

### `gv-input-box`

| Nome     |               Tipo                | Descrição               | Padrão  | Obrigatório |
| -------- | :-------------------------------: | ----------------------- | ------- | ----------- |
| val      | string, number, boolean or object | html attribute `value`  | null    | false       |
| value    | array, string, number or boolean  | current value `v-model` | `false` | false       |
| name     |              string               | html attribute          | null    | false       |
| radio    |              boolean              | is radiobutton          | `false` | false       |
| checkbox |              boolean              | is checkbox             | `false` | false       |
| checked  |              boolean              | toggles checked         | `false` | false       |
| required |              boolean              | html attribute          | `false` | false       |
| disabled |              boolean              | html attribute          | `false` | false       |

### `gv-switch`

| Nome     |  Tipo   | Descrição                         | Padrão  | Obrigatório |
| -------- | :-----: | --------------------------------- | ------- | ----------- |
| id       | string  | html attribute                    | -       | false       |
| val      |    -    | html attribute                    | -       | false       |
| value    | boolean | control the check state `v-model` | `false` | false       |
| name     | string  | html attribute                    | -       | false       |
| bg       | string  | background when checked           | -       | false       |
| color    | string  | font color when checked           | -       | false       |
| sm       | boolean | small size                        | `false` | false       |
| disabled | string  | html attribute                    | -       | false       |

## Eventos

### `gv-input`

| Nome    | Retorno | Descrição      |
| ------- | ------- | -------------- |
| onclick | event   | click callback |
| onfocus | event   | focus callback |
| onblur  | event   | blur callback  |

### `gv-input-file`

| Nome     | Retorno | Descrição                          |
| -------- | ------- | ---------------------------------- |
| onchange | object  | triggered when files were selected |

## Slots

### `gv-input-box`

| Nome    | Descrição            |
| ------- | -------------------- |
| default | content of the label |

### `gv-switch`

| Nome   | Descrição                 |
| ------ | ------------------------- |
| circle | content inside the circle |
| on     | content when on           |
| off    | content when off          |
