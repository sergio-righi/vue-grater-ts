# Swipe

The `gv-swipe` is an interactive way to display yes/no situations to users plus the possibility of adding a third action according to the purpose of the usage. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<swipe-example-1 />

<<< @/docs/.vuepress/components/SwipeExample1.vue

## Props

### `gv-swipe`

| Name      |   Type   | Description                                  | Default | Required |
| --------- | :------: | -------------------------------------------- | ------- | -------- |
| shown     |  number  | current active tab                           | `5`     | false    |
| height    |  number  | height of the container (in pixels)          | `450`   | false    |
| items     | object\* | items to be displayed                        | `[]`    | false    |
| control   | boolean  | show/hide button controls                    | `true`  | false    |
| upward    | boolean  | show/hide thrid action                       | `false` | false    |
| upIcon    | boolean  | icon to be displayed as third                | `star`  | false    |
| leftIcon  | boolean  | icon to be displayed for the negative action | `close` | false    |
| rightIcon | boolean  | icon to be displayed for the positive action | `heart` | false    |

\* the object must contain a property called `src`. A property called `description` is also expected but not required. Other properties such as `id` are not used by the component but useful for further actions.

## Events

| Name             | Return   | Description                                        |
| ---------------- | -------- | -------------------------------------------------- |
| onswipe          | object\* | swipe callback that returns item and the direction |
| onreachend       | object   | callback when there ain't no more items            |
| onbeforereachend | object   | callback when the items are about to run out       |

\* the direction is `string` and it can be either `left`, `right` or `up`
