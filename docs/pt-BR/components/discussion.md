# Fórum

A `gv-discussion` tem como objetivo fornecer uma maneira fácil de criar discussões em grupo ou seções de comentários. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Como utilizar

O exemplo padrão do componente.

<discussion-example-1 />

<<< @/docs/.vuepress/components/DiscussionExample1.vue

## Propriedades

### `gv-discussion-item`

| Nome   |  Tipo  | Descrição                         | Padrão | Obrigatório |
| ------ | :----: | --------------------------------- | ------ | ----------- |
| avatar | string | the content of the avatar section | -      | false       |
| header | string | the main content (comment)        | -      | true        |

## Slots

### `gv-discussion`

| Nome    | Descrição        |
| ------- | ---------------- |
| content | sets the content |

### `gv-discussion-item`

| Nome    | Descrição                |
| ------- | ------------------------ |
| control | sets the controls        |
| content | sets the replies content |
