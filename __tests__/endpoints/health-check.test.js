const supertest = require('supertest');

const app = require('../../src/app');

test('GET /health test', () => {
    supertest(app)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        expect(res.body.message).toBe('app is healthy');
      });
})