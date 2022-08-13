'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
// this will pick the appropriate MONGO_HOST value if being run on command then it would be 127.0.0.1
// if being run as dockerized version then it will pick mongo as the db host name
const mongoHost = process.env.MONGO_HOST || '127.0.0.1';
config.mongo.uri = `mongodb://${mongoHost}:27017`;
config.plugin.allowServerExecution = true;

// Add/overwrite any additional settings here
// config.server.port = 8080;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';
config.requirejsPaths['jointjs'] = './node_modules/jointjs/dist/joint.min';
config.requirejsPaths['lodash'] = './node_modules/lodash/lodash.min';

config.authentication.enable = false;

validateConfig(config);
module.exports = config;
