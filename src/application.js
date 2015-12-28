"use strict";
var express = require('express');

class Application {
  constructor (config, bootstraps) {
    this._config = config;
    this._server = null;
    this._app = express();
    this._packageJSON = require('../package.json');
    bootstraps.forEach((bootstrap) => {
      bootstrap.call(this, this._app, this._config);
    });
  }
  start /* istanbul ignore next: will be covered with smoke tests */ () {
    return new Promise((resolve) => {
      if (!this._server) {
        this._server = this._app.listen(this._config.application.port, () => {
          var port = this._server.address().port;
          console.log('App listening at port %s', port);
          resolve(this);
        });
      } else {
        resolve(this);
      }
    });
  }
  stop /* istanbul ignore next: will be covered with smoke tests */ () {
    return new Promise((resolve, reject) => {
      if (this._server) {
        this._server.close (function (err) {
          if (err) {
            console.log('App already stopped');
            reject(this);
          } else {
            console.log('App stop listen');
            resolve(this);
          }
        });
        this._server = null;
      }
      setTimeout(() => {
        console.log('Stop timeout expired');
        reject(this);
      }, this._config.application.stopTimeout);
    });
  }
  get app () {
    return this._app;
  }
  get server () {
    return this._server;
  }
  get version  () {
    return this._packageJSON.version;
  }
  get upTime  () {
    return process.uptime() | 0;
  }
  get name  () {
    return this._packageJSON.name;
  }
}

module.exports = Application;
