# node-modules-resolve

[![travis build](https://img.shields.io/travis/sneas/node-modules-resolve.svg?style=flat-square&maxAge=2592000)](https://travis-ci.org/sneas/node-modules-resolve)
[![codecov coverage](https://img.shields.io/codecov/c/github/sneas/node-modules-resolve.svg?style=flat-square)](https://codecov.io/github/sneas/node-modules-resolve)
[![version](https://img.shields.io/npm/v/node-modules-resolve.svg?style=flat-square)](http://npm.im/node-modules-resolve)
[![MIT License](https://img.shields.io/npm/l/node-modules-resolve.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)


Resolve path in a project's local `node_modules` folder

# install
```
npm install node-modules-resolve
```

# usage

```
const nmResolve = require('node-modules-resolve');
const realPath = nmResolve('existing/module');
```