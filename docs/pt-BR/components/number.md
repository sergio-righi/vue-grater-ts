# Númerico

O `gv-number` fornece recursos para controlar uma entrada numérica. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<number-example-1 />

<<< @/docs/.vuepress/components/NumberExample1.vue

## Propriedades

| Nome     |  Tipo   | Descrição                                    | Padrão | Obrigatório |
| -------- | :-----: | -------------------------------------------- | ------ | ----------- |
| min      | number  | minimum value                                | `0`    | false       |
| max      | number  | maximum value                                | `0`    | false       |
| step     | number  | specifies the interval between legal numbers | `1`    | false       |
| value    | number  | current value                                | `0`    | false       |
| loop     | boolean | it simulates a circle                        | -      | false       |
| disabled | boolean | html attribute                               | -      | false       |
