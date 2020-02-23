module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "@nuxtjs/eslint-config-typescript"
  ],
  plugins: ["@typescript-eslint", "vue", "prettier"],
  // add your custom rules here
  rules: {
    "import/order": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "space-before-function-paren": 0
  }
};
