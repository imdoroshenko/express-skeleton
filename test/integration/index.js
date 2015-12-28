var expect = require('chai').expect
  , objectPool = require('object-pool')
  ;

describe('GET:/', function () {
  "use strict";
  var agent;

  before(function () {
    agent = objectPool.get('TEST_AGENT');
  });

  it('should return status 302', function (done) {
    agent
      .get('/')
      .expect(302)
      .end(function(err){
        done(err);
      });
  });
  it('should be redirected to /app', function (done) {
    agent
      .get('/')
      .expect(function (response) {
        expect(response.header['location']).to.be.equal('/app');
      })
      .end(function(err){
        done(err);
      });
  });
});

