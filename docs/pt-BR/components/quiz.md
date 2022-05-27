# Questionário

O `gv-quiz` é uma ferramenta para criar questionários. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Como utilizar

O exemplo padrão do componente.

<quiz-example-1 />

<<< @/docs/.vuepress/components/QuizExample1.vue

## Propriedades

### `gv-quiz`

| Nome         |  Tipo   | Descrição                                  | Padrão | Obrigatório |
| ------------ | :-----: | ------------------------------------------ | ------ | ----------- |
| min          | number  | sets the min value for scale questions     | `1`    | false       |
| max          | number  | sets the max value for scale questions     | `5`    | false       |
| pageSize     | number  | sets how many itms to display in each page | `1`    | false       |
| forward      | boolean | the pagination only moves forward          | -      | false       |
| confirmation | boolean | shows a dialog to confirm the submission   | -      | false       |

### `gv-quiz-item`

| Nome      |  Tipo   | Descrição                                            | Padrão | Obrigatório |
| --------- | :-----: | ---------------------------------------------------- | ------ | ----------- |
| id        | string  | sets the `id` of the question                        | -      | false       |
| open      | boolean | brief description (type of question)                 | -      | false       |
| rank      | boolean | sort by rank (type of question)                      | -      | false       |
| scale     | boolean | scale (type of question)                             | -      | false       |
| options   |  array  | the items that will be used as options               | `[]`   | false       |
| required  | boolean | sets the question as required                        | -      | false       |
| multiple  | boolean | accepts multiple selections (type of question)       | -      | false       |
| multiline | boolean | uses combined with `open` to accept long description | -      | false       |

## Slots

### `gv-quiz`

| Nome    | Descrição                    |
| ------- | ---------------------------- |
| header  | header content               |
| content | the main content (questions) |

### `gv-quiz-item`

| Nome   | Descrição      |
| ------ | -------------- |
| header | header content |
| footer | footer content |
