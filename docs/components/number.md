# Number

The `gv-number` provides features to control a number input. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<number-example-1 />

<<< @/docs/.vuepress/components/NumberExample1.vue

## Props

| Name     |  Type   | Description                                  | Default | Required |
| -------- | :-----: | -------------------------------------------- | ------- | -------- |
| min      | number  | minimum value                                | `0`     | false    |
| max      | number  | maximum value                                | `0`     | false    |
| step     | number  | specifies the interval between legal numbers | `1`     | false    |
| value    | number  | current value                                | `0`     | false    |
| loop     | boolean | it simulates a circle                        | -       | false    |
| disabled | boolean | html attribute                               | -       | false    |
