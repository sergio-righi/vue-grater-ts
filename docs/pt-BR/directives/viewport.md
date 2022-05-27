# Viewport

A diretiva `v-viewport` tem como objetivo fornecer uma maneira simples de detectar se o elemento está na viewport `@onvisible`, bem como quando saiu de `@onhidden`. Saiba mais sobre a diretiva e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão da diretiva usando o modificador `self` para indicar que o gatilho é o próprio elemento, porém, é possível especificar um valor com o seletor do elemento que você deseja observar como `.{some-class}` e `#{some_id}`.

<viewport-example-1 />

<<< @/docs/.vuepress/components/ViewportExample1.vue
