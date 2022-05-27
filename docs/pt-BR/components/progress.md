# Progresso

Este conjunto de componentes tem como objetivo dar ao usuário algum feedback quando o sistema está carregando/aguardando alguma informação.

## Linear

O `gv-progress-linear` fornece uma barra de progresso com estilo linear.

<progress-example-1 />

<<< @/docs/.vuepress/components/ProgressExample1.vue

## Circle

O `gv-progress-circle` fornece uma barra de progresso de estilo circular.

<progress-example-2 />

<<< @/docs/.vuepress/components/ProgressExample2.vue

## Placeholder

O `gv-placeholder` fornece uma maneira mais complexa de exibir o carregamento para o usuário, onde você pode dar uma ideia de como o conteúdo ficará quando for carregado.

<progress-example-3 />

<<< @/docs/.vuepress/components/ProgressExample3.vue

## Propriedades

### `gv-progress-linear`

| Nome          |  Tipo   | Descrição             | Padrão  | Obrigatório |
| ------------- | :-----: | --------------------- | ------- | ----------- |
| indeterminate | boolean | random animation      | `false` | false       |
| percentage    | number  | progress              | `0`     | false       |
| buffer        | number  | percentage loaded     | `0`     | false       |
| query         | boolean | indeterminate while 0 | `false` | false       |
| error         | boolean | sets error style      | `false` | false       |
| success       | boolean | sets success on done  | `false` | false       |
| stream        | stream  | buffering animation   | `false` | false       |

### `gv-progress-circle`

| Nome          |  Tipo   | Descrição            | Padrão  | Obrigatório |
| ------------- | :-----: | -------------------- | ------- | ----------- |
| color         | string  | paint                | `gray`  | false       |
| success       | boolean | sets success on done | `false` | false       |
| percentage    | number  | progress             | `false` | false       |
| size          | number  | diameter in pixels   | `60`    | false       |
| width         | number  | stroke in pixels     | `2`     | false       |
| display       | boolean | show percentage      | `false` | false       |
| dismissible   | boolean | dismiss on done      | `false` | false       |
| indeterminate | boolean | random animation     | `false` | false       |

### `gv-placeholder-align`

| Nome       |  Tipo   | Descrição   | Padrão  | Obrigatório |
| ---------- | :-----: | ----------- | ------- | ----------- |
| vertical   | boolean | orientation | `false` | false       |
| horizontal | boolean | orientation | `false` | false       |

### `gv-placeholder-row`

| Nome  |  Tipo   | Descrição         | Padrão  | Obrigatório |
| ----- | :-----: | ----------------- | ------- | ----------- |
| empty | boolean | transparent line  | `false` | false       |
| thick | boolean | double sized line | `false` | false       |

### `gv-placeholder-item`

| Nome   |  Tipo   | Descrição                 | Padrão  | Obrigatório |
| ------ | :-----: | ------------------------- | ------- | ----------- |
| gap    | boolean | transparent               | `false` | false       |
| image  | boolean | image predetermined size  | `false` | false       |
| sm     | boolean | size                      | `false` | false       |
| avatar | boolean | avatar predetermined size | `false` | false       |
