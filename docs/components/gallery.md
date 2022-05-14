# Gallery

The `gv-gallery` provides a full featured image gallery popup. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<gallery-example-1 />

<<< @/docs/.vuepress/components/GalleryExample1.vue

## Props

| Name  |  Type   | Description                                    | Default | Required |
| ----- | :-----: | ---------------------------------------------- | ------- | -------- |
| items |  array  | object array with images                       | -       | true     |
| arrow | boolean | toggles arrows                                 | `true`  | false    |
| loop  | boolean | goes to the first item when it reachs the last | `true`  | false    |

## Methods

| Name  | Params | Description   |
| ----- | ------ | ------------- |
| open  | int    | index         |
| close | -      | close gallery |
