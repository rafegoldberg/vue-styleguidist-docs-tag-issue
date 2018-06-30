## Vue Styleguidist Docs Tag Issue

An example repo re: vue-styleguidist/vue-styleguidist#154.

#### Steps to Reproduce

1. `git clone` the repo
2. run `yarn` to install dependencies
3. try running `yarn dox` (you should see the styleguide; note that it pulls in Markdown from our component's inline `<docs/>` tag.)
4. now try running `yarn dev` (you should see an error about the inline `<docs/>` tag and "appropriate loader[s]")
5. in the component `.vue` file, comment out the entire docs tag:
  ```
  // <docs>
  //   <!--etc-->
  // </docs>
  ```
6. try rerunning the `yarn dev` server (when commented out the build should succeed.)