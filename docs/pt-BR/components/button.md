# Botão

O `gv-button` substitui o botão html padrão e adiciona alguns recursos. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Estilo

Você pode modificar a forma ou o estilo do componente usando suas opções.

<button-example-1 />

<<< @/docs/.vuepress/components/ButtonExample1.vue

## Tamanho

Existem dois tamanhos predefinidos `sm` e `lg`.

<button-example-2 />

<<< @/docs/.vuepress/components/ButtonExample2.vue

## Action

O componente também possui estilo predefinido para algumas ações.

<button-example-3 />

<<< @/docs/.vuepress/components/ButtonExample3.vue

## Link

Use a propriedade `href` para criar um link.

<button-example-4 />

<<< @/docs/.vuepress/components/ButtonExample4.vue

## Button Group

O grupo de botões é um controlador para um grupo de botões.

<button-example-5 />

<<< @/docs/.vuepress/components/ButtonExample5.vue

## Float Action Button (FAB)

Uma variação do componente anterior é um botão flutuante que fica fixo na janela.

<button-example-6 />

<<< @/docs/.vuepress/components/ButtonExample6.vue

## Propriedades

### `gv-button`

| Nome    |  Tipo   | Descrição                | Padrão  | Obrigatório |
| ------- | :-----: | ------------------------ | ------- | ----------- |
| bg      | string  | background               | -       | false       |
| color   | string  | font color               | -       | false       |
| stretch | boolean | fit to parent            | `false` | false       |
| flat    | boolean | text only style          | `false` | false       |
| square  | boolean | border shape             | `false` | false       |
| sm      | boolean | small size               | `false` | false       |
| lg      | boolean | large size               | `false` | false       |
| round   | boolean | border shape             | `false` | false       |
| outline | boolean | no background style      | `false` | false       |
| process | boolean | toggles a process icon   | `false` | false       |
| active  | boolean | toggle selected style    | `false` | false       |
| primary | boolean | predefined style         | `false` | false       |
| success | boolean | predefined style         | `false` | false       |
| error   | boolean | predefined style         | `false` | false       |
| warning | boolean | predefined style         | `false` | false       |
| info    | boolean | predefined style         | `false` | false       |
| button  | boolean | prevent submit attribute | `false` | false       |
| href    | string  | html attribute           | -       | false       |

### `gv-button-group`

| Nome  |  Tipo   | Descrição      | Padrão  | Obrigatório |
| ----- | :-----: | -------------- | ------- | ----------- |
| fluid | boolean | fit to content | `false` | false       |
| sm    | boolean | size           | `false` | false       |
| lg    | boolean | size           | `false` | false       |

### `gv-fab`

| Nome       |  Tipo   | Descrição      | Padrão  | Obrigatório |
| ---------- | :-----: | -------------- | ------- | ----------- |
| id         | string  | html attribute | -       | false       |
| bg         | string  | background     | -       | false       |
| color      | string  | font color     | -       | false       |
| sm         | boolean | size           | `false` | false       |
| lg         | boolean | size           | `false` | false       |
| horizontal | boolean | orientation    | `true`  | false       |

## Eventos

`gv-button`

| Nome    | Retorno | Descrição      |
| ------- | ------- | -------------- |
| onclick | -       | click callback |

`gv-fab`

| Nome    | Retorno     | Descrição      |
| ------- | ----------- | -------------- |
| onopen  | DOM element | open callback  |
| onclose | DOM element | close callback |

`gv-fab-item`

| Nome    | Retorno | Descrição      |
| ------- | ------- | -------------- |
| onclick | event   | click callback |

## Slots

`gv-fab`

| Nome    | Descrição                               |
| ------- | --------------------------------------- |
| open    | icon when closed                        |
| close   | icon when opened                        |
| content | content when opened                     |
| control | static icon with content always visible |
