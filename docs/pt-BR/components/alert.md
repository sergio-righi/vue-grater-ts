# Alerta

O `gv-alert` fornece mensagens de feedback para ações do usuário. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Tipos

Os tipos suportados são `sucesso`, `aviso`, `erro` e `info`.

<alert-example-1/>

<<< @/docs/.vuepress/components/AlertExample1.vue

## Estilo

Existe outra opção de estilo definindo a propriedade `outline`.

<alert-example-2/>

<<< @/docs/.vuepress/components/AlertExample2.vue

## Header

Você pode destacar o componente adicionando o cabeçalho.

<alert-example-3 />

<<< @/docs/.vuepress/components/AlertExample3.vue

## Dismissible

Permite que o usuário ignore o alerta.

<alert-example-4 />

<<< @/docs/.vuepress/components/AlertExample4.vue

## Multiple

Insira vários itens para criar paginação.

<alert-example-5 />

<<< @/docs/.vuepress/components/AlertExample5.vue

## Slot

Use slots para personalizar o conteúdo.

<alert-example-6 />

<<< @/docs/.vuepress/components/AlertExample6.vue

## Propriedades

`gv-alert`

| Nome        |  Tipo   | Descrição                                      | Padrão  | Obrigatório |
| ----------- | :-----: | ---------------------------------------------- | ------- | ----------- |
| loop        | boolean | goes to the first item when it reachs the last | `false` | false       |
| outline     | boolean | no background style                            | `false` | false       |
| message     | boolean | enables the dialog confirmation                | `false` | false       |
| dismissible | boolean | toggles dismiss                                | `false` | false       |

`gv-alert-item`

| Nome    |            Tipo            | Descrição           | Padrão  | Obrigatório |
| ------- | :------------------------: | ------------------- | ------- | ----------- |
| href    | string, object or function | html attribute      | -       | false       |
| target  |           string           | hyperlink open mode | `_self` | false       |
| bg      |           string           | background          | -       | false       |
| color   |           string           | font color          | -       | false       |
| info    |          boolean           | predefined style    | `false` | false       |
| error   |          boolean           | predefined style    | `false` | false       |
| active  |          boolean           | toggles selected    | `false` | false       |
| success |          boolean           | predefined style    | `false` | false       |
| warning |          boolean           | predefined style    | `false` | false       |
| primary |          boolean           | predefined style    | `false` | false       |

## Eventos

| Nome      | Retorno     | Descrição        |
| --------- | ----------- | ---------------- |
| ondismiss | DOM element | dismiss callback |
