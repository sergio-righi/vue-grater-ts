# Dropzone

The `gv-dropzone` provides a set of tools to upload files in a interactive way, the user only have to drop the files inside the area. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<dropzone-example-1 />

<<< @/docs/.vuepress/components/DropzoneExample1.vue

## Props

### `gv-dropzone`

| Name      |      Type       | Description                                   | Default | Required |
| --------- | :-------------: | --------------------------------------------- | ------- | -------- |
| parallel  |     number      | number of files that will be uploaded at time | -       | true     |
| accept    | string or array | file extension that can be uploaded           | `*`     | false    |
| maxSize   |     number      | max size allowed in bytes                     | -       | false    |
| clickable |     boolean     | toggles clickable feature                     | `true`  | false    |
| multiple  |     boolean     | enables multiple files at once                | `true`  | false    |
| window    |     boolean     | fullscreen dropzone                           | `false` | false    |

### `gv-dropzone-upload`

| Name      |  Type   | Description                   | Default | Required |
| --------- | :-----: | ----------------------------- | ------- | -------- |
| url       | string  | server method path            | `*`     | false    |
| method    | string  | http method                   | `POST`  | false    |
| removable | boolean | toggles remove/cancel feature | `true`  | false    |

## Events

### `gv-dropzone`

| Name    | Return | Description           |
| ------- | ------ | --------------------- |
| onqueue | -      | add to queue callback |

### `gv-dropzone-upload`

| Name     | Return | Description     |
| -------- | ------ | --------------- |
| onfind   | -      | find callback   |
| oncancel | -      | cancel callback |
| onremove | -      | remove callback |
| onupload | -      | upload callback |
