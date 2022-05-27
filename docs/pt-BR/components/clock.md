# Relógio

O `gv-clock` fornece um relógio. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Analog

O exemplo do relógio analógico.

<clock-example-1 />

<<< @/docs/.vuepress/components/ClockExample1.vue

## Digital

O exemplo digital.

<clock-example-2 />

<<< @/docs/.vuepress/components/ClockExample2.vue

## Personalizado

Configurando as propriedades do componente você pode criar um relógio personalizado de acordo com suas necessidades.

<clock-example-3 />

<<< @/docs/.vuepress/components/ClockExample3.vue

## Propriedades

| Nome    |  Tipo   | Descrição                | Padrão               | Obrigatório |
| ------- | :-----: | ------------------------ | -------------------- | ----------- |
| bg      | string  | background               | `gray-400`           | false       |
| value   |  date   | sets the start time      | `now()`              | false       |
| ampm    | boolean | 12 `true` or 24 `false`  | `false`              | false       |
| image   | string  | path to image            | null                 | false       |
| color   | string  | font color               | null                 | false       |
| center  | boolean | position                 | null                 | false       |
| digital | boolean | enables digital style    | null                 | false       |
| label   | object  | sets `am` and `pm` label | `{ am, pm }`         | false       |
| numeral |  array  | sets numbers             | `[1, 2, ... 11, 12]` | false       |
