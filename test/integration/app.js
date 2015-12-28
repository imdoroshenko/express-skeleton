var expect = require('chai').expect
  , objectPool = require('object-pool')
  , objectPool = require('object-pool')
  ;

describe('GET:/app', function () {
  "use strict";
  var agent;

  before(function () {
    agent = objectPool.get('TEST_AGENT');
  });

  it('should return status 200', function (done) {
    agent
      .get('/app')
      .expect(200)
      .end(function(err){
        done(err);
      });
  });
  it('should return content type /application\/json/', function (done) {
    agent
      .get('/app')
      .expect('Content-Type', /application\/json/)
      .end(function(err){
        done(err);
      });
  });
  it('should return name, version from package.json and number for uptime', function (done) {
    agent
      .get('/app')
      .expect(function (response) {
        var packageJSON = require('../../package.json');
        expect(response.body.name).to.be.equal(packageJSON.name);
        expect(response.body.version).to.be.equal(packageJSON.version);
        expect(response.body.uptime).to.be.an('number');
      })
      .end(function(err){
        done(err);
      });
  });
});

