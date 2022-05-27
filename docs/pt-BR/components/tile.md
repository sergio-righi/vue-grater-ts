# Tile

O `gv-tile` é usado para exibir informações que podem ser usadas em listas, cartões, etc. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<tile-example-1 />

<<< @/docs/.vuepress/components/TileExample1.vue

## Options

As opções podem ser misturadas para adaptar o componente de acordo com as necessidades.

<tile-example-2 />

<<< @/docs/.vuepress/components/TileExample2.vue

## Personalizado

É flexível e pode interagir com diferentes componentes como `checkboxes`.

<tile-example-3 />

<<< @/docs/.vuepress/components/TileExample3.vue

## Propriedades

### `gv-tile`

| Nome      |            Tipo            | Descrição                      | Padrão  | Obrigatório |
| --------- | :------------------------: | ------------------------------ | ------- | ----------- |
| href      | string, ojbect or function | html attribute                 | -       | false       |
| target    |           string           | hyperlink open mode            | `_self` | false       |
| bg        |           string           | background                     | -       | false       |
| color     |           string           | font color                     | -       | false       |
| header    |          boolean           | header style                   | `false` | false       |
| active    |          boolean           | toggles the expandable content | `false` | false       |
| activable |          boolean           | enables the active feature     | `false` | false       |
| disabled  |          boolean           | disables action events         | `false` | false       |

### `gv-tile-header`

| Nome |  Tipo   | Descrição | Padrão  | Obrigatório |
| ---- | :-----: | --------- | ------- | ----------- |
| sub  | boolean | style     | `false` | false       |
| sm   | boolean | size      | `false` | false       |

## Slots

| Nome       | Descrição             |
| ---------- | --------------------- |
| leading    | before content        |
| content    | sets the main content |
| trailing   | after content         |
| expandable | hidden content        |
