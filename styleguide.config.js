const
path = require("path")

module.exports = {
  
  title: "WsUi",
  styleguideDir: './docs',

  sections: [
    { name: "Components",
      components: 'src/components/**/*.vue',
      },
  ],

  navigation: true,
  showCode: true,
  showUsage: false,
  defaultExample: false,
  editorConfig: {
    lineNumbers: true
  },

}