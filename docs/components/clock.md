# Clock

The `gv-clock` provides a clock. Learn more about the component and its featureas in the following example.

## Analog

The analog clock example.

<clock-example-1 />

<<< @/docs/.vuepress/components/ClockExample1.vue

## Digital

The digital example.

<clock-example-2 />

<<< @/docs/.vuepress/components/ClockExample2.vue

## Custom

Setting the properties of the component you can create a customized clock according to your needs.

<clock-example-3 />

<<< @/docs/.vuepress/components/ClockExample3.vue

## Props

| Name    |  Type   | Description              | Default              | Required |
| ------- | :-----: | ------------------------ | -------------------- | -------- |
| bg      | string  | background               | `gray-400`           | false    |
| value   |  date   | sets the start time      | `now()`              | false    |
| ampm    | boolean | 12 `true` or 24 `false`  | `false`              | false    |
| image   | string  | path to image            | null                 | false    |
| color   | string  | font color               | null                 | false    |
| center  | boolean | position                 | null                 | false    |
| digital | boolean | enables digital style    | null                 | false    |
| label   | object  | sets `am` and `pm` label | `{ am, pm }`         | false    |
| numeral |  array  | sets numbers             | `[1, 2, ... 11, 12]` | false    |
