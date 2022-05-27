# Estrutura

A estrutura de linhas e colunas é totalmente baseado em [Bootstrap](https://getbootstrap.com). A grade pode ser dividida em 12 colunas. Saiba mais sobre o sistema de grade nas instruções a seguir.

## Structure

O sistema de linhas e colunas consiste na seguinte árvore.

```
container ... row ... columns
```

## Breakpoints

| Dispositivo                                | Código | Tipo                  | Intervalo            |
| ------------------------------------------ | ------ | --------------------- | -------------------- |
| -                                          | -      | less than extra small | `0` to `575px`       |
| <gv-icon value="cellphone" /> Extra Small  | xs     | extra small to small  | `576px` to `767px`   |
| <gv-icon value="tablet" /> Small           | sm     | small to medium       | `768px` to `991px`   |
| <gv-icon value="laptop" /> Medium          | md     | medium to large       | `992px` to `1199px`  |
| <gv-icon value="desktop-mac" /> Large      | lg     | large to extra large  | `1200px` to `1399px` |
| <gv-icon value="television" /> Extra Large | xl     | more than extra large | from `1400px`        |

## Container

Os contêineres são um bloco de construção fundamental que contém, preenche e alinha seu conteúdo em um determinado dispositivo ou viewport. O componente `gv-container` é o responsável por fornecer suas funcionalidades.

## Linha

As linhas são wrappers para colunas, use-as para garantir que o conteúdo seja exibido corretamente. O componente `gv-row` é o responsável por fornecer suas funcionalidades.

## Coluna

A grade pode ser dividida em 12 colunas. O componente `gv-col` é responsável por gerenciar suas funcionalidades. A extensão das colunas é determinada pelo número que você escolhe para cada ponto de interrupção. Os códigos `xs`, `sm`, `md`, `lg` e `xl` são controlados por seus props. O padrão do componente é definido para caber na linha.

```html
<gv-col> ... </gv-col>
```

## Propriedades

### `gv-container`

| Nome  |  Tipo   | Descrição                       | Padrão  | Obrigatório |
| ----- | :-----: | ------------------------------- | ------- | ----------- |
| fluid | boolean | it stretch to the content width | `false` | false       |

### `gv-col`

| Nome    |       Tipo       | Descrição               | Padrão | Obrigatório |
| ------- | :--------------: | ----------------------- | ------ | ----------- |
| col     | string or number | all                     | `12`   | false       |
| xs      | string or number | extra small span        | -      | false       |
| sm      | string or number | small span              | -      | false       |
| md      | string or number | medium span             | -      | false       |
| lg      | string or number | large span              | -      | false       |
| xl      | string or number | extra large span        | -      | false       |
| align   |      string      | vertical alignment\*    | -      | false       |
| justify |      string      | horizonta alignment\*\* | -      | false       |

\* valores suportados: `start`, `center` e `end`.<br/>
\*\* valores suportados: `center`, `flex-end`, `flex-start`, `space-around` e `space-between`.
