### Navbar

O `gv-navbar` é usado para criar barras de navegação. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Padrão

O exemplo padrão do componente.

<navbar-example-1 />

<<< @/docs/.vuepress/components/NavbarExample1.vue

## Propriedades

### `gv-navbar`

| Nome    |  Tipo   | Descrição                                     | Padrão  | Obrigatório |
| ------- | :-----: | --------------------------------------------- | ------- | ----------- |
| bg      | string  | background                                    | -       | false       |
| color   | string  | font color                                    | -       | false       |
| fixed   | boolean | sticky on top                                 | `false` | false       |
| center  | boolean | sets content to center                        | `false` | false       |
| sidebar | boolean | hides the menu and add to the sidebar content | `false` | false       |

### `gv-navbar-item`

| Nome   |            Tipo            | Descrição           | Padrão  | Obrigatório |
| ------ | :------------------------: | ------------------- | ------- | ----------- |
| href   | string, object or function | html attribute      | -       | false       |
| target |           string           | hyperlink open mode | `_self` | false       |
| active |          boolean           | toggle highlight    | `false` | false       |

## Slots

| Nome    | Descrição               |
| ------- | ----------------------- |
| brand   | insert the home content |
| menu    | insert left content     |
| control | insert right content    |
