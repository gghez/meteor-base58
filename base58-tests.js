
Tinytest.add('Encode / Decode String', function (test) {
  var clear = 'This is a clear sentence.';

  var encoded = Base58.encode(clear);

  test.equal(typeof encoded, 'string');

  var decoded = Base58.decode(encoded);

  test.equal(decoded, clear);

});
