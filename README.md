# @comandeer/babel-plugin-banner

[![Build Status](https://travis-ci.org/Comandeer/babel-plugin-banner.svg?branch=master)](https://travis-ci.org/Comandeer/babel-plugin-banner) [![Dependency Status](https://david-dm.org/Comandeer/babel-plugin-banner.svg)](https://david-dm.org/Comandeer/babel-plugin-banner) [![devDependency Status](https://david-dm.org/Comandeer/babel-plugin-banner/dev-status.svg)](https://david-dm.org/Comandeer/babel-plugin-banner#info=devDependencies) [![npm (scoped)](https://img.shields.io/npm/v/@comandeer/babel-plugin-banner.svg)](https://www.npmjs.com/package/@comandeer/babel-plugin-banner) [![Greenkeeper badge](https://badges.greenkeeper.io/Comandeer/babel-plugin-banner.svg)](https://greenkeeper.io/)

Prepends given comment to the beginning of babelified code.

## Installation

```bash
npm install @comandeer/babel-plugin-banner [--save-dev]
```

## Usage

```javascript
{
  "presets": ["es2015"],
  "plugins": [
    ["@comandeer/babel-plugin-banner", {
      "banner": "/*! Some nice comment */"
    }]
  ]
}
```

Available options:
* `banner`: content of the banner comment; must be a valid JS comment.

## License

See [LICENSE](./LICENSE) file for details.
