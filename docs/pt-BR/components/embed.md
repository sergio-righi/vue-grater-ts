# Embed

O `gv-embed` permite incorporar conteúdo de diferentes fontes. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Widescreen

O componente tem o `widescreen` como proporção padrão.

<embed-example-1 />

<<< @/docs/.vuepress/components/EmbedExample1.vue

## Theater

Ele adiciona um quadro ao redor do conteúdo incorporado.

<embed-example-2 />

<<< @/docs/.vuepress/components/EmbedExample2.vue

## Ratio

A proporção do conteúdo pode ser modificada. O componente atualmente suporta `1:1`, `4:3`, `16:9` e `21:9`.

<embed-example-3 />

<<< @/docs/.vuepress/components/EmbedExample3.vue

## Propriedades

| Nome       |  Tipo   | Descrição              | Padrão  | Obrigatório |
| ---------- | :-----: | ---------------------- | ------- | ----------- |
| src        | string  | path                   | -       | true        |
| theater    | boolean | frame around component | `false` | false       |
| square     | boolean | 1:1                    | `false` | false       |
| portrait   | boolean | 4:3                    | `false` | false       |
| widescreen | boolean | 16:9                   | `false` | false       |
| ultrawide  | boolean | 21:9                   | `false` | false       |
