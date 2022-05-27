# Badge

O `gv-badge` é usado principalmente para destacar informações para um usuário, geralmente sobre um ícone, mas pode ser exibido ao lado dele. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Estilo

Existem basicamente três tipos, o `ponto` onde você não quer mostrar nenhum valor, a `esquerda` que você pode posicionar o emblema ao lado do elemento e o padrão.

<badge-example-1 />

<<< @/docs/.vuepress/components/BadgeExample1.vue

## Image

Você também pode usar o componente com imagens.

<badge-example-2 />

<<< @/docs/.vuepress/components/BadgeExample2.vue

## Personalizado

Você pode personalizar o `fundo` e a `cor da fonte` do componente usando os adereços `bg` e `color`.

<badge-example-3 />

<<< @/docs/.vuepress/components/BadgeExample3.vue

## Propriedades

| Nome    |       Tipo       | Descrição                            | Padrão  | Obrigatório |
| ------- | :--------------: | ------------------------------------ | ------- | ----------- |
| bg      |      string      | background                           | -       | false       |
| color   |      string      | font color                           | -       | false       |
| value   | number or string | the value to be displayed            | -       | false       |
| dot     |     boolean      | option without value                 | `false` | false       |
| left    |     boolean      | component on left                    | `false` | false       |
| bottom  |     boolean      | component on bottom                  | `false` | false       |
| inline  |     boolean      | inline component instead of floating | `false` | false       |
| overlap |     boolean      | overlap the content                  | `true`  | false       |
| round   |     boolean      | border shape                         | `false` | false       |
| tile    |     boolean      | border shape                         | `false` | false       |
