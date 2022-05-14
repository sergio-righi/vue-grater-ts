# Calendar

The `gv-calendar` is a simple calendar where you can add custom dates and categorize them with different colors. Learn more about the component and its featureas in the following example.

## Usage

The standard example of the component.

<calendar-example-1 />

<<< @/docs/.vuepress/components/CalendarExample1.vue

## Props

| Name           |  Type   | Description     | Default  | Required |
| -------------- | :-----: | --------------- | -------- | -------- |
| min            |  date   | min date        | null     | true     |
| max            |  date   | max date        | null     | false    |
| value          |  date   | current date    | null     | false    |
| events\*       |  array  | `object`        | null     | false    |
| categories\*\* |  array  | `object`        | `object` | false    |
| holidays\*\*\* |  array  | `date`          | null     | false    |
| locale         | string  | language        | `en-CA`  | false    |
| weekend        | boolean | toggles weekend | `true`   | false    |

\* `CalendarEvent` attributes `id`, `date`, `startDate`, `endDate`, `category` and `description`<br/>
\*\* `CalendarCategory` attributes `category` and `color`<br/>
\*\*\* must be an array of `Date`<br/>

## Methods

| Name       |    Params     | Description                                   | Return |
| ---------- | :-----------: | --------------------------------------------- | ------ |
| add        | CalendarEvent | adds an event                                 | null   |
| addHoliday |     Date      | adds an holiday                               | null   |
| move       |      int      | use `1` for `forward` and `-1` for `backward` | null   |
| remove     |      int      | removes event by `id`                         | null   |
