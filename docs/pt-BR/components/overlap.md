# Overlap

O `gv-overlap` fornece recursos para criar um menu de sobreposição que pode ser controlado de forma programática ou interativa para mostrar/ocultar informações/funcionalidades. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<overlap-example-1 />

<<< @/docs/.vuepress/components/OverlapExample1.vue

## Propriedades

| Nome        |  Tipo   | Descrição                                               | Padrão  | Obrigatório |
| ----------- | :-----: | ------------------------------------------------------- | ------- | ----------- |
| active      | boolean | sets the visibility of the content                      | `false` | false       |
| hidden      | boolean | sets the visibility of the whole component              | `false` | false       |
| hideArrow   | boolean | hides the arrow who indicates the status of the content | `false` | false       |
| dismissible | boolean | enables the button to dismiss the component             | `false` | false       |

## Métodos

| Nome   | Params | Descrição          |
| ------ | ------ | ------------------ |
| open   | -      | open the content   |
| close  | -      | close the content  |
| toggle | -      | toggle the content |
| show   | -      | show the component |
| hide   | -      | hide the component |

## Eventos

| Nome    | Retorno | Descrição      |
| ------- | ------- | -------------- |
| onopen  | object  | open callback  |
| onclose | object  | close callback |
| onshow  | object  | show callback  |
| onhide  | object  | hide callback  |

## Slots

| Nome    | Descrição                 |
| ------- | ------------------------- |
| header  | insert the header content |
| content | insert the content        |
