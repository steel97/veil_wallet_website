import antfu from "@antfu/eslint-config";

export default antfu({
  vue: true,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  rules: {
    "quotes": ["error", "double", { avoidEscape: true }],
    "semi": ["error", "always"],
    "no-empty": "off",
    "no-constant-condition": "off",
    "no-control-regex": "off",
    "node/prefer-global/process": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "unused-imports/no-unused-vars": "off",
    "style/eol-last": ["error", "never"],
    "vue/block-order": ["error", {
      order: ["template", "script", "style"],
    }],
    "ts/ban-ts-comment": "off",
    "vue/html-self-closing": "off",
    "ts/no-duplicate-enum-values": "off",
    "vue/no-parsing-error": "off",
    "unicorn/no-new-array": "off",
    "regexp/no-dupe-characters-character-class": "off",
    "antfu/top-level-function": "off",
    "ts/no-use-before-define": "off",
    "vue/require-component-is": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
});