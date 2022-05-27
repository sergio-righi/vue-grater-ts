# Votação

O `gv-poll` é uma ferramenta para fornecer uma maneira fácil e simples de criar enquetes. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Como utilizar

O exemplo padrão do componente.

<poll-example-1 />

<<< @/docs/.vuepress/components/PollExample1.vue

## Propriedades

| Nome     |  Tipo   | Descrição                                             | Padrão | Obrigatório |
| -------- | :-----: | ----------------------------------------------------- | ------ | ----------- |
| value    |  array  | the items that will be displayed as options `v-model` | `[]`   | true        |
| done     | boolean | sets the status as done to show the results           | -      | false       |
| selected | number  | marks the selected item                               | `-1`   | false       |

## Eventos

| Nome   | Retorno | Descrição                          |
| ------ | ------- | ---------------------------------- |
| onvote | number  | return the index of the voted item |

## Slots

| Nome   | Descrição                       |
| ------ | ------------------------------- |
| header | the description of the question |
| footer | footnotes                       |
