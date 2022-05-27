# Selecionador

O `gv-picker` é um componente de seleção completo que permite aos usuários selecionar datas e horas. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Date

O único exemplo de data.

<picker-example-1 />

<<< @/docs/.vuepress/components/PickerExample1.vue

## Year

O exemplo do ano.

<picker-example-2 />

<<< @/docs/.vuepress/components/PickerExample2.vue

## Month

O exemplo da opção do mês.

<picker-example-3 />

<<< @/docs/.vuepress/components/PickerExample3.vue

## Time

O tempo apenas exemplo.

<picker-example-4 />

<<< @/docs/.vuepress/components/PickerExample4.vue

## Datetime

O exemplo completo de data e hora.

<picker-example-5 />

<<< @/docs/.vuepress/components/PickerExample5.vue

## Popup

A opção popup permite que o componente funcione como um popup em vez de ser anexado a um campo.

<picker-example-6 />

<<< @/docs/.vuepress/components/PickerExample6.vue

## Propriedades

| Nome    |      Tipo      | Descrição               | Padrão  | Obrigatório |
| ------- | :------------: | ----------------------- | ------- | ----------- |
| min     |      date      | maximum date            | -       | false       |
| max     |      date      | minumum date            | -       | false       |
| value   | date or number | initial value           | -       | false       |
| locale  |      date      | language                | `en-CA` | false       |
| isDate  |      date      | toggle date module      | `true`  | false       |
| isAmpm  |      date      | sets `12` or `24` hours | `true`  | false       |
| isTime  |      date      | sets time only          | `false` | false       |
| isYear  |      date      | sets year only          | `false` | false       |
| isMonth |      date      | sets month only         | `false` | false       |
| isPopup |      date      | open as modal           | `false` | false       |
