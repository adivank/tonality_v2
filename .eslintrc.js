module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "indent": "off",
    "vue/html-indent": "off",
    "semi": "off",
    "space-before-function-paren": "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/multi-word-component-names": "off",
    "vue/attributes-order": ["warn", {
      "order": ["DEFINITION", "LIST_RENDERING", "CONDITIONALS", "RENDER_MODIFIERS", "EVENTS", ["OTHER_ATTR", "GLOBAL"], ["UNIQUE", "SLOT"], "TWO_WAY_BINDING", "OTHER_DIRECTIVES", "CONTENT"],
      "alphabetical": false
    }]
  }
};