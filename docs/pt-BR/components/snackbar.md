# Snackbar

O `gv-snackbar` é usado para exibir uma mensagem rápida para um usuário. Snackbars suportam posicionamento, controle de tempo limite e retornos de chamada. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<snackbar-example-1 />

<<< @/docs/.vuepress/components/SnackbarExample1.vue

## Personalizado

É flexível e pode ser personalizado de acordo com as necessidades.

<snackbar-example-2 />

<<< @/docs/.vuepress/components/SnackbarExample2.vue

## Propriedades

| Nome    |  Tipo   | Descrição                        | Padrão | Obrigatório |
| ------- | :-----: | -------------------------------- | ------ | ----------- |
| timeout | number  | time before hide in milliseconds | `3000` | false       |
| message | string  | content message                  | -      | true        |
| left    | boolean | positioning                      | -      | false       |
| action  | string  | action label                     | -      | false       |
| dismiss | string  | dismiss label                    | `Hide` | false       |
| right   | boolean | positining                       | -      | false       |
| visible | boolean | sets visibility state            | -      | false       |

## Eventos

| Nome    | Retorno | Descrição       |
| ------- | :-----: | --------------- |
| onclick |    -    | action callback |
| onshow  |    -    | open callback   |
| onhide  |    -    | close callback  |
