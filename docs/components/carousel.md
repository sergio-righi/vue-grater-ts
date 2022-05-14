# Carousel

The `gv-carousel` is a image slider to display a group of images. Learn more about the component and its featureas in the following example.

## Usage

The standard example of the component.

<carousel-example-1 />

<<< @/docs/.vuepress/components/CarouselExample1.vue

## Props

| Name      |  Type   | Description                                      | Default  | Required |
| --------- | :-----: | ------------------------------------------------ | -------- | -------- |
| items     |  array  | component items (images)                         | null     | true     |
| rewind    | boolean | moves backward when it reachs the last item      | null     | false    |
| slideshow | number  | delay of the transition                          | null     | false    |
| nav       | boolean | toggles navigation dots                          | `true`   | false    |
| arrow     | boolean | toggles arrows                                   | `true`   | false    |
| loop      | boolean | goes to the first item when it reachs the last   | `true`   | false    |
| control   | string  | style of the dots `circle`, `square` or `number` | `circle` | false    |
| selected  | number  | current item index                               | `0`      | false    |
| backward  | boolean | inverts the direction of the slideshow           | `false`  | false    |
| embed     |  embed  | hides border                                     | `false`  | false    |

## Methods

| Name | Params | Description           |
| ---- | :----: | --------------------- |
| move |  int   | index of the item     |
| prev |   -    | move to previous item |
| next |   -    | move to next item     |

## Events

| Name   | Return | Description   |
| ------ | ------ | ------------- |
| onmove | -      | move callback |
