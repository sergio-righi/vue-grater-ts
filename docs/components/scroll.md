# Scroll

The `gv-scroll` provides a way to create a scrollable container. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<scroll-example-2 />

<<< @/docs/.vuepress/components/ScrollExample2.vue

## Vertical

The `vertical` option can be set to create a vertical scrollable container. It has to be combined with the `height` property to specify the height of the container otherwise the container will not be scrollable.

<scroll-example-3 />

<<< @/docs/.vuepress/components/ScrollExample3.vue

## Props

| Name           |  Type   | Description                          | Default | Required |
| -------------- | :-----: | ------------------------------------ | ------- | -------- |
| height         | string  | sets `height` style property         | -       | false    |
| stretch        | boolean | fit to parent and jusitfy content    | -       | false    |
| vertical       | boolean | sets container to vertical scrolling | `false` | false    |
| hide-arrow     | boolean | hides the controlling arrows         | `false` | false    |
| hide-scrollbar | boolean | hides the component scrollbar        | `false` | false    |
