# Parallax

O `gv-parallax` é uma maneira fácil de criar o efeito de paralaxe. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<parallax-example-1 />

<<< @/docs/.vuepress/components/ParallaxExample1.vue

## Propriedades

| Nome    |  Tipo   | Descrição                                 | Padrão  | Obrigatório |
| ------- | :-----: | ----------------------------------------- | ------- | ----------- |
| src     | string  | image path                                | -       | true        |
| preload | string  | the path of the previous image (lazyload) | -       | false       |
| height  | number  | cointainer height in pixels               | `250`   | false       |
| title   | string  | text over image                           | -       | false       |
| overlay | boolean | toggles shadow over image                 | `false` | false       |
