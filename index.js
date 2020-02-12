module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "prettier",
    "prettier/react"
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
        "newlines-between": "always-and-inside-groups"
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"]
      }
    }
  }
};
