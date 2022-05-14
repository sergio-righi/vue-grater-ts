# Indexer

The `gv-indexer` provides an indexer to sort a list of items. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<indexer-example-1 />

<<< @/docs/.vuepress/components/IndexerExample1.vue

## Props

### `gv-indexer`

| Name      |  Type   | Description                      | Default | Required |
| --------- | :-----: | -------------------------------- | ------- | -------- |
| shortcut  | boolean | keyboard shortcut `alt+key`      | `true`  | true     |
| highlight | boolean | highlight on scroll              | `true`  | false    |
| nav       | boolean | toggles nav                      | `true`  | false    |
| top       | boolean | nav on top                       | `false` | false    |
| right     | boolean | nav on right                     | `false` | false    |
| hidden    | boolean | hides the title between sections | `false` | false    |

### `gv-indexer-item`

| Name   |  Type  | Description               | Default | Required |
| ------ | :----: | ------------------------- | ------- | -------- |
| header | string | header and sort parameter | -       | true     |
