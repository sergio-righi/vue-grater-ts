# Lista de Seleção

The `gv-dual-list` allows to select a list of items based on the provided list. Learn more about the component and its featureas in the following example.

## Como utilizar

O exemplo padrão do componente.

<dual-list-example-1 />

<<< @/docs/.vuepress/components/DualListExample1.vue

## Dynamic

O exemplo dinâmico do componente.

<dual-list-example-2 />

<<< @/docs/.vuepress/components/DualListExample2.vue

## Propriedades

| Nome        |  Tipo   | Descrição                                   | Padrão | Obrigatório |
| ----------- | :-----: | ------------------------------------------- | ------ | ----------- |
| data\*      |  array  | content of the lists                        | `[]`   | false       |
| value\*     |  array  | `v-model` attribute with the selected items | `[]`   | false       |
| hideControl | boolean | hides arrow controls                        | -      | false       |

\* propriedades suportadas `id`, `header`, `subheader`

## Eventos

| Nome     | Retorno       | Descrição                         |
| -------- | ------------- | --------------------------------- |
| onscroll | -             | reach the bottom of page callback |
| onfilter | searched term | input callback                    |
