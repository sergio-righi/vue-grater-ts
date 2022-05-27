# Modal

O `gv-model` fornece uma maneira de exibir informações e formulários para o usuário. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Static

O exemplo padrão do componente.

<modal-example-1 />

<<< @/docs/.vuepress/components/ModalExample1.vue

## Dynamic

Ele permite que você incorpore conteúdo dentro do componente.

<modal-example-2 />

<<< @/docs/.vuepress/components/ModalExample2.vue

## Embed

Torna o componente invisível para incorporar o conteúdo.

<modal-example-3 />

<<< @/docs/.vuepress/components/ModalExample3.vue

## Propriedades

| Nome   |  Tipo  | Descrição                | Padrão  | Obrigatório |
| ------ | :----: | ------------------------ | ------- | ----------- |
| sm     | string | size                     | `false` | false       |
| embed  | string | hides the content margin | `false` | false       |
| active | string | toggles visibility       | `false` | false       |
| ready  | string | lazyload                 | `true`  | false       |

## Métodos

| Nome  | Params | Descrição      |
| ----- | ------ | -------------- |
| open  | -      | show the modal |
| close | -      | hide the modal |

## Eventos

| Nome    | Retorno     | Descrição      |
| ------- | ----------- | -------------- |
| onopen  | DOM element | open callback  |
| onclose | DOM element | close callback |

## Slots

| Nome    | Descrição        |
| ------- | ---------------- |
| header  | sets the header  |
| content | sets the content |
| footer  | sets the footer  |
