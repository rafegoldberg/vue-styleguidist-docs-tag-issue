## Vue Styleguidist Docs Tag Issue

An example repo re: [**@vue-styleguidist**#154](https://github.com/vue-styleguidist/vue-styleguidist/issues/154).

> I'm having issues using the `<docs/>` tag. I tried adding some additional examples to one of my single-file `.vue` components:
>
> ```
> <docs>
> Hello, here's a further usage example:
> 
>   <UiBoxImage>
> 	<UiHeading :level=2>Default Example Usage</UiHeading>
>   </UiBoxImage>
> 
> </docs>
> ```
> 
> When I run styleguidist (`v1.7.11`) e'erything compiles as expected. But if I try to run the Vue dev server now I get the following error re: that `<docs/>` tag:
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
> I vaguely understand how Vue's custom blocks work, so on some level I'd guess the issue is external. However, I know when I'd used older versions of `vue-styleguidist` those docs tag worked seamlessly without any extra configuration. Have I made some dumb mistake? Is there a new step that I'm missing?

#### Steps to Reproduce

1. First `git clone` the repo; run `yarn` to install dependencies.
2. To verify your installation, run `yarn dox`. (It should build + serve the style guide. Note how it pulls in the Markdown from our component's inline `<docs/>` tag without error as expected!)
3. Next, try running `yarn dev`. **_You'll get an error about that inline `<docs/>` tag._** (It will tell you that you're missing the "appropriate loaders" to render the tag properly.)
4. To fix this, comment out the entire `<docs/>` tag in our component file:

    ```
    // <docs>
    //   <!--etc-->
    // </docs>
    ```

    Now try rerunning the `yarn dev` server. With the docs tag commented out, the Vue build process should succeed.