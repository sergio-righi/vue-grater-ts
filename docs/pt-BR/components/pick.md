# Escolha

O `gv-pick` é uma maneira interativa de os usuários escolherem o item que preferem considerando uma determinada situação. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<pick-example-1 />

<<< @/docs/.vuepress/components/PickExample1.vue

## Propriedades

### `gv-pick`

| Nome       |     Tipo     | Descrição                                              | Padrão  | Obrigatório |
| ---------- | :----------: | ------------------------------------------------------ | ------- | ----------- |
| shown      |    number    | current active tab                                     | `5`     | false       |
| height     |    number    | height of the container (in pixels)                    | `450`   | false       |
| items      |   object\*   | items to be displayed                                  | `[]`    | false       |
| shuffle    |   boolean    | enable/disable shuffle control button                  | `true`  | false       |
| contest    |   boolean    | removes after competing                                | `false` | false       |
| validation | function\*\* | function to be run on picking the items                | -       | false       |
| duration   |    number    | enable/disable timer to pick (in milliseconds) >= 1000 | `0`     | false       |

\* o objeto deve conter uma propriedade chamada `src`. Uma propriedade chamada `description` também é esperada, mas não obrigatória. Outras propriedades, como `id`, não são usadas pelo componente, mas são úteis para outras ações.

\*\* a função recebe dois parâmetros com os índices selecionados e deve retornar `true` ou `false` para informar a função principal se os valores escolhidos são válidos ou não

## Eventos

| Nome   | Retorno | Descrição                                                           |
| ------ | ------- | ------------------------------------------------------------------- |
| onpick | object  | swipe callback that returns the two items, the winner and the loser |
