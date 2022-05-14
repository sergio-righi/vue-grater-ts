# Embed

The `gv-embed` allows you to embed content from different sources. Learn more about the component and its featureas in the following examples.

## Widescreen

The component has the `widescreen` as default ratio.

<embed-example-1 />

<<< @/docs/.vuepress/components/EmbedExample1.vue

## Theater

It adds a frame around the embedded content.

<embed-example-2 />

<<< @/docs/.vuepress/components/EmbedExample2.vue

## Ratio

The ratio of the content can be modified. The component currently supports `1:1`, `4:3`, `16:9` and `21:9`.

<embed-example-3 />

<<< @/docs/.vuepress/components/EmbedExample3.vue

## Props

| Name       |  Type   | Description            | Default | Required |
| ---------- | :-----: | ---------------------- | ------- | -------- |
| src        | string  | path                   | -       | true     |
| theater    | boolean | frame around component | `false` | false    |
| square     | boolean | 1:1                    | `false` | false    |
| portrait   | boolean | 4:3                    | `false` | false    |
| widescreen | boolean | 16:9                   | `false` | false    |
| ultrawide  | boolean | 21:9                   | `false` | false    |
