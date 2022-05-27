# Código de Verificação

O `gv-verification-code` é usado para códigos de verificação. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<verification-code-example-1 />

<<< @/docs/.vuepress/components/VerificationCodeExample1.vue

## Propriedades

| Nome      |       Tipo       | Descrição                          | Padrão  | Obrigatório |
| --------- | :--------------: | ---------------------------------- | ------- | ----------- |
| required  |     boolean      | set required style                 | `false` | false       |
| autofocus |     boolean      | set autofocus on the input element | `false` | false       |
| value     | number or string | current value `v-model`            | -       | false       |
| length    | number or string | the size of the code               | `6`     | true        |

## Eventos

| Nome   | Retorno | Descrição     |
| ------ | :-----: | ------------- |
| ondone |    -    | done callback |
