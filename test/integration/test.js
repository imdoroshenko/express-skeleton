var objectPool = require('object-pool')
  , appService = require('../../src/index')
  , request = require('supertest')
  ;

before(function() {
  console.log('global setup');
  objectPool.register('TEST_AGENT', request(appService.app));
});

after(function(done) {
  console.log('global teardown');
  done();
});
