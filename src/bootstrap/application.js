var JSONResponseDriver = require('express-response').driver.response.json
  , ExpressDownloadDriver = require('express-response').driver.download.express
  , Response = require('express-response').Response
  , objectPool = require('object-pool')
  , responseTime = require('response-time')
  , bodyParser = require('body-parser')
  , morgan = require('morgan')
  , onFinished = require('on-finished')
  ;

/**
 * Configuration function for express app
 *
 * @method express
 * @for Config
 * @param app {express} instance of express
 * @param config {Object} application config
 * @return {undefined}
 */
module.exports = function (app, config) {
  //Set response format to JSON
  objectPool.register(
    config.http.responseService
    , new Response()
      .setLogLevel(Response.LOG_ERROR)
      .setConfig(config)
      .setResponseDriver(JSONResponseDriver)
      .setDownloadDriver(ExpressDownloadDriver)
  );

  objectPool.register(
    config.application.globalName
    , this
  );

  // add "X-Response-Time" header with response time
  app.use(responseTime());
  // parse JSON when "content-type: application/json" and valid body
  app.use(bodyParser.json());
  // CORS
  app.use((req, res, next) => {
    res.header(config.http.CORSHeaders);
    next();
  });
  // log req/res details
  app.use(morgan(config.log.httpFormat));
};
