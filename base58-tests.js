Tinytest.add('Encoding result should be a string', function(test) {
    var clear = 'Some words here.';
    var encoded = Base58.encode(clear);
    test.equal(typeof encoded, 'string');
});

Tinytest.add('Base58 algorithm is symetrical', function(test) {
    var clear = 'This is a clear string';
    test.equal(Base58.decode(Base58.encode(clear)), clear);
});

// Buffer is only defined in NodeJS context
if (Meteor.isServer) {
    Tinytest.add('Encoding Buffer instance', function(test) {
        var clear = 'This is a clear string';
        var buffer = new Buffer(clear);

        var encodedBuffer = Base58.encode(buffer);
        test.equal(encodedBuffer, Base58.encode(clear));
    });
}

Tinytest.add('Encoding byte array', function(test) {
    var clear = 'This is a clear string';
    var bytes = [];
    for (var i = 0; i < clear.length; i++) {
        bytes.push(clear.charCodeAt(i));
    }

    var encodedBytes = Base58.encode(bytes);
    test.equal(encodedBytes, Base58.encode(clear));
});

Tinytest.add('Decoding as byte array', function(test) {
    var clear = 'This is a clear string';
    var encoded = Base58.encode(clear);

    var bytes = [];
    for (var i = 0; i < clear.length; i++) {
        bytes.push(clear.charCodeAt(i));
    }

    test.equal(Base58.decodeArray(encoded), bytes);
});
