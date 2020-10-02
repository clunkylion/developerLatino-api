const assert = require('assert');
const proxyquire = require('proxyquire');
const { videosMock, VideoServiceMock } = require('../utils/mocks/videos');
const testServer = require('../utils/testServer');

describe('routes - videos', () => {
  const route = proxyquire('../routes/videos', {
    '../services/videos.js': VideoServiceMock,
  });
  const request = testServer(route);
  describe('GET /videos', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/videos').expect(200, done);
    });
    it('should respond with the list of videos', (done) => {
      request.get('api/videos').end((err, res) => {
        assert.deepEqual(res.body, {
          data: videosMock,
          message: 'Videos Listed',
        });
        done();
      });
    });
  });
});
