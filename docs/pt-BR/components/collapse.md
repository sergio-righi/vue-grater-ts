# Accordion

O `gv-collapse` fornece um painel onde você pode ocultar o conteúdo. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Exclusive

Cada painel é exclusivo o que significa que quando você abre um o outro fecha.

<collapse-example-1 />

<<< @/docs/.vuepress/components/CollapseExample1.vue

## Multilevel

Os painéis podem ter mais painéis como filhos.

<collapse-example-2 />

<<< @/docs/.vuepress/components/CollapseExample2.vue

## Personalizado

Ele pode ser personalizado para atender a algumas necessidades específicas.

<collapse-example-3 />

<<< @/docs/.vuepress/components/CollapseExample3.vue

## Propriedades

### `<gv-collapse/>`

| Nome       |  Tipo   | Descrição           | Padrão  | Obrigatório |
| ---------- | :-----: | ------------------- | ------- | ----------- |
| exclusive  | boolean | one at a time       | `false` | false       |
| outline    | boolean | no background style | `false` | false       |
| hide-arrow | boolean | hides arrow icon    | `false` | false       |

### `<gv-collapse-item/>`

| Nome   |  Tipo   | Descrição       | Padrão  | Obrigatório |
| ------ | :-----: | --------------- | ------- | ----------- |
| active | boolean | sets visibility | `false` | false       |

## Eventos

| Nome    | Retorno | Descrição      |
| ------- | ------- | -------------- |
| onopen  | -       | open callback  |
| onclose | -       | close callback |

## Slots

| Nome     | Descrição              |
| -------- | ---------------------- |
| header   | header content         |
| title    | title inside header    |
| subtitle | subtitle inside header |
| icon     | content before         |
| control  | content after          |
| content  | sets the main content  |
