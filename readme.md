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
2. Run `yarn dox` to start Styleguidist. Open the link to the local styleguide in your browser to verify everything's working. (Our component's `<docs/>` tag should "just work"!)
3. But now try running `yarn dev` to start the Vue dev server... **_You should get an error about our 'lil inline `<docs/>` tag._** 😭(It'll tell you that you're missing the "appropriate loaders" to render the tag properly.)
4. To fix this, comment out the entire `<docs/>` tag in the components `.vue` file. (Use single-line comments; block-comments will break the Webpack build:)

    ```js
    // <docs>
    //   <!--etc-->
    ```

5. Now try rerunning the `yarn dev` server — with our `<docs/>` tags commented out, the Vue build process succeeds without a hitch!

### Expected Behavior

At a simple level, I'd imagine the Vue build process should work seamlessly even *if* some components include an inline `<docs/>` tag. (More specifically, I'd imagine Styleguidist would have to add any/all Webpack loaders, or whatever config files etc. are necessary for Vue to render those `<docs/>` tags!)
