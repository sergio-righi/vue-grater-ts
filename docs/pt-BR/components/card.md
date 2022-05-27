# Card

O `gv-card` é um componente versátil que pode ser usado para qualquer coisa, desde um painel até uma imagem estática. Tem muitas variações onde você pode customizar do jeito que você precisa. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

Algumas das maneiras mais simples de usar o componente.

<card-example-1 />

<<< @/docs/.vuepress/components/CardExample1.vue

## Image

Exibir uma imagem estática.

<card-example-2 />

<<< @/docs/.vuepress/components/CardExample2.vue

## Personalizado

A criatividade é o limite.

<card-example-3 />

<<< @/docs/.vuepress/components/CardExample3.vue

## Propriedades

| Nome   |            Tipo            | Descrição           | Padrão  | Obrigatório |
| ------ | :------------------------: | ------------------- | ------- | ----------- |
| bg     |           string           | background          | -       | false       |
| color  |           string           | font color          | -       | false       |
| border |           string           | color               | -       | false       |
| href   | string, object or function | html attribute      | -       | false       |
| target |           string           | hyperlink open mode | `_self` | false       |
| flex   |          boolean           | stretch the height  | `false` | false       |
| embed  |          boolean           | no border           | `false` | false       |

## Slots

| Nome    | Descrição             |
| ------- | --------------------- |
| header  | before content        |
| content | sets the main content |
| footer  | after content         |
