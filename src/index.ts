import "./assets/default.scss";

// src/index.ts
import * as components from "./components"
import * as directives from "./directives"

// external plugins
import * as utils from "grater-utils-ts/src";

const install = (instance: any) => {
  // global prototype
  instance.prototype.$utils = utils;

  // components
  Object.entries(components).forEach(([componentName, component]: any) => {
    instance.component(component.name, component);
  });

  // directives
  Object.entries(directives).forEach(([componentName, directive]: any) => {
    instance.directive(directive.key, directive.value);
  });
}

export { install }

// export * from './components'
// export * from './directives'