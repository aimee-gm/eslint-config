# @aimee.gm/eslint-config

## Installation

```
yarn add -D eslint @aimee.gm/eslint-config
```

Create a `.eslintrc.js` file:

```js
module.exports = {
  extends: "@aimee.gm/eslint-config"
};
```

Add a script to `package.json`:

```json
{
  "lint": "eslint . --ext=js,ts,tsx"
}
```
