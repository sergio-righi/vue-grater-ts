### Helpers

A biblioteca oferece várias classes auxiliares para evitar que você tenha que definir as propriedades de estilo manualmente. Saiba mais sobre isso nas seções a seguir.

## Alinhamento

As propriedades de estilo `text-align` e `vertical-align` podem ser substituídas por `a-{value}`. Os valores suportados para `text-align` são `left`, `justify`, `right` e `center` enquanto para `vetical-align` são `baseline`, `top`, `middle`, `bottom`, ` text-bottom` e `text-top`.

## Borda arredondada

A propriedade de estilo `border-radius`, é possível usar `border-radius` para definir o raio padrão, `border-circle` para criar um círculo e `border-round` para suavizar a borda.

## Moeda

É possível adicionar o símbolo da moeda antes de um texto definindo `currency` mais o atributo `data-currency` ou suas classes predefinidas como `cad`, `aud`, `yen`, `won`, `real`, `euro`, `dolar`, `rupee` e `pound` para dólar canadense, dólar australiano, iene japonês, won sul-coreano, real brasileiro, euro, dólar americano, rupia indiana e libra esterlina, respectivamente.

## Cursor

A propriedade de estilo `cursor` pode ser substituída por `c-{value}`. Os valores suportados são `none`, `pointer`, `default`, `move` e `grab`.

## Display

A propriedade de estilo `display` pode ser substituída por `d-{value}`. Os valores suportados são `none`, `block`, `inline-block`, `flex` e `inline-flex`.

## Flexbox

As propriedades de estilo `align-items` e `justify-content` podem ser substituídas por `align-items-{value}` e `justify-content-{value}`. Os valores suportados para `align-items` são `flex-start`, `center` e `flex-end` enquanto para `justify-content` são `space-around`, `space-between`, `flex-start` , `center` e `flex-end`.

## Float

A propriedade de estilo `float` pode ser substituída por `f-{value}`. Os valores suportados são `left`, `right` e `none`.

## Fonte

As propriedades de estilo `font-style` e `font-weight` podem ser substituídas por `{value}` e `weight-{value}`. Os valores suportados para `font-style` são `italic` enquanto que para `font-weight` são de `100 a 900`.

## Margem

A propriedade de estilo `margin` pode ser substituída por `m{prefix}-{value}`. Os valores suportados são `r-auto` e `l-auto`. O prefixo `r` significa `direita` enquanto `l` significa `esquerda.

## Object Fit

A propriedade de estilo `object-fit` pode ser substituída por `fit-{value}`. Os valores suportados são `contain`, `cover`, `top` e `center`.

## Overflow

A propriedade de estilo `overflow` pode ser substituída por `o-{value}`. Os valores suportados são `hidden` e `ellipsis`. As reticências não são um valor válido para `overflow`, no entanto, o auxiliar aplica um conjunto de propriedades de estilos para adicionar `...` quando o texto transborda do contêiner.

## Pointer Events

A propriedade de estilo `pointer-events` pode ser substituída por `events-{value}`. A biblioteca atualmente suporta apenas o valor `none`.

## Posicionamento

A propriedade de estilo `position` pode ser substituída por `p-{value}`. Os valores suportados são `absolute`, `fixed`, `relative`, `sticky`, `center-absolute`, `horizontal-absolute` e `vertical-absolute`. Os três últimos não são valores válidos para `position` porém o auxiliar de classe aplica um conjunto de estilos para posicionar elementos usando as propriedades `position` e `transform`.

## Texto

As propriedades de estilo `text-transform`, `text-decoration` podem ser substituídas por `text-{value}`. Os valores suportados são `lower`, `upper`, `capitalize`, `underline`, `line-through`, `disabled` e `hide`. Os dois últimos não são valores válidos para nenhuma das propriedades, porém as classes aplicam um conjunto de estilos para fornecer o resultado esperado.

## Visibilidade

A propriedade de estilo `visibility` pode ser substituída por `v-{value}`. Os valores suportados são `hidden` e `visible`.

## White Space

A propriedade de estilo `white-space` pode ser substituída por `ws-{value}`. Os valores suportados são `nowrap` e `pre-wrap`.
