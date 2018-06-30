<template>
<h1>
  <slot>{{text}}</slot>
</h1>
</template>

<script>
export default {
  name: "HelloWorld",
  props:[ "text" ]
}
</script>

<docs>
### Styleguidist Example Docs

Some extra documentation written in a `<docs/>` tag within the single-file `.vue` component definition. Seems pretty useful, eh? Alas, using the custom docs tag seems to break Vue's `serve` and `build` tasks... 😭

```vue
<HelloWorld text="or via props!">
  custom markup
</HelloWorld>
```

</docs>