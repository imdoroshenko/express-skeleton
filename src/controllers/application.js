'use strict';
var config = require('config')
  , objectPool = require('object-pool')
  , NotFound = require('exceptions').NotFound
  ;

/**
 * Return information about current state of API
 *
 * @module Controller
 * @main Controller
 * @class ApplicationCtrl
 * @constructor
 */

class ApplicationCtrl {
  constructor () {
    this.response = objectPool.get(config.http.responseService);
    this.app = objectPool.get(config.application.globalName);
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  versionAction  (req, res) {
    this.response.use(res).success(this.app.version);
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  upTimeAction (req, res) {
    this.response.use(res).success(this.app.upTime);
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  nameAction (req, res) {
    this.response.use(res).success(this.app.name);
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  indexAction (req, res) {
    this.response.use(res).success({
      name: this.app.name
      , version: this.app.version
      , uptime: this.app.upTime
    });
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  notFoundAction (req, res, next) {
    this.response.use(res)
      .error(new NotFound('Route not found'));
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  errorAction (err, req, res, next) {
    this.response.use(res).error(err);
  }
}

module.exports = ApplicationCtrl;
