# Scroll

A diretiva `v-scroll` fornece uma maneira flexível de criar âncoras para rolagem. Saiba mais sobre a diretiva e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão da diretiva usando os modificadores `top` para mover para o topo e `bottom` para mover para o fundo. Existe uma opção para especificar um valor com o seletor do elemento que você deseja rolar, como `.{some-class}` e `#{some_id}`. Use `@onreach` caso queira executar alguma ação quando a rolagem atingir o alvo.

<scroll-example-1 />

<<< @/docs/.vuepress/components/ScrollExample1.vue
