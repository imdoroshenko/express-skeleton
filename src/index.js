"use strict";
var Application = require('./application')
  , config = require('config')
  , routesBootstrap = require('./bootstrap/routes')
  , appBootstrap = require('./bootstrap/application')
  ;

module.exports = new Application(config, [appBootstrap, routesBootstrap]);
