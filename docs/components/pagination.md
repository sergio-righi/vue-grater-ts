# Pagination

The `gv-pagination` provides a pagination controller for a list of items. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<pagination-example-1 />

<<< @/docs/.vuepress/components/PaginationExample1.vue

## Hide arrow

The option remove the arrows.

<pagination-example-2 />

<<< @/docs/.vuepress/components/PaginationExample2.vue

## Arrow only

This option removes the items plus provides a way to add content in between.

<pagination-example-3 />

<<< @/docs/.vuepress/components/PaginationExample3.vue

## Props

| Name       |  Type   | Description                                    | Default | Required |
| ---------- | :-----: | ---------------------------------------------- | ------- | -------- |
| total      | number  | number of pages                                | -       | required |
| value      | number  | current value `v-model`                        | `1`     | false    |
| max        | number  | max showing pages                              | `7`     | false    |
| center     | boolean | centralize the component                       | `false` | false    |
| hide-arrow | boolean | hides control arrows                           | `false` | false    |
| arrow-only | boolean | hides the pages                                | `false` | false    |
| condensed  | boolean | removes margin                                 | `false` | false    |
| loop       | boolean | goes to the first item when it reachs the last | `false` | false    |
