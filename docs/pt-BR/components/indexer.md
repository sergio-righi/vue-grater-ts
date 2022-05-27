# Indexador

O `gv-indexer` fornece um indexador para classificar uma lista de itens. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<indexer-example-1 />

<<< @/docs/.vuepress/components/IndexerExample1.vue

## Propriedades

### `gv-indexer`

| Nome      |  Tipo   | Descrição                        | Padrão  | Obrigatório |
| --------- | :-----: | -------------------------------- | ------- | ----------- |
| shortcut  | boolean | keyboard shortcut `alt+key`      | `true`  | true        |
| highlight | boolean | highlight on scroll              | `true`  | false       |
| nav       | boolean | toggles nav                      | `true`  | false       |
| top       | boolean | nav on top                       | `false` | false       |
| right     | boolean | nav on right                     | `false` | false       |
| hidden    | boolean | hides the title between sections | `false` | false       |

### `gv-indexer-item`

| Nome   |  Tipo  | Descrição                 | Padrão | Obrigatório |
| ------ | :----: | ------------------------- | ------ | ----------- |
| header | string | header and sort parameter | -      | true        |
