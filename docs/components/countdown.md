# Countdown

The `gv-countdown` provides a countdown timer. Learn more about the component and its featureas in the following examples.

## Standard

It calculates the timespan between today' date and the informed property `value`.

<countdown-example-1 />

<<< @/docs/.vuepress/components/CountdownExample1.vue

## Callback

It allows you to control what will happen when the time ends.

<countdown-example-2 />

<<< @/docs/.vuepress/components/CountdownExample2.vue

## Props

| Name  |      Type      | Description                                  | Default | Required |
| ----- | :------------: | -------------------------------------------- | ------- | -------- |
| value | date or number | difference when date and seconds when number | -       | false    |

## Events

| Name     | Return | Description                         |
| -------- | :----: | ----------------------------------- |
| ontimeup |  node  | callback function when time is over |
