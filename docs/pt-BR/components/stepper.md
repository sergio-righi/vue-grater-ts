# Stepper

O `gv-stepper` fornece uma maneira de controlar a navegação usando etapas. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Unlocked

O exemplo padrão permite que o usuário passe de uma etapa para outra clicando nas etapas.

<stepper-example-1 />

<<< @/docs/.vuepress/components/StepperExample1.vue

## Locked

As ações do cabeçalho podem ser desabilitadas para evitar que o usuário passe de uma etapa para outra sem seguir o fluxo predefinido.

<stepper-example-2 />

<<< @/docs/.vuepress/components/StepperExample2.vue

## Inline

A propriedade oculta a área de conteúdo do componente e faz com que o componente funcione em modo somente leitura.

<stepper-example-3 />

<<< @/docs/.vuepress/components/StepperExample3.vue

## Propriedades

### `gv-stepper`

| Nome   |  Tipo   | Descrição                          | Padrão  | Obrigatório |
| ------ | :-----: | ---------------------------------- | ------- | ----------- |
| step   | number  | index of the selected step         | `1`     | false       |
| locked | boolean | disables the click event on header | `false` | false       |
| number | boolean | force indicator to be a number     | `false` | false       |
| inline | boolean | readonly (no content)              | `false` | false       |

### `gv-step`

| Nome     |  Tipo   | Descrição                           | Padrão  | Obrigatório |
| -------- | :-----: | ----------------------------------- | ------- | ----------- |
| icon     | string  | icon to replace the indicator state | -       | true        |
| header   | string  | text on header                      | -       | true        |
| disabled | boolean | disables the step                   | `false` | false       |

## Métodos

| Nome   | Params  | Descrição                     |
| ------ | ------- | ----------------------------- |
| select | int     | moves to a selected index     |
| prev   | -       | moves to previous step        |
| next   | -       | moves to next step            |
| set    | boolean | sets error status to the step |
