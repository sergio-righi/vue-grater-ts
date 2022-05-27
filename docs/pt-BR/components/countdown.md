# Contagem regressiva

O `gv-countdown` fornece um cronômetro de contagem regressiva. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

Calcula o intervalo de tempo entre a data de hoje e o `valor` da propriedade informada.

<countdown-example-1 />

<<< @/docs/.vuepress/components/CountdownExample1.vue

## Callback

It allows you to control what will happen when the time ends.

<countdown-example-2 />

<<< @/docs/.vuepress/components/CountdownExample2.vue

## Propriedades

| Nome  |      Tipo      | Descrição                                    | Padrão | Obrigatório |
| ----- | :------------: | -------------------------------------------- | ------ | ----------- |
| value | date or number | difference when date and seconds when number | -      | false       |

## Eventos

| Nome     | Retorno | Descrição                           |
| -------- | :-----: | ----------------------------------- |
| ontimeup |  node   | callback function when time is over |
