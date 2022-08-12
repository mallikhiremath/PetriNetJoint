'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
//const mongoHost = process.env.MONGO_HOST || '127.0.0.1';
//config.server.port = +process.env.PORT || 8080;
//config.mongo.uri = `mongodb://mongo:27017`;
config.plugin.allowServerExecution = true;

// Add/overwrite any additional settings here
// config.server.port = 8080;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';
config.requirejsPaths['jointjs'] = './node_modules/jointjs/dist/joint.min';
config.requirejsPaths['lodash'] = './node_modules/lodash/lodash.min';
validateConfig(config);
module.exports = config;
