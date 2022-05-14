# Stepper

The `gv-stepper` provides a way to control navigation through using steps. Learn more about the component and its featureas in the following examples.

## Unlocked

The default example allows user to move from one step to another by clicking on the steps.

<stepper-example-1 />

<<< @/docs/.vuepress/components/StepperExample1.vue

## Locked

The header actions can be disabled to prevent user moving from one step to another without following the predefined flow.

<stepper-example-2 />

<<< @/docs/.vuepress/components/StepperExample2.vue

## Inline

The property hides the content area of the component as well as it makes the component works in readonly mode.

<stepper-example-3 />

<<< @/docs/.vuepress/components/StepperExample3.vue

## Props

### `gv-stepper`

| Name   |  Type   | Description                        | Default | Required |
| ------ | :-----: | ---------------------------------- | ------- | -------- |
| step   | number  | index of the selected step         | `1`     | false    |
| locked | boolean | disables the click event on header | `false` | false    |
| number | boolean | force indicator to be a number     | `false` | false    |
| inline | boolean | readonly (no content)              | `false` | false    |

### `gv-step`

| Name     |  Type   | Description                         | Default | Required |
| -------- | :-----: | ----------------------------------- | ------- | -------- |
| icon     | string  | icon to replace the indicator state | -       | true     |
| header   | string  | text on header                      | -       | true     |
| disabled | boolean | disables the step                   | `false` | false    |

## Methods

| Name   | Params  | Description                   |
| ------ | ------- | ----------------------------- |
| select | int     | moves to a selected index     |
| prev   | -       | moves to previous step        |
| next   | -       | moves to next step            |
| set    | boolean | sets error status to the step |
