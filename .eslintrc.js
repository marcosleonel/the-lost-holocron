
module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": [
    "airbnb-base",
    "plugin:node/recommended",
    "plugin:security/recommended",
  ],
  "plugins": [
    "security",
  ],
  "rules": {
    "node/exports-style": ["error", "module.exports"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "node/no-unpublished-require": 0,
    "node/no-undercore-dangle": 0,
    "consistent-return": 0,
  },
};