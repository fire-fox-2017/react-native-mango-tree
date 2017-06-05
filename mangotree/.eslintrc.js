module.exports = {
    "extends": ["airbnb","eslint:recommended"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint", //static class
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //file jsx ignore
      "react/prefer-stateless-function": [0, { "ignorePureComponents": false }], //ignore instance class extends from function
      "react/prop-types": [0, { ignore: [], customValidators: [] }], //ignore validation propps
      "arrow-body-style": ["error", "always"], //ignore body action in arraw function
      "react/self-closing-comp": ["error", {
        "component": false
      }],
      }
};
