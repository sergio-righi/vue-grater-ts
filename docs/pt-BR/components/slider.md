# Controle deslizante

O `gv-slider` fornece uma maneira interativa de selecionar um valor numérico arrastando uma alça. Saiba mais sobre o componente e seus recursos nos exemplos a seguir.

## Padrão

O exemplo padrão do componente.

<slider-example-1 />

<<< @/docs/.vuepress/components/SliderExample1.vue

## Personalizado

É flexível e pode ser personalizado de acordo com as necessidades.

<slider-example-2 />

<<< @/docs/.vuepress/components/SliderExample2.vue

## Propriedades

| Nome     |       Tipo       | Descrição                                    | Padrão  | Obrigatório |
| -------- | :--------------: | -------------------------------------------- | ------- | ----------- |
| value    | array or number  | current value                                | `[]`    | false       |
| disabled |     boolean      | html attribute                               | `false` | false       |
| max      | number or string | maximum value                                | `100`   | false       |
| min      | number or string | minumum value                                | `0`     | false       |
| step     | number or string | specifies the interval between legal numbers | `1`     | false       |
| icon     |      string      | icon name (suffix)                           | -       | false       |
| text     |      string      | text (suffix)                                | -       | false       |

## Eventos

| Nome     | Retorno         | Descrição              |
| -------- | --------------- | ---------------------- |
| onchange | number or array | value changes callback |
