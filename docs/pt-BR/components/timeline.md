# Linha do tempo

A `gv-timeline` é útil para exibir estilisticamente informações cronológicas. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<timeline-example-1 />

<<< @/docs/.vuepress/components/TimelineExample1.vue

## Options

O componente fornece várias opções que o tornam flexível.

<timeline-example-2 />

<<< @/docs/.vuepress/components/TimelineExample2.vue

## Propriedades

### `gv-timeline-item`

| Nome     |  Tipo   | Descrição   | Padrão  | Obrigatório |
| -------- | :-----: | ----------- | ------- | ----------- |
| icon     | string  | name        | -       | false       |
| image    | string  | path        | -       | false       |
| header   | string  | header text | -       | false       |
| success  | boolean | status      | `false` | false       |
| sm       | boolean | small size  | `false` | false       |
| lg       | boolean | large size  | `false` | false       |
| error    | boolean | status      | `false` | false       |
| active   | boolean | status      | `false` | false       |
| warning  | boolean | status      | `false` | false       |
| disabled | boolean | status      | `false` | false       |
