# Video

The `gv-video` provides a full featured video player. Learn more about the component and its featureas in the following examples.

## Usage

The default example of the component

<video-example-1 />

<<< @/docs/.vuepress/components/VideoExample1.vue

## Props

### `gv-video`

| Name     |       Type       | Description                       | Default | Required |
| -------- | :--------------: | --------------------------------- | ------- | -------- |
| loop     |     boolean      | restart as it ends                | `false` | false    |
| autoplay |     boolean      | stats when ready                  | `false` | false    |
| volume   | number or string | sets de default volume `0` to `1` | `1`     | false    |
| poster   | object or string | the poster image path             | null    | false    |
| time     |      number      | the start time in seconds         | `0`     | false    |
| undock   |     boolean      | toggles undock feature            | `false` | false    |

### `gv-video-item`

| Name       |  Type  | Description                      | Default | Required |
| ---------- | :----: | -------------------------------- | ------- | -------- |
| src        | string | path where the source is located | null    | true     |
| resolution | string | source resolution                | null    | true     |
