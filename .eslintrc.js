module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@react-native",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
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
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: { "arrow-body-style": "error", "prefer-arrow-callback": "error" },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  files: ["src/**/*.{js,jsx,ts,tsx}"],
};
