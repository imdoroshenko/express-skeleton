//controllers
var AppCtrl = require('../controllers/application');

/**
 * Configuration function for express routes
 */
module.exports = function (app, config) {
  app.get('/', function (req, res) {
    res.redirect('/app');
  });
  // api state
  var appCtrl = new AppCtrl();
  app.get('/app', appCtrl.indexAction.bind(appCtrl));
  app.get('/app/version', appCtrl.versionAction.bind(appCtrl));
  app.get('/app/uptime', appCtrl.upTimeAction.bind(appCtrl));
  app.get('/app/name', appCtrl.nameAction.bind(appCtrl));


  // Put your routes after this line


  // 404
  app.use(appCtrl.notFoundAction.bind(appCtrl));
  // errors
  app.use(appCtrl.errorAction.bind(appCtrl));
};
