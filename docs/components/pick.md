# Pick

The `gv-pick` is an interactive way for users to pick the item they prefer considering a given situation. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component

<pick-example-1 />

<<< @/docs/.vuepress/components/PickExample1.vue

## Props

### `gv-pick`

| Name       |     Type     | Description                                            | Default | Required |
| ---------- | :----------: | ------------------------------------------------------ | ------- | -------- |
| shown      |    number    | current active tab                                     | `5`     | false    |
| height     |    number    | height of the container (in pixels)                    | `450`   | false    |
| items      |   object\*   | items to be displayed                                  | `[]`    | false    |
| shuffle    |   boolean    | enable/disable shuffle control button                  | `true`  | false    |
| contest    |   boolean    | removes after competing                                | `false` | false    |
| validation | function\*\* | function to be run on picking the items                | -       | false    |
| duration   |    number    | enable/disable timer to pick (in milliseconds) >= 1000 | `0`     | false    |

\* the object must contain a property called `src`. A property called `description` is also expected but not required. Other properties such as `id` are not used by the component but useful for further actions.

\*\* the function receives two parameters with the selected indexes and must return `true` or `false` in order to inform the main function if the choosen values are valid or not

## Events

| Name   | Return | Description                                                         |
| ------ | ------ | ------------------------------------------------------------------- |
| onpick | object | swipe callback that returns the two items, the winner and the loser |
