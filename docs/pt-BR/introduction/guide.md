# Começar

Um pequeno guia para começar a usar a biblioteca.

## Instalação

Se você estiver usando empacotadores de módulos como o Webpack, você pode incluir diretamente o pacote em seu projeto por meio de:

NPM:

```bash
$ npm i grater-vue
```

Em seguida, registre componentes e diretivas `grater-vue` de uma só vez na entrada do seu aplicativo:

```js
// plugins/grater-vue.js
import Vue from 'vue';
import * as GraterVue from 'grater-vue/dist/grater-vue.umd.min';
// light theme (default)
import 'grater-vue/dist/light.min.css';
// or dark
import 'grater-vue/dist/dark.min.css';
// or custom
import 'caminho-para-tema/nome-do-tema.css';
import 'grater-vue/dist/palette.min.css'; // only if you want to use the 'bg', 'color' and 'border' property
import 'grater-vue/dist/grater-vue.css'; // required

Vue.use(GraterVue);
```

## Isenção de responsabilidade

Esta biblioteca está atualmente **em desenvolvimento** e seus recursos estão sendo constantemente modificados, esteja ciente de que podem ocorrer problemas.
