# Story

The `gv-story` is used to display images and videos in a stories-like way. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<story-example-1 />

<<< @/docs/.vuepress/components/StoryExample1.vue

## Props

### `gv-story`

| Name     |       Type       | Description                                     | Default | Required |
| -------- | :--------------: | ----------------------------------------------- | ------- | -------- |
| duration |      number      | the transition for each slide (in milliseconds) | `3000`  | false    |
| ratioX   | number or string | ratio for the X axis                            | `9`     | false    |
| ratioY   | number or string | ratio for the Y axis                            | `16`    | false    |

### `gv-story-item`

| Name |  Type  | Description         | Default | Required |
| ---- | :----: | ------------------- | ------- | -------- |
| src  | string | image or video path | -       | false    |

## Methods

| Name    | Params  | Description                |
| ------- | ------- | -------------------------- |
| restart | -       | restart the slideshow      |
| pause   | -       | pause/play the slideshow   |
| move    | boolean | move to next/previous item |

## Events

| Name   | Return | Description                |
| ------ | ------ | -------------------------- |
| ondone | -      | slideshow is done callback |
