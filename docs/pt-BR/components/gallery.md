# Galeria

A `gv-gallery` fornece um pop-up de galeria de imagens completo. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<gallery-example-1 />

<<< @/docs/.vuepress/components/GalleryExample1.vue

## Propriedades

| Nome  |  Tipo   | Descrição                                      | Padrão | Obrigatório |
| ----- | :-----: | ---------------------------------------------- | ------ | ----------- |
| items |  array  | object array with images                       | -      | true        |
| arrow | boolean | toggles arrows                                 | `true` | false       |
| loop  | boolean | goes to the first item when it reachs the last | `true` | false       |

## Métodos

| Nome  | Params | Descrição     |
| ----- | ------ | ------------- |
| open  | int    | index         |
| close | -      | close gallery |
