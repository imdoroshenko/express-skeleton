var expect = require('chai').expect
  , objectPool = require('object-pool')
  ;

describe('GET:/app/version', function () {
  "use strict";
  var agent;

  before(function () {
    agent = objectPool.get('TEST_AGENT');
  });

  it('should return status 200', function (done) {
    agent
      .get('/app/version')
      .expect(200)
      .end(function(err){
        done(err);
      });
  });
  it('should return content type /application\/json/', function (done) {
    agent
      .get('/app/version')
      .expect('Content-Type', /application\/json/)
      .end(function(err){
        done(err);
      });
  });
  it('should return version from package.json', function (done) {
    agent
      .get('/app/version')
      .expect(function (response) {
        expect(response.body).to.be.equal(require('../../package.json').version);
      })
      .end(function(err){
        done(err);
      });
  });
});

