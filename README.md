# Base58

[![Build Status](https://travis-ci.org/gghez/meteor-base58.svg?branch=master)](https://travis-ci.org/gghez/meteor-base58)

Encode / Decode using Base58 algorithm. Simplified usage to deal with `String` as well as `Buffer` and `Array`.


*Port from NPM Module [base-x](https://www.npmjs.com/package/base-x)*

Used alphabet: `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`


## Installation

```
meteor add gghez:base58
```

## Usage

Client or Server side, global `Base58` is available:

```js
var encoded = Base58.encode('this is a clear sentence.');
// encoded == 'oqj3pKcxTmxVvrcVqyiFSCL5LkvsXjTYBX'
```

You can also use a `Buffer` as input for `Base58.encode` on Server where NodeJS provides `Buffer` object:

```js
if (Meteor.isServer){
  var buffer = new Buffer('this is a clear sentence.');
  encoded = Base58.encode(buffer);
}
```

Decoding a Base58 string is very simple:

```js
Base58.decode('oqj3pKcxTmxVvrcVqyiFSCL5LkvsXjTYBX');
// 'this is a clear sentence.'

Base58.decodeArray('oqj3pKcxTmxVvrcVqyiFSCL5LkvsXjTYBX');
// [116, 104, 105...]

```

## API

### Base58.encode(source)

Allow encoding a `String`, `Array` or `Buffer` to **Base58** string. Note that `Buffer` encoding is only available on Server (NodeJS context).

### Base58.decode(encoded, format);

Decode an encoded Base58 string (1st parameter), to a `String`, `Array` or `Buffer` object.
2nd parameter is the output format: 'string' for `String`, 'array' for `Array` and 'buffer' for `Buffer`.
