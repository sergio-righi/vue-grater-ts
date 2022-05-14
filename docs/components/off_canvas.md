# Off Canvas

The `gv-off-canvas` provides features to display information on an overlapping canvas. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<off-canvas-example-1 />

<<< @/docs/.vuepress/components/OffCanvasExample1.vue

## Props

| Name     |  Type   | Description                                       | Default | Required |
| -------- | :-----: | ------------------------------------------------- | ------- | -------- |
| active   | boolean | sets the visibility of the canvas                 | `false` | false    |
| left     | boolean | sets the canvas to the left side                  | `false` | false    |
| right    | boolean | sets the canvas to the right side                 | `false` | false    |
| locked   | boolean | locks the scroll when the canvas open             | `false` | false    |
| required | boolean | disables the click on the overlay to close option | `false` | false    |

## Methods

| Name   | Params | Description                        |
| ------ | ------ | ---------------------------------- |
| open   | -      | show the canvas                    |
| close  | -      | hide the canvas                    |
| toggle | -      | hide if visible and show if hidden |

## Events

| Name       | Return | Description       |
| ---------- | ------ | ----------------- |
| onopen     | object | open callback     |
| onclose    | object | close callback    |
| onrequired | object | required callback |

## Slots

| Name    | Description                        |
| ------- | ---------------------------------- |
| trigger | insert the trigger content         |
| content | insert the content into the canvas |
