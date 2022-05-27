# Story

O `gv-story` é usado para exibir imagens e vídeos de maneira semelhante a histórias. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<story-example-1 />

<<< @/docs/.vuepress/components/StoryExample1.vue

## Propriedades

### `gv-story`

| Nome     |       Tipo       | Descrição                                       | Padrão | Obrigatório |
| -------- | :--------------: | ----------------------------------------------- | ------ | ----------- |
| duration |      number      | the transition for each slide (in milliseconds) | `3000` | false       |
| ratioX   | number or string | ratio for the X axis                            | `9`    | false       |
| ratioY   | number or string | ratio for the Y axis                            | `16`   | false       |

### `gv-story-item`

| Nome |  Tipo  | Descrição           | Padrão | Obrigatório |
| ---- | :----: | ------------------- | ------ | ----------- |
| src  | string | image or video path | -      | false       |

## Métodos

| Nome    | Params  | Descrição                  |
| ------- | ------- | -------------------------- |
| restart | -       | restart the slideshow      |
| pause   | -       | pause/play the slideshow   |
| move    | boolean | move to next/previous item |

## Eventos

| Nome   | Retorno | Descrição                  |
| ------ | ------- | -------------------------- |
| ondone | -       | slideshow is done callback |
