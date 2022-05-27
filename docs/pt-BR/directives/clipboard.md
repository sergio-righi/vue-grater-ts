# Clipboard

A diretiva `v-clipboard` é útil para oferecer uma maneira fácil de copiar conteúdo para a área de transferência do usuário. A diretiva também fornece uma opção de retorno de chamada usando `@oncopy` passando a função nela. Saiba mais sobre a diretiva e seus recursos no exemplo a seguir.

## Padrão

O exemplo padrão da diretiva.

<clipboard-example-1 />

<<< @/docs/.vuepress/components/ClipboardExample1.vue

## Self

O modificador `self` permite que o componente copie o texto interno do elemento. A diretiva também tem o modificador `html` e `outer` para dizer explicitamente ao componente para copiar o conteúdo como html.

<clipboard-example-2 />

<<< @/docs/.vuepress/components/ClipboardExample2.vue

## Target

O modificador `target` permite que o componente copie de um destino diferente do acionador. A diretiva também tem o modificador `value` para dizer explicitamente ao componente para copiar o atributo value.

<clipboard-example-3 />

<<< @/docs/.vuepress/components/ClipboardExample3.vue
