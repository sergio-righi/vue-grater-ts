# Theme

The library still does not have any theme other than the default. However, it is possible to customize the theme by creating your own file such as the following example:

```css
:root {
  --gv-primary: #1a8be9; /* main color */
  --gv-color-primary: #ffffff; /* font color for contrasting the main color */
  --gv-accent: #0065b8; /* contrast color */
  --gv-color-accent: #ffffff;
  --gv-color-dark: #303030; /* used when the component has to be dark such as snackbar */
  --gv-color-light: #e8e8e8; /* used when the component has to be light  */
  --gv-color-overlay: rgba(200, 200, 200, 0.3); /* background for pop-ups */
  --gv-color-overlay-dark: rgba(60, 60, 60, 0.3); /* darker */
  --gv-success: #409444; /* success style */
  --gv-color-success: #ffffff;
  --gv-error: #f22112;
  --gv-color-error: #ffffff;
  --gv-warning: #ffe715;
  --gv-color-warning: #000000;
  --gv-info: #506974;
  --gv-color-info: #ffffff;
  --gv-color-link: #1a8be9; /* font color of the `a` tag */

  --gv-color-background: initial; /* background for the `html` and `body` tags */
  --gv-color-box-shadow: #cccccc; /* box shadow style for components such as modals and dialogs */
  --gv-color-box-shadow-dark: #505050; /* darker */
  --gv-secondary: #cacaca; /* secondary color */
  --gv-secondary-light: #e8e8e8; /* variant to create contrast */
  --gv-secondary-dark: #a8a8a8; /* darker */
  --gv-color-border: #d5d5d5; /* border color */
  --gv-color-font: #404040; /* font color */
  --gv-disabled: var(--gv-secondary); /* disable style */
  --gv-color-disabled: #aaaaaa;
  --gv-readonly: var(--gv-secondary-light); /* readonly style */
  --gv-color-readonly: #606060;
  --gv-color-theme: white; /* contrast from the background color of the body */
}
```
