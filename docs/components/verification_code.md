# Verification Code

The `gv-verification-code` is used for verification codes. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<verification-code-example-1 />

<<< @/docs/.vuepress/components/VerificationCodeExample1.vue

## Props

| Name      |       Type       | Description                        | Default | Required |
| --------- | :--------------: | ---------------------------------- | ------- | -------- |
| required  |     boolean      | set required style                 | `false` | false    |
| autofocus |     boolean      | set autofocus on the input element | `false` | false    |
| value     | number or string | current value `v-model`            | -       | false    |
| length    | number or string | the size of the code               | `6`     | true     |

## Events

| Name   | Return | Description   |
| ------ | :----: | ------------- |
| ondone |   -    | done callback |
