# Paginação

O `gv-pagination` fornece um controlador de paginação para uma lista de itens. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<pagination-example-1 />

<<< @/docs/.vuepress/components/PaginationExample1.vue

## Hide arrow

A opção remover as setas.

<pagination-example-2 />

<<< @/docs/.vuepress/components/PaginationExample2.vue

## Arrow only

Esta opção remove os itens e fornece uma maneira de adicionar conteúdo entre eles.

<pagination-example-3 />

<<< @/docs/.vuepress/components/PaginationExample3.vue

## Propriedades

| Nome       |  Tipo   | Descrição                                      | Padrão  | Obrigatório |
| ---------- | :-----: | ---------------------------------------------- | ------- | ----------- |
| total      | number  | number of pages                                | -       | required    |
| value      | number  | current value `v-model`                        | `1`     | false       |
| max        | number  | max showing pages                              | `7`     | false       |
| center     | boolean | centralize the component                       | `false` | false       |
| hide-arrow | boolean | hides control arrows                           | `false` | false       |
| arrow-only | boolean | hides the pages                                | `false` | false       |
| condensed  | boolean | removes margin                                 | `false` | false       |
| loop       | boolean | goes to the first item when it reachs the last | `false` | false       |
