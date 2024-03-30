module.exports = {
  ignorePatterns: ["/**/*.*", "!src/**/*.*"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:react-hooks/recommended",    
    "prettier"
  ],
  
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files : ["**/src/**/*.test.{ts,tsx}"],
      rules:{
         "i18next/no-literal-string":"off",
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "i18next", "@typescript-eslint",'prettier', "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    indent: "off",
    "@typescript-eslint/type-annotation-spacing": "warn",
    // "@typescript-eslint/indent": ["warn", 2, { ignoredNodes: ["JSXElement *", "JSXElement"] }],
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/prefer-nullish-coalescing": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/naming-convention": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "i18next/no-literal-string": ["warn", { markupOnly: false }],
    "@typescript-eslint/promise-function-async": 0,
    "prettier/prettier": 
    [ "warn",
      {
        "endOfLine": "auto"}
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    'react/display-name':0
  },
}
