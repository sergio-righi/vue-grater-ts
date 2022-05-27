# Tabela

A `gv-table` substitui o componente padrão da tabela html e adiciona alguns recursos. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<table-example-1 />

<<< @/docs/.vuepress/components/TableExample1.vue

## Slots

Existe uma opção para criar a tabela usando slots.

<table-example-2 />

<<< @/docs/.vuepress/components/TableExample2.vue

## Selectable

Use a propriedade `selectable` para tornar as linhas selecionáveis.

<table-example-3 />

<<< @/docs/.vuepress/components/TableExample3.vue

## Propriedades

### `gv-table`

| Nome       | Tipo  | Descrição         | Padrão  | Obrigatório |
| ---------- | :---: | ----------------- | ------- | ----------- |
| columns    | array | header            | `[]`    | false       |
| rows       | array | data              | `[]`    | false       |
| selectable | array | enables selection | `false` | false       |

### `gv-tr`

| Nome   |               Tipo                | Descrição              | Padrão  | Obrigatório |
| ------ | :-------------------------------: | ---------------------- | ------- | ----------- |
| val    | string, number, boolean or object | html attribute `value` | null    | false       |
| value  |               array               | `v-model`              | -       | false       |
| active |              boolean              | sets active style      | `false` | false       |

### `gv-th`

| Nome   |  Tipo   | Descrição             | Padrão  | Obrigatório |
| ------ | :-----: | --------------------- | ------- | ----------- |
| label  | string  | header texxt          | -       | false       |
| prop   | string  | object key            | -       | false       |
| fit    | boolean | size fits the content | `false` | false       |
| active | boolean | sets active style     | `false` | false       |

### `gv-td`

| Nome   |  Tipo   | Descrição             | Padrão  | Obrigatório |
| ------ | :-----: | --------------------- | ------- | ----------- |
| fit    | boolean | size fits the content | `false` | false       |
| active | boolean | sets active style     | `false` | false       |

## Slots

`gv-table`

| Nome | Descrição            |
| ---- | -------------------- |
| head | content of the table |
| body | content of the table |
