# Parallax

The `gv-parallax` is a easy way to create the parallax effect. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<parallax-example-1 />

<<< @/docs/.vuepress/components/ParallaxExample1.vue

## Props

| Name    |  Type   | Description                               | Default | Required |
| ------- | :-----: | ----------------------------------------- | ------- | -------- |
| src     | string  | image path                                | -       | true     |
| preload | string  | the path of the previous image (lazyload) | -       | false    |
| height  | number  | cointainer height in pixels               | `250`   | false    |
| title   | string  | text over image                           | -       | false    |
| overlay | boolean | toggles shadow over image                 | `false` | false    |
