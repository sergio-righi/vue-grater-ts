# Breadcrumb

The `gv-breadcrumb` is a navigational helper for pages. Learn more about the component and its featureas in the following example.

## Usage

The standard example using the property `href`.

<breadcrumb-example-1 />

<<< @/docs/.vuepress/components/BreadcrumbExample1.vue

## Props

### `gv-breaadcrumb`

| Name  |  Type  | Description  | Default | Required |
| ----- | :----: | ------------ | ------- | -------- |
| title | string | current page | -       | true     |

### `gv-breaadcrumb-item`

| Name   |            Type            | Description         | Default | Required |
| ------ | :------------------------: | ------------------- | ------- | -------- |
| label  |           string           | link description    | -       | true     |
| href   | string, object or function | html attribute      | -       | false    |
| target |           string           | hyperlink open mode | `_self` | false    |
