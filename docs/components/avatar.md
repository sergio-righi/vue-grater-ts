# Avatar

The `gv-avatar` is usually to display user profile pictures but can also be used to display icons and text. Learn more about the component and its features in the following examples.

## Style

The border style can be changed, the supported options are `square` and `round`. The default is `circle`.

<avatar-example-1 />

<<< @/docs/.vuepress/components/AvatarExample1.vue

## Size

There are two predefined sizes `sm` and `lg`.

<avatar-example-2 />

<<< @/docs/.vuepress/components/AvatarExample2.vue

## Props

| Name    |  Type   | Description         | Default | Required |
| ------- | :-----: | ------------------- | ------- | -------- |
| bg      | string  | background          | -       | false    |
| color   | string  | font color          | -       | false    |
| sm      | boolean | small size          | `false` | false    |
| lg      | boolean | large size          | `false` | false    |
| square  | boolean | border shape        | `false` | false    |
| round   | boolean | border shape        | `false` | false    |
| outline | boolean | no background style | `false` | false    |
