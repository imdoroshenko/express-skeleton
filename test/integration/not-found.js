var objectPool = require('object-pool');

describe('POST:/app', function () {
  "use strict";
  var agent;

  before(function () {
    agent = objectPool.get('TEST_AGENT');
  });

  it('should return status 404', function (done) {
    agent
      .post('/app')
      .expect(404)
      .end(function(err){
        done(err);
      });
  });
  it('should return content type /application\/json/', function (done) {
    agent
      .post('/app')
      .expect('Content-Type', /application\/json/)
      .end(function(err){
        done(err);
      });
  });
});

