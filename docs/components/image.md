# Image

The `gv-image` replaces the standard html img and adds some features. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<image-example-1 />

<<< @/docs/.vuepress/components/ImageExample1.vue

## Props

| Name     |            Type            | Description                    | Default | Required |
| -------- | :------------------------: | ------------------------------ | ------- | -------- |
| src      |           string           | image path                     | -       | true     |
| href     | string, object or function | html attribute                 | -       | false    |
| target   |           string           | hyperlink open mode            | `_self` | false    |
| alt      |           string           | html attribute                 | -       | false    |
| lazyload |          boolean           | toggles indeterminate process  | `false` | false    |
| square   |          boolean           | border shape                   | `false` | false    |
| circle   |          boolean           | border shape                   | `false` | false    |
| no-cache |          boolean           | adds current time              | `false` | false    |
| hover    |          boolean           | adds an effect on hover        | `false` | false    |
| zoom     |          boolean           | enables zoom on click          | `false` | false    |
| top      |          boolean           | positions inner content on top | `false` | false    |

## Events

| Name    | Return | Description            |
| ------- | ------ | ---------------------- |
| onload  | object | done loading callback  |
| onerror | object | error on load callback |
