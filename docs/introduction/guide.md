# Quick Started

A short guide to get started using the library.

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

```bash
$ npm install grater-vue-ts --save
```

Then register `grater-vue-ts` components and directives all at once in your app's entry:

```js
// plugins/grater-vue-ts.js
import Vue from "vue";
import * as GraterVue from "grater-vue-ts/dist/grater-vue-ts.umd.min";
// light theme (default)
import "grater-vue-ts/dist/light.min.css";
// or dark
import "grater-vue-ts/dist/dark.min.css";
// or custom
import "your-path/your-theme.css;
import "grater-vue-ts/dist/palette.min.css"; // only if you want to use the 'bg', 'color' and 'border' property
import "grater-vue-ts/dist/grater-vue-ts.css"; // required

Vue.use(GraterVue);
```

## Disclaimer

This library is currently **under development** and its features are constantly being modified, be aware that issues might occur.
