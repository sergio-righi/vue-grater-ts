# Carrossel

O `gv-carousel` é um controle deslizante de imagem para exibir um grupo de imagens. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<carousel-example-1 />

<<< @/docs/.vuepress/components/CarouselExample1.vue

## Propriedades

| Nome      |  Tipo   | Descrição                                        | Padrão   | Obrigatório |
| --------- | :-----: | ------------------------------------------------ | -------- | ----------- |
| items     |  array  | component items (images)                         | null     | true        |
| rewind    | boolean | moves backward when it reachs the last item      | null     | false       |
| slideshow | number  | delay of the transition                          | null     | false       |
| nav       | boolean | toggles navigation dots                          | `true`   | false       |
| arrow     | boolean | toggles arrows                                   | `true`   | false       |
| loop      | boolean | goes to the first item when it reachs the last   | `true`   | false       |
| control   | string  | style of the dots `circle`, `square` or `number` | `circle` | false       |
| selected  | number  | current item index                               | `0`      | false       |
| backward  | boolean | inverts the direction of the slideshow           | `false`  | false       |
| embed     |  embed  | hides border                                     | `false`  | false       |

## Métodos

| Nome | Params | Descrição             |
| ---- | :----: | --------------------- |
| move |  int   | index of the item     |
| prev |   -    | move to previous item |
| next |   -    | move to next item     |

## Eventos

| Nome   | Retorno | Descrição     |
| ------ | ------- | ------------- |
| onmove | -       | move callback |
