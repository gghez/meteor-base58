Package.describe({
    name: 'gghez:base58',
    version: '1.1.1',
    // Brief, one-line summary of the package.
    summary: 'Encode / Decode with Base58 algorithm.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/gghez/meteor-base58',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    // Meteor min version supported
    api.versionsFrom('1.2.1');

    // Package dependencies
    api.use('ecmascript');

    // Exported objects
    api.export('Base58');

    // Package owned files
    api.addFiles([
        'basex.js',
        'base58.js'
    ]);
});

Package.onTest(function(api) {
    // Test depedencies
    api.use('ecmascript');
    api.use('tinytest');
    api.use('gghez:base58');

    // Package test files
    api.addFiles('base58-tests.js');
});
