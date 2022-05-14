# Rating

The `gv-rating` provides a interative rating tool for uses. Learn more about the component and its featureas in the following examples.

## Custom

It is flexible and it can be customized according to the needs.

<rating-example-1 />

<<< @/docs/.vuepress/components/RatingExample1.vue

## Disabled

It can be disabled such as a form input via `disabled` property.

<rating-example-2 />

<<< @/docs/.vuepress/components/RatingExample2.vue

## Options

There are other variations available such as `hidden` and `readonly`. The first one hides the unchecked items and the second one disables them without changing the style.

<rating-example-3 />

<<< @/docs/.vuepress/components/RatingExample3.vue

## Feedback

It can be combined with emoji to create a custom feedback.

<rating-example-4 />

<<< @/docs/.vuepress/components/RatingExample4.vue

## Props

| Name     |  Type   | Description                     | Default | Required |
| -------- | :-----: | ------------------------------- | ------- | -------- |
| color    | string  | font color                      | -       | false    |
| value    | number  | current value `v-model`         | `0`     | false    |
| icon     | string  | icon name                       | `star`  | false    |
| decimal  | boolean | allows floating-point numbers   | `false` | false    |
| disabled | boolean | html attribute                  | `false` | false    |
| hidden   | boolean | hides empty blocks              | `false` | false    |
| readonly | boolean | disables pointer events         | `false` | false    |
| ten      | boolean | ten items instead of 5          | `false` | false    |
| size     | string  | sets `font-size` style property | -       | false    |
