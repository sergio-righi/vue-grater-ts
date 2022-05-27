# Lista

A `gv-list` substitui o html padrão `ul` e `ol`, bem como adiciona alguns recursos. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## UL

O exemplo padrão do componente.

<list-example-1 />

<<< @/docs/.vuepress/components/ListExample1.vue

## OL

O exemplo padrão da opção `ol`.

<list-example-2 />

<<< @/docs/.vuepress/components/ListExample2.vue

## Slot

O mesmo que o exemplo acima usando slots.

<list-example-3 />

<<< @/docs/.vuepress/components/ListExample3.vue

## Tree

O exemplo padrão da opção `tree`.

<list-example-4 />

<<< @/docs/.vuepress/components/ListExample4.vue

## Propriedades

| Nome  |  Tipo   | Descrição           | Padrão  | Obrigatório |
| ----- | :-----: | ------------------- | ------- | ----------- |
| ol    | boolean | ordered style       | `false` | false       |
| tree  | boolean | tree style          | `false` | false       |
| items |  array  | content of the list | `[]`    | false       |
