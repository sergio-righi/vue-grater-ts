### Link

The `gv-link` replaces the standard html link and adds some features. Learn more about the component and its featureas in the following example.

## Standard

The default example of the component.

<link-example-1 />

<<< @/docs/.vuepress/components/LinkExample1.vue

## Slot

It can be used to wrap another components.

<link-example-2 />

<<< @/docs/.vuepress/components/LinkExample2.vue

## Props

| Name   |  Type  | Description         | Default | Required |
| ------ | :----: | ------------------- | ------- | -------- |
| href   | string | html attribute      | -       | false    |
| target | string | hyperlink open mode | `_self` | false    |
