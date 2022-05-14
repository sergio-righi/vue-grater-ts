### Helpers

The library offers several helper classes to prevent you from having to set the style properties manually. Learn more about it in the following sections.

## Alignment

The style properties `text-align` and `vertical-align` can be replaced by `a-{value}`. The supported values for `text-align` are `left`, `justify`, `right` and `center` while for `vetical-align` are `baseline`, `top`, `middle`, `bottom`, `text-bottom` and `text-top`.

## Border Radius

The style property `border-radius`, it is possible to use `border-radius` to set the default radius, `border-circle` to create a circle and `border-round` to make the border smooth.

## Currency

It is possible to add the currency sign before a text by setting `currency` plus the attribute `data-currency` or its predefined classes such as `cad`, `aud`, `yen`, `won`, `real`, `euro`, `dolar`, `rupee` and `pound` for canadian dolar, australian dolar, japanese yen, south korean won, brazilian real, euro, us dolar, indian rupee and pound sterling respectively.

## Cursor

The style property `cursor` can be replaced by `c-{value}`. The supported values are `none`, `pointer`, `default`, `move` and `grab`.

## Display

The style property `display` can be replaced by `d-{value}`. The supported values are `none`, `block`, `inline-block`, `flex` and `inline-flex`.

## Flexbox

The style properties `align-items` and `justify-content` can be replaced by `align-items-{value}` and `justify-content-{value}`. The supported values for `align-items` are `flex-start`, `center` and `flex-end` while for `justify-content` are `space-around`, `space-between`, `flex-start`, `center` and `flex-end`.

## Float

The style property `float` can be replaced by `f-{value}`. The supported values are `left`, `right` and `none`.

## Font

The style properties `font-style` and `font-weight` can be replaced by `{value}` and `weight-{value}`. The supported values for `font-style` is `italic` while for `font-weight` are from `100 to 900`.

## Margin

The style property `margin` can be replaced by `m{prefix}-{value}`. The supported values are `r-auto` and `l-auto`. The prefix `r` stands for `right` while `l` stands for `left.

## Object Fit

The style property `object-fit` can be replaced by `fit-{value}`. The supported values are `contain`, `cover`, `top` and `center`.

## Overflow

The style property `overflow` can be replaced by `o-{value}`. The supported values are `hidden` and `ellipsis`. Ellipsis is not a valid value for `overflow` however the helper applys a set of styles properties to add `...` when the text overflows the container.

## Pointer Events

The style property `pointer-events` can be replaced by `events-{value}`. The library currently supports only the value `none`.

## Position

The style property `position` can be replaced by `p-{value}`. The supported values are `absolute`, `fixed`, `relative`, `sticky`, `center-absolute`, `horizontal-absolute` and `vertical-absolute`. The last three are not valid values for `position` however the class helper applyes a set of styles to position elements using the properties `position` and `transform`.

## Text

The style properties `text-transform`, `text-decoration` can be replaced by `text-{value}`. The supported values are `lower`, `upper`, `capitalize`, `underline`, `line-through`, `disabled` and `hide`. The last two are not valid values for any of the properties however the classes apply a set of styles to provide the expected result.

## Visibility

The style property `visiblity` can be replaced by `v-{value}`. The supported values are `hidden` and `visible`.

## White Space

The style property `white-space` can be replaced by `ws-{value}`. The supported values are `nowrap` and `pre-wrap`.