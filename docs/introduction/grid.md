# Grid System

The grid system is fully based on [Bootstrap](https://getbootstrap.com). The grid can be divided into 12 columns. Learn more about the grid system in the following instructions.

## Structure

The grid system consists of the following tree.

```
container ... row ... columns
```

## Breakpoints

| Device                                     | Code | Type                  | Range                |
| ------------------------------------------ | ---- | --------------------- | -------------------- |
| -                                          | -    | less than extra small | `0` to `575px`       |
| <gv-icon value="cellphone" /> Extra Small  | xs   | extra small to small  | `576px` to `767px`   |
| <gv-icon value="tablet" /> Small           | sm   | small to medium       | `768px` to `991px`   |
| <gv-icon value="laptop" /> Medium          | md   | medium to large       | `992px` to `1199px`  |
| <gv-icon value="desktop-mac" /> Large      | lg   | large to extra large  | `1200px` to `1399px` |
| <gv-icon value="television" /> Extra Large | xl   | more than extra large | from `1400px`        |

## Container

Containers are a fundamental building block that contain, pad, and align your content within a given device or viewport. The `gv-container` component is the responsable for providing its features.

## Row

Rows are wrappers for columns, use it to ensure that the content will be displayed correctly. The `gv-row` component is the responsable for providing its features.

## Column

The grid can be splitted into 12 columns. The component `gv-col` is responsable for managing its features. The span of the columns is determined by the number you choose to each breakpoint. The codes `xs`, `sm`, `md`, `lg` and `xl` are controlled by its props. The component default is set to fit the row.

```html
<gv-col>
  ...
</gv-col>
```

## Props

### `gv-container`

| Name  |  Type   | Description                     | Default | Required |
| ----- | :-----: | ------------------------------- | ------- | -------- |
| fluid | boolean | it stretch to the content width | `false` | false    |

### `gv-col`

| Name    |       Type       | Description             | Default | Required |
| ------- | :--------------: | ----------------------- | ------- | -------- |
| col     | string or number | all                     | `12`    | false    |
| xs      | string or number | extra small span        | -       | false    |
| sm      | string or number | small span              | -       | false    |
| md      | string or number | medium span             | -       | false    |
| lg      | string or number | large span              | -       | false    |
| xl      | string or number | extra large span        | -       | false    |
| align   |      string      | vertical alignment\*    | -       | false    |
| justify |      string      | horizonta alignment\*\* | -       | false    |

\* supported values: `start`, `center` and `end`.<br/>
\*\* supported values: `center`, `flex-end`, `flex-start`, `space-around` and `space-between`.
