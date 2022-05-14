# Badge

The `gv-badge` is mostly used to highlight information to a user, usually over an icon but can be displayed beside it. Learn more about the component and its featureas in the following examples.

## Style

There are basically three types, the `dot` where you do not want to show any value, `left` that you can position the badge next to the element and the default.

<badge-example-1 />

<<< @/docs/.vuepress/components/BadgeExample1.vue

## Image

You can also use the component with images.

<badge-example-2 />

<<< @/docs/.vuepress/components/BadgeExample2.vue

## Custom

You can customize the `background` and the `font color` of the component using the props `bg` and `color`.

<badge-example-3 />

<<< @/docs/.vuepress/components/BadgeExample3.vue

## Props

| Name    |       Type       | Description                          | Default | Required |
| ------- | :--------------: | ------------------------------------ | ------- | -------- |
| bg      |      string      | background                           | -       | false    |
| color   |      string      | font color                           | -       | false    |
| value   | number or string | the value to be displayed            | -       | false    |
| dot     |     boolean      | option without value                 | `false` | false    |
| left    |     boolean      | component on left                    | `false` | false    |
| bottom  |     boolean      | component on bottom                  | `false` | false    |
| inline  |     boolean      | inline component instead of floating | `false` | false    |
| overlap |     boolean      | overlap the content                  | `true`  | false    |
| round   |     boolean      | border shape                         | `false` | false    |
| tile    |     boolean      | border shape                         | `false` | false    |
