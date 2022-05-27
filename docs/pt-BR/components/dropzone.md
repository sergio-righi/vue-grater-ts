# Dropzone

O `gv-dropzone` fornece um conjunto de ferramentas para fazer upload de arquivos de forma interativa, o usuário só precisa soltar os arquivos dentro da área. Saiba mais sobre o componente e seus recursos no exemplo a seguir.

## Como utilizar

O exemplo padrão do componente.

<dropzone-example-1 />

<<< @/docs/.vuepress/components/DropzoneExample1.vue

## Propriedades

### `gv-dropzone`

| Nome      |      Tipo       | Descrição                                     | Padrão  | Obrigatório |
| --------- | :-------------: | --------------------------------------------- | ------- | ----------- |
| parallel  |     number      | number of files that will be uploaded at time | -       | true        |
| accept    | string or array | file extension that can be uploaded           | `*`     | false       |
| maxSize   |     number      | max size allowed in bytes                     | -       | false       |
| clickable |     boolean     | toggles clickable feature                     | `true`  | false       |
| multiple  |     boolean     | enables multiple files at once                | `true`  | false       |
| window    |     boolean     | fullscreen dropzone                           | `false` | false       |

### `gv-dropzone-upload`

| Nome      |  Tipo   | Descrição                     | Padrão | Obrigatório |
| --------- | :-----: | ----------------------------- | ------ | ----------- |
| url       | string  | server method path            | `*`    | false       |
| method    | string  | http method                   | `POST` | false       |
| removable | boolean | toggles remove/cancel feature | `true` | false       |

## Eventos

### `gv-dropzone`

| Nome    | Retorno | Descrição             |
| ------- | ------- | --------------------- |
| onqueue | -       | add to queue callback |

### `gv-dropzone-upload`

| Nome     | Retorno | Descrição       |
| -------- | ------- | --------------- |
| onfind   | -       | find callback   |
| oncancel | -       | cancel callback |
| onremove | -       | remove callback |
| onupload | -       | upload callback |
