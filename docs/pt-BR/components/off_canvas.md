# Off Canvas

O `gv-off-canvas` fornece recursos para exibir informações em uma tela sobreposta. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<off-canvas-example-1 />

<<< @/docs/.vuepress/components/OffCanvasExample1.vue

## Propriedades

| Nome     |  Tipo   | Descrição                                         | Padrão  | Obrigatório |
| -------- | :-----: | ------------------------------------------------- | ------- | ----------- |
| active   | boolean | sets the visibility of the canvas                 | `false` | false       |
| left     | boolean | sets the canvas to the left side                  | `false` | false       |
| right    | boolean | sets the canvas to the right side                 | `false` | false       |
| locked   | boolean | locks the scroll when the canvas open             | `false` | false       |
| required | boolean | disables the click on the overlay to close option | `false` | false       |

## Métodos

| Nome   | Params | Descrição                          |
| ------ | ------ | ---------------------------------- |
| open   | -      | show the canvas                    |
| close  | -      | hide the canvas                    |
| toggle | -      | hide if visible and show if hidden |

## Eventos

| Nome       | Retorno | Descrição         |
| ---------- | ------- | ----------------- |
| onopen     | object  | open callback     |
| onclose    | object  | close callback    |
| onrequired | object  | required callback |

## Slots

| Nome    | Descrição                          |
| ------- | ---------------------------------- |
| trigger | insert the trigger content         |
| content | insert the content into the canvas |
