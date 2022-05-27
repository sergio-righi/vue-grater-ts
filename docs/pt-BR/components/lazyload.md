# Carregamento Atrasado

O `gv-lazy load` fornece uma maneira de economizar dados e reduzir o tempo de carregamento das páginas, atrasando o carregamento de conteúdo grande. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<lazyload-example-1 />

<<< @/docs/.vuepress/components/LazyloadExample1.vue

## Propriedades

| Nome    |  Tipo   | Descrição            | Padrão  | Obrigatório |
| ------- | :-----: | -------------------- | ------- | ----------- |
| src     | string  | target path          | null    | true        |
| preload | string  | initial path         | null    | true        |
| alt     | string  | html attribute       | null    | false       |
| method  | string  | http method          | `GET`   | false       |
| auto    | boolean | triggers on load     | `false` | false       |
| scroll  | boolean | triggers on viewport | `false` | false       |
