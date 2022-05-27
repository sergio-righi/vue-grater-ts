# Imagem

O `gv-image` substitui o html padrão img e adiciona alguns recursos. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<image-example-1 />

<<< @/docs/.vuepress/components/ImageExample1.vue

## Propriedades

| Nome     |            Tipo            | Descrição                      | Padrão  | Obrigatório |
| -------- | :------------------------: | ------------------------------ | ------- | ----------- |
| src      |           string           | image path                     | -       | true        |
| href     | string, object or function | html attribute                 | -       | false       |
| target   |           string           | hyperlink open mode            | `_self` | false       |
| alt      |           string           | html attribute                 | -       | false       |
| lazyload |          boolean           | toggles indeterminate process  | `false` | false       |
| square   |          boolean           | border shape                   | `false` | false       |
| circle   |          boolean           | border shape                   | `false` | false       |
| no-cache |          boolean           | adds current time              | `false` | false       |
| hover    |          boolean           | adds an effect on hover        | `false` | false       |
| zoom     |          boolean           | enables zoom on click          | `false` | false       |
| top      |          boolean           | positions inner content on top | `false` | false       |

## Eventos

| Nome    | Retorno | Descrição              |
| ------- | ------- | ---------------------- |
| onload  | object  | done loading callback  |
| onerror | object  | error on load callback |
