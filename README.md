# Base58

Encode / Decode using Base58 algorithm. Simplified usage to deal with `String` as well as `Buffer` and `Array`.


*Port from NPM Module [base-x](https://www.npmjs.com/package/base-x)*

Used alphabet: `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`


## Installation

```
meteor add gghez:base58
```

## Usage

Client or Server side, global `Base58` is available:

```
var encoded = Base58.encode('this is a clear sentence.');
// encoded == 'oqj3pKcxTmxVvrcVqyiFSCL5LkvsXjTYBX'

var decoded = Base58.decode(encoded);
// decoded == 'this is a clear sentence.'
```

## API

- `Base58.encode(String|Array|Buffer)`: Returns encoded String, Array or Buffer

- `Base58.decode(String|Array|Buffer)`: Returns decoded String, Array or Buffer
