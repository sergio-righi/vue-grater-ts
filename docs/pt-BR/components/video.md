# Vídeo

O `gv-video` fornece um player de vídeo completo. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Como utilizar

O exemplo padrão do componente.

<video-example-1 />

<<< @/docs/.vuepress/components/VideoExample1.vue

## Propriedades

### `gv-video`

| Nome     |       Tipo       | Descrição                         | Padrão  | Obrigatório |
| -------- | :--------------: | --------------------------------- | ------- | ----------- |
| loop     |     boolean      | restart as it ends                | `false` | false       |
| autoplay |     boolean      | stats when ready                  | `false` | false       |
| volume   | number or string | sets de default volume `0` to `1` | `1`     | false       |
| poster   | object or string | the poster image path             | null    | false       |
| time     |      number      | the start time in seconds         | `0`     | false       |
| undock   |     boolean      | toggles undock feature            | `false` | false       |

### `gv-video-item`

| Nome       |  Tipo  | Descrição                        | Padrão | Obrigatório |
| ---------- | :----: | -------------------------------- | ------ | ----------- |
| src        | string | path where the source is located | null   | true        |
| resolution | string | source resolution                | null   | true        |
