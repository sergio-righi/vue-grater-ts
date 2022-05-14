# Card

The `gv-card` is a versatile component that can be used for anything from a panel to a static image. It has many variations where you can cutomize the way you need it. Learn more about the component and its featureas in the following examples.

## Standard

Some of the simplest ways of using the component.

<card-example-1 />

<<< @/docs/.vuepress/components/CardExample1.vue

## Image

Display a static image.

<card-example-2 />

<<< @/docs/.vuepress/components/CardExample2.vue

## Custom

The creativity is the limit.

<card-example-3 />

<<< @/docs/.vuepress/components/CardExample3.vue

## Props

| Name   |            Type            | Description         | Default | Required |
| ------ | :------------------------: | ------------------- | ------- | -------- |
| bg     |           string           | background          | -       | false    |
| color  |           string           | font color          | -       | false    |
| border |           string           | color               | -       | false    |
| href   | string, object or function | html attribute      | -       | false    |
| target |           string           | hyperlink open mode | `_self` | false    |
| flex   |          boolean           | stretch the height  | `false` | false    |
| embed  |          boolean           | no border           | `false` | false    |

## Slots

| Name    | Description           |
| ------- | --------------------- |
| header  | before content        |
| content | sets the main content |
| footer  | after content         |
