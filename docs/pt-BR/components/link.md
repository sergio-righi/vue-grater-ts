### Link

O `gv-link` substitui o link html padrão e adiciona alguns recursos. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Padrão

O exemplo padrão do componente.

<link-example-1 />

<<< @/docs/.vuepress/components/LinkExample1.vue

## Slot

Ele pode ser usado para envolver outros componentes.

<link-example-2 />

<<< @/docs/.vuepress/components/LinkExample2.vue

## Propriedades

| Nome   |  Tipo  | Descrição           | Padrão  | Obrigatório |
| ------ | :----: | ------------------- | ------- | ----------- |
| href   | string | html attribute      | -       | false       |
| target | string | hyperlink open mode | `_self` | false       |
