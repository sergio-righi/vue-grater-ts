# Aba

O `gv-tab` é usado para ocultar conteúdo atrás de um item selecionável. Isso também pode ser usado como uma pseudo-navegação para uma página, onde as guias são links e os itens de guia são o conteúdo. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<tab-example-1 />

<<< @/docs/.vuepress/components/TabExample1.vue

## Upside Down

A opção de mover o cabeçalho para a parte inferior.

<tab-example-2 />

<<< @/docs/.vuepress/components/TabExample2.vue

## Icon

O componente suporta ícones.

<tab-example-3 />

<<< @/docs/.vuepress/components/TabExample3.vue

## Personalizado

As opções podem ser misturadas para adaptar o componente de acordo com as necessidades.

<tab-example-4 />

<<< @/docs/.vuepress/components/TabExample4.vue

## Propriedades

### `gv-tab`

| Nome       |  Tipo   | Descrição             | Padrão  | Obrigatório |
| ---------- | :-----: | --------------------- | ------- | ----------- |
| tab        | number  | current active tab    | `1`     | false       |
| bg         | string  | background            | -       | false       |
| stretch    | boolean | fit to parent         | `false` | false       |
| color      | string  | font color            | -       | false       |
| right      | boolean | align header to right | `false` | false       |
| upsidedown | boolean | invert header         | `false` | false       |
| embed      | boolean | toggles the border    | `false` | false       |

### `gv-tab-item`

| Nome     |  Tipo   | Descrição             | Padrão  | Obrigatório |
| -------- | :-----: | --------------------- | ------- | ----------- |
| name     | string  | tab header            | -       | false       |
| icon     | string  | icon name             | -       | false       |
| disabled | boolean | prevent action events | `false` | false       |
