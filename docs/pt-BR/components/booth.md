# Estande

O `gv-booth` fornece uma maneira de exibir itens como uma grade. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

Cria a grade através da propriedade `items`.

<booth-example-1 />

<<< @/docs/.vuepress/components/BoothExample1.vue

## Slot

Cria a grade usando slots.

<booth-example-2 />

<<< @/docs/.vuepress/components/BoothExample2.vue

## Propriedades

| Nome  |  Tipo  | Descrição               | Padrão | Obrigatório |
| ----- | :----: | ----------------------- | ------ | ----------- |
| items | array  | object array with items | `[]`   | false       |
| gap   | number | gap between items       | `10`   | false       |
