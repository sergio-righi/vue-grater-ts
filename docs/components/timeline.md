# Timeline

The `gv-timeline` is useful for stylistically displaying chronological information. Learn more about the component and its featureas in the following examples.

## Standard

The default example of the component.

<timeline-example-1 />

<<< @/docs/.vuepress/components/TimelineExample1.vue

## Options

The component provides a bunch of options that makes it flexible.

<timeline-example-2 />

<<< @/docs/.vuepress/components/TimelineExample2.vue

## Props

### `gv-timeline-item`

| Name     |  Type   | Description | Default | Required |
| -------- | :-----: | ----------- | ------- | -------- |
| icon     | string  | name        | -       | false    |
| image    | string  | path        | -       | false    |
| header   | string  | header text | -       | false    |
| success  | boolean | status      | `false` | false    |
| sm       | boolean | small size  | `false` | false    |
| lg       | boolean | large size  | `false` | false    |
| error    | boolean | status      | `false` | false    |
| active   | boolean | status      | `false` | false    |
| warning  | boolean | status      | `false` | false    |
| disabled | boolean | status      | `false` | false    |
