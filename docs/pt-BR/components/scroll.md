# Scroll

O `gv-scroll` fornece uma maneira de criar um contêiner rolável. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<scroll-example-2 />

<<< @/docs/.vuepress/components/ScrollExample2.vue

## Vertical

A opção `vertical` pode ser configurada para criar um container rolável vertical. Ele deve ser combinado com a propriedade `height` para especificar a altura do contêiner, caso contrário, o contêiner não será rolável.

<scroll-example-3 />

<<< @/docs/.vuepress/components/ScrollExample3.vue

## Propriedades

| Nome           |  Tipo   | Descrição                            | Padrão  | Obrigatório |
| -------------- | :-----: | ------------------------------------ | ------- | ----------- |
| height         | string  | sets `height` style property         | -       | false       |
| stretch        | boolean | fit to parent and jusitfy content    | -       | false       |
| vertical       | boolean | sets container to vertical scrolling | `false` | false       |
| hide-arrow     | boolean | hides the controlling arrows         | `false` | false       |
| hide-scrollbar | boolean | hides the component scrollbar        | `false` | false       |
