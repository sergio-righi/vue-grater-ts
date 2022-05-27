# Dropdown

O `gv-dropdown` fornece um menu suspenso com itens. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Header

O exemplo padrão de uso da propriedade `header`.

<dropdown-example-1 />

<<< @/docs/.vuepress/components/DropdownExample1.vue

## Left

O componente pode ser posicionado manualmente para abrir para a esquerda.

<dropdown-example-2 />

<<< @/docs/.vuepress/components/DropdownExample2.vue

## Personalizado

O componente pode ser posicionado manualmente para abrir à esquerda. Pode ser personalizado para ter diferentes seções.

<dropdown-example-3 />

<<< @/docs/.vuepress/components/DropdownExample3.vue

## Propriedades

### `gv-dropdown`

| Nome   |  Tipo   | Descrição               | Padrão  | Obrigatório |
| ------ | :-----: | ----------------------- | ------- | ----------- |
| left   | boolean | position                | `false` | false       |
| arrow  | boolean | toggles arrow icon      | `false` | false       |
| active | boolean | sets dropdown visiblity | `false` | false       |

### `gv-dropdown-item`

| Nome        |            Tipo            | Descrição           | Padrão  | Obrigatório |
| ----------- | :------------------------: | ------------------- | ------- | ----------- |
| header      |          boolean           | show item as header | `false` | false       |
| href        | string, object or function | html attribute      | -       | false       |
| target      |           string           | hyperlink open mode | `_self` | false       |
| href        |           string           | anchor              | -       | false       |
| onclick     |          function          | click callback      | -       | false       |
| onmousedown |          function          | mousedown callback  | -       | false       |

## Eventos

`gv-dropdown`

| Nome    | Retorno | Descrição      |
| ------- | ------- | -------------- |
| onopen  | -       | open callback  |
| onclose | -       | close callback |

`gv-dropdown-item`

| Nome        | Retorno | Descrição          |
| ----------- | ------- | ------------------ |
| onclick     | event   | click callback     |
| onmousedown | event   | mousedown callback |

## Slots

| Nome    | Descrição                  |
| ------- | -------------------------- |
| content | insert the content (items) |
