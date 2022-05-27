# Chip

O `gv-chip` é usado para exibir pequenas informações. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Estilo

Você pode modificar a forma ou o estilo do componente usando suas opções.

<chip-example-1 />

<<< @/docs/.vuepress/components/ChipExample1.vue

## Tamanho

Existem dois tamanhos personalizáveis predefinidos `sm` e `lg`.

<chip-example-2 />

<<< @/docs/.vuepress/components/ChipExample2.vue

## Dismissible

Ele pode ser descartado se a propriedade `dismissible` for definida como `true`. Há também a possibilidade de mostrar uma caixa de diálogo de confirmação configurando a propriedade `message`.

<chip-example-3 />

<<< @/docs/.vuepress/components/ChipExample3.vue

## Personalizado

Pode ser personalizado adicionando imagens e ícones.

<chip-example-4 />

<<< @/docs/.vuepress/components/ChipExample4.vue

## Propriedades

| Nome        |            Tipo            | Descrição                       | Padrão  | Obrigatório |
| ----------- | :------------------------: | ------------------------------- | ------- | ----------- |
| href        | string, object or function | html attribute                  | -       | false       |
| target      |           string           | hyperlink open mode             | `_self` | false       |
| bg          |           string           | background                      | -       | false       |
| color       |           string           | font color                      | -       | false       |
| square      |          boolean           | border shape                    | `false` | false       |
| sm          |          boolean           | small size                      | `false` | false       |
| lg          |          boolean           | large size                      | `false` | false       |
| round       |          boolean           | border shape                    | `false` | false       |
| active      |          boolean           | active style                    | `false` | false       |
| outline     |          boolean           | transparent                     | `false` | false       |
| dismissible |          boolean           | toggles dismiss                 | `false` | false       |
| focusable   |          boolean           | makes the component focusable   | `false` | false       |
| message     |           string           | enables the dialog confirmation | -       | false       |

## Eventos

| Nome      | Retorno     | Descrição        |
| --------- | ----------- | ---------------- |
| ondismiss | DOM element | dismiss callback |

## Slots

| Nome    | Descrição                              |
| ------- | -------------------------------------- |
| leading | insert content before the main content |
| content | inner content                          |
