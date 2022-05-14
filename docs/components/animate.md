# Animate

The `gv-animate` provides animations for different types of values. Learn more about the component and its features in the following examples.

## Number

Animates the number value.

<animate-example-1 />

<<< @/docs/.vuepress/components/AnimateExample1.vue

## Custom

You can add text such as `%` or `$`.

<animate-example-2 />

<<< @/docs/.vuepress/components/AnimateExample2.vue

## Transition

The animation transition can be changed using the attribute `name`.

<animate-example-3 />

<<< @/docs/.vuepress/components/AnimateExample3.vue

## Text

Typing animation when text.

<animate-example-4 />

<<< @/docs/.vuepress/components/AnimateExample4.vue

## Props

| Name     |       Type       | Description                     | Default         | Required |
| -------- | :--------------: | ------------------------------- | --------------- | -------- |
| from     |      number      | start value                     | `0`             | false    |
| value    | number or string | target value                    | `0`             | false    |
| duration |      number      | animation duration              | `3000`          | false    |
| scroll   |     boolean      | triggers animation when visible | `false`         | false    |
| name\*   |      string      | name of the transition          | `ease-out-circ` | false    |

\*Supported transitions [Easings](https://easings.net):

- `linear`
- `ease-in-quad`
- `ease-out-quad`
- `ease-in-out-quad`
- `ease-in-sine`
- `ease-out-sine`
- `ease-in-out-sine`
- `ease-in-expo`
- `ease-out-expo`
- `ease-in-out-expo`
- `ease-in-circ`
- `ease-out-circ`
- `ease-in-out-circ`
- `ease-in-cubic`
- `ease-out-cubic`
- `ease-in-out-cubic`
- `ease-in-quart`
- `ease-out-quart`
- `ease-in-out-quart`
- `ease-in-quint`
- `ease-out-quint`
- `ease-in-out-quint`
- `ease-in-elastic`
- `ease-out-elastic`
- `ease-in-out-elastic`
- `ease-in-back`
- `ease-out-back`
- `ease-in-out-back`
- `ease-in-bounce`
- `ease-out-bounce`
- `ease-in-out-bounce`
