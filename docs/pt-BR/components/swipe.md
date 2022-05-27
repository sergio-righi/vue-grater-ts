# Swipe

O `gv-swipe` é uma forma interativa de exibir situações de sim/não para os usuários, além da possibilidade de adicionar uma terceira ação de acordo com a finalidade do uso. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<swipe-example-1 />

<<< @/docs/.vuepress/components/SwipeExample1.vue

## Propriedades

### `gv-swipe`

| Nome      |   Tipo   | Descrição                                    | Padrão  | Obrigatório |
| --------- | :------: | -------------------------------------------- | ------- | ----------- |
| shown     |  number  | current active tab                           | `5`     | false       |
| height    |  number  | height of the container (in pixels)          | `450`   | false       |
| items     | object\* | items to be displayed                        | `[]`    | false       |
| control   | boolean  | show/hide button controls                    | `true`  | false       |
| upward    | boolean  | show/hide thrid action                       | `false` | false       |
| upIcon    | boolean  | icon to be displayed as third                | `star`  | false       |
| leftIcon  | boolean  | icon to be displayed for the negative action | `close` | false       |
| rightIcon | boolean  | icon to be displayed for the positive action | `heart` | false       |

\* o objeto deve conter uma propriedade chamada `src`. Uma propriedade chamada `description` também é esperada, mas não obrigatória. Outras propriedades, como `id`, não são usadas pelo componente, mas são úteis para outras ações.

## Eventos

| Nome             | Retorno  | Descrição                                          |
| ---------------- | -------- | -------------------------------------------------- |
| onswipe          | object\* | swipe callback that returns item and the direction |
| onreachend       | object   | callback when there ain't no more items            |
| onbeforereachend | object   | callback when the items are about to run out       |

\* a direção é `string` e pode ser `left`, `right` ou `up`
