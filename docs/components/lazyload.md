# Lazyload

The `gv-lazyload` provides a way to save data and reducing pages loading time by delaying large content loading. Learn more about the component and its featureas in the following example.

## Usage

The default example of the component.

<lazyload-example-1 />

<<< @/docs/.vuepress/components/LazyloadExample1.vue

## Props

| Name    |  Type   | Description          | Default | Required |
| ------- | :-----: | -------------------- | ------- | -------- |
| src     | string  | target path          | null    | true     |
| preload | string  | initial path         | null    | true     |
| alt     | string  | html attribute       | null    | false    |
| method  | string  | http method          | `GET`   | false    |
| auto    | boolean | triggers on load     | `false` | false    |
| scroll  | boolean | triggers on viewport | `false` | false    |
