### Vue Styleguidist `<docs/>` Issue

An example repo re: [**vue-styleguidist** issue #154](https://github.com/vue-styleguidist/vue-styleguidist/issues/154):

> I've noticed a problem when using Vue Styleguidist's [inline `<docs/>` tag](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md#external-examples-using-doclet-tags) to add usage examples to my components. When I run Styleguidist (`v1.7.12`) e'erything works as expected. But if I then try to run the Vue build (with `vue@2.5.16` and `@vue/cli-service@3.0.0-rc.3`) I get the following error:
> 
> ```
> ERROR  Failed to compile with 1 errors
> error  in ./src/components/UI/Box/Image.vue?vue&type=custom&index=0&blockType=docs&lang=md
> 
>  Module parse failed: Unterminated string constant (63:11)
>  You may need an appropriate loader to handle this file type.
>  |
>  |
>  > Hello, here's a further usage example!
>  |
> ```
> 
> With older versions of `vue-styleguidist` these docs tag worked seamlessly — no extra configuration or unexpected errors! Have I made some silly mistake? Is there a new step I'm missing from some update?

### Steps to Reproduce

1. First `git clone` the repo; run `yarn` to install dependencies.
2. To verify your installation, run `yarn dox`. (It should build + serve the style guide. Note how it pulls in the Markdown from our component's inline `<docs/>` tag without error as expected!)
3. Next, try running `yarn dev`. **_You'll get an error about that inline `<docs/>` tag._** (It will tell you that you're missing the "appropriate loaders" to render the tag properly.)
4. To fix this, comment out the entire `<docs/>` tag in our component file: (use single-line comments per below; block-comments will break the Webpack build!)

    ```
    // <docs>
    //   <!--etc-->
    // </docs>
    ```

    Now try rerunning the `yarn dev` server — with the `<docs/>` tag commented, the Vue build process succeeds without a hitch!

### Expected Behavior

At a simple level, I'd imagine the Vue build process should work seamlessly even *if* some components include an inline `<docs/>` tag. More specifically, I'd expect Styleguidist to add any/all Webpack loaders or other configurations necessary for Vue to render those `<docs/>` tag. 