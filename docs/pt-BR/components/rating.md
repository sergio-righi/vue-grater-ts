# Avaliação

O `gv-rating` fornece uma ferramenta de classificação interativa para usos. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Personalizado

É flexível e pode ser personalizado de acordo com as necessidades.

<rating-example-1 />

<<< @/docs/.vuepress/components/RatingExample1.vue

## Disabled

Ele pode ser desabilitado como uma entrada de formulário através da propriedade `disabled`.

<rating-example-2 />

<<< @/docs/.vuepress/components/RatingExample2.vue

## Options

Existem outras variações disponíveis, como `hidden` e `readonly`. O primeiro oculta os itens desmarcados e o segundo os desabilita sem alterar o estilo.

<rating-example-3 />

<<< @/docs/.vuepress/components/RatingExample3.vue

## Feedback

Pode ser combinado com emoji para criar um feedback personalizado.

<rating-example-4 />

<<< @/docs/.vuepress/components/RatingExample4.vue

## Propriedades

| Nome     |  Tipo   | Descrição                       | Padrão  | Obrigatório |
| -------- | :-----: | ------------------------------- | ------- | ----------- |
| color    | string  | font color                      | -       | false       |
| value    | number  | current value `v-model`         | `0`     | false       |
| icon     | string  | icon name                       | `star`  | false       |
| decimal  | boolean | allows floating-point numbers   | `false` | false       |
| disabled | boolean | html attribute                  | `false` | false       |
| hidden   | boolean | hides empty blocks              | `false` | false       |
| readonly | boolean | disables pointer events         | `false` | false       |
| ten      | boolean | ten items instead of 5          | `false` | false       |
| size     | string  | sets `font-size` style property | -       | false       |
