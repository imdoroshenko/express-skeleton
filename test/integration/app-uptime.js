var expect = require('chai').expect
  , objectPool = require('object-pool')
  ;

describe('GET:/app/uptime', function () {
  "use strict";
  var agent;

  before(function () {
    agent = objectPool.get('TEST_AGENT');
  });

  it('should return status 200', function (done) {
    agent
      .get('/app/uptime')
      .expect(200)
      .end(function(err){
        done(err);
      });
  });
  it('should return content type /application\/json/', function (done) {
    agent
      .get('/app/uptime')
      .expect('Content-Type', /application\/json/)
      .end(function(err){
        done(err);
      });
  });
  it('should return number as uptime', function (done) {
    agent
      .get('/app/uptime')
      .expect(function (response) {
        expect(response.body).to.be.an('number');
      })
      .end(function(err){
        done(err);
      });
  });
});

