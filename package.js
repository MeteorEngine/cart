Package.describe({
  name: 'meteorengine:cart',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  // Dependencies
  api.use(['mongo', 'templating', 'tracker', 'reactive-var']);
  api.use('grigio:babel@0.1.6');
  api.use('meteorengine:payments', {unordered: false});

  var path = Npm.require('path');

  var client = {
    path: 'client',
    templates: path.join('client', 'templates'),
    app: path.join('client', 'app'),
    files: []
  };

  var lib = {
    path: 'lib',
    files: []
  };

  var server = {
    path: 'server',
    files: []
  };

  client.files.push(path.join(client.templates, 'removeitem.html'));
  client.files.push(path.join(client.templates, 'removeitem.es6.js'));
  client.files.push(path.join(client.templates, 'clearcart.html'));
  client.files.push(path.join(client.templates, 'clearcart.es6.js'));
  client.files.push(path.join(client.app, 'app.js'));
  lib.files.push(path.join(lib.path, 'app.js'));

  api.addFiles(client.files, 'client');
  api.addFiles(lib.files, ['client', 'server']);
  api.addFiles(server.files, 'server');
});