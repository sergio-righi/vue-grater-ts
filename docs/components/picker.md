# Picker

The `gv-picker` is a fully featured selection component that lets users select dates and times. Learn more about the component and its featureas in the following examples.

## Date

The date only example.

<picker-example-1 />

<<< @/docs/.vuepress/components/PickerExample1.vue

## Year

The year example.

<picker-example-2 />

<<< @/docs/.vuepress/components/PickerExample2.vue

## Month

The month option example.

<picker-example-3 />

<<< @/docs/.vuepress/components/PickerExample3.vue

## Time

The time only example.

<picker-example-4 />

<<< @/docs/.vuepress/components/PickerExample4.vue

## Datetime

The full featured datetime example.

<picker-example-5 />

<<< @/docs/.vuepress/components/PickerExample5.vue

## Popup

The popup option allows the component to work as a popup instead of being attached to a field.

<picker-example-6 />

<<< @/docs/.vuepress/components/PickerExample6.vue

## Props

| Name    |      Type      | Description             | Default | Required |
| ------- | :------------: | ----------------------- | ------- | -------- |
| min     |      date      | maximum date            | -       | false    |
| max     |      date      | minumum date            | -       | false    |
| value   | date or number | initial value           | -       | false    |
| locale  |      date      | language                | `en-CA` | false    |
| isDate  |      date      | toggle date module      | `true`  | false    |
| isAmpm  |      date      | sets `12` or `24` hours | `true`  | false    |
| isTime  |      date      | sets time only          | `false` | false    |
| isYear  |      date      | sets year only          | `false` | false    |
| isMonth |      date      | sets month only         | `false` | false    |
| isPopup |      date      | open as modal           | `false` | false    |
