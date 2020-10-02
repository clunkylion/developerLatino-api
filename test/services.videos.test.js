const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { videosMock } = require('../utils/mocks/videos');

describe('services - videos', () => {
  const videoService = require('../services/videos', {
    '../lib/mongo.js': MongoLibMock,
  });
  const videoService = new videoService();
  describe('when getVideos method is called', async () => {
    it('should call the getall MongoLib', async () => {
      await videoService.getVIdeos({});
      assert.strictEqual(getAllStub.called, true);
    });
  });
});
