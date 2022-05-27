# Calendário

O `gv-calendar` é um calendário simples onde você pode adicionar datas personalizadas e categorizá-las com cores diferentes. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<calendar-example-1 />

<<< @/docs/.vuepress/components/CalendarExample1.vue

## Propriedades

| Nome           |  Tipo   | Descrição       | Padrão   | Obrigatório |
| -------------- | :-----: | --------------- | -------- | ----------- |
| min            |  date   | min date        | null     | true        |
| max            |  date   | max date        | null     | false       |
| value          |  date   | current date    | null     | false       |
| events\*       |  array  | `object`        | null     | false       |
| categories\*\* |  array  | `object`        | `object` | false       |
| holidays\*\*\* |  array  | `date`          | null     | false       |
| locale         | string  | language        | `en-CA`  | false       |
| weekend        | boolean | toggles weekend | `true`   | false       |

\* Atributos `CalendarEvent` `id`, `date`, `startDate`, `endDate`, `category` e `description`<br/>
\*\* Atributos `CalendarCategory` `category` e `color`<br/>
\*\*\* deve ser um array de `Date`<br/>

## Métodos

| Nome       |    Params     | Descrição                                     | Retorno |
| ---------- | :-----------: | --------------------------------------------- | ------- |
| add        | CalendarEvent | adds an event                                 | null    |
| addHoliday |     Date      | adds an holiday                               | null    |
| move       |      int      | use `1` for `forward` and `-1` for `backward` | null    |
| remove     |      int      | removes event by `id`                         | null    |
