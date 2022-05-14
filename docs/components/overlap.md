# Overlap

The `gv-overlap` provides features to create a overlap menu that can be either programmatically or interactively controlled in order to show/hide information/functionalities. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<overlap-example-1 />

<<< @/docs/.vuepress/components/OverlapExample1.vue

## Props

| Name        |  Type   | Description                                             | Default | Required |
| ----------- | :-----: | ------------------------------------------------------- | ------- | -------- |
| active      | boolean | sets the visibility of the content                      | `false` | false    |
| hidden      | boolean | sets the visibility of the whole component              | `false` | false    |
| hideArrow   | boolean | hides the arrow who indicates the status of the content | `false` | false    |
| dismissible | boolean | enables the button to dismiss the component             | `false` | false    |

## Methods

| Name   | Params | Description        |
| ------ | ------ | ------------------ |
| open   | -      | open the content   |
| close  | -      | close the content  |
| toggle | -      | toggle the content |
| show   | -      | show the component |
| hide   | -      | hide the component |

## Events

| Name    | Return | Description    |
| ------- | ------ | -------------- |
| onopen  | object | open callback  |
| onclose | object | close callback |
| onshow  | object | show callback  |
| onhide  | object | hide callback  |

## Slots

| Name    | Description               |
| ------- | ------------------------- |
| header  | insert the header content |
| content | insert the content        |
