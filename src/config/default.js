'use strict';
/**
 * @property credentials
 * @for Config
 * @type {Object}
 */
module.exports = {
  http: {
    defaultExceptionStatus: 500
    , responseService: 'defaultResponseService'
    , DAODriver: 'baseHttpDAODriver'
    , CORSHeaders: {
      'Access-Control-Allow-Origin': '*'
      , 'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    },
    method: {
      post: 'POST'
    }
  },
  dir: {
    project: './'
    , tmp: 'tmp/'
  },
  log: {
    httpFormat: ':date[iso] :method :url :status :response-time ms --- :user-agent :remote-addr'
  },
  application: {
    globalName: 'application'
    , port: 3000
    , stopTimeout: 3000
  }
};
