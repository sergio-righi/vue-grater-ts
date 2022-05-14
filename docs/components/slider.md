# Slider

The `gv-slider` provides an interactive way to select a numeric value by dragging a handle. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<slider-example-1 />

<<< @/docs/.vuepress/components/SliderExample1.vue

## Custom

It is flexible and it can be customized according to the needs.

<slider-example-2 />

<<< @/docs/.vuepress/components/SliderExample2.vue

## Props

| Name     |       Type       | Description                                  | Default | Required |
| -------- | :--------------: | -------------------------------------------- | ------- | -------- |
| value    | array or number  | current value                                | `[]`    | false    |
| disabled |     boolean      | html attribute                               | `false` | false    |
| max      | number or string | maximum value                                | `100`   | false    |
| min      | number or string | minumum value                                | `0`     | false    |
| step     | number or string | specifies the interval between legal numbers | `1`     | false    |
| icon     |      string      | icon name (suffix)                           | -       | false    |
| text     |      string      | text (suffix)                                | -       | false    |

## Events

| Name     | Return          | Description            |
| -------- | --------------- | ---------------------- |
| onchange | number or array | value changes callback |
