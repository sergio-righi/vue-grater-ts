# Breadcrumb

O `gv-breadcrumb` é um auxiliar de navegação para páginas. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão usando a propriedade `href`.

<breadcrumb-example-1 />

<<< @/docs/.vuepress/components/BreadcrumbExample1.vue

## Propriedades

### `gv-breaadcrumb`

| Nome  |  Tipo  | Descrição    | Padrão | Obrigatório |
| ----- | :----: | ------------ | ------ | ----------- |
| title | string | current page | -      | true        |

### `gv-breaadcrumb-item`

| Nome   |            Tipo            | Descrição           | Padrão  | Obrigatório |
| ------ | :------------------------: | ------------------- | ------- | ----------- |
| label  |           string           | link description    | -       | true        |
| href   | string, object or function | html attribute      | -       | false       |
| target |           string           | hyperlink open mode | `_self` | false       |
