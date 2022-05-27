# Avatar

O `gv-avatar` geralmente é para exibir fotos de perfil do usuário, mas também pode ser usado para exibir ícones e texto. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Estilo

O estilo da borda pode ser alterado, as opções suportadas são `quadrado` e `redondo`. O padrão é 'círculo'.

<avatar-example-1 />

<<< @/docs/.vuepress/components/AvatarExample1.vue

## Tamanho

There are two predefined sizes `sm` and `lg`.

<avatar-example-2 />

<<< @/docs/.vuepress/components/AvatarExample2.vue

## Propriedades

| Nome    |  Tipo   | Descrição           | Padrão  | Obrigatório |
| ------- | :-----: | ------------------- | ------- | ----------- |
| bg      | string  | background          | -       | false       |
| color   | string  | font color          | -       | false       |
| sm      | boolean | small size          | `false` | false       |
| lg      | boolean | large size          | `false` | false       |
| square  | boolean | border shape        | `false` | false       |
| round   | boolean | border shape        | `false` | false       |
| outline | boolean | no background style | `false` | false       |
