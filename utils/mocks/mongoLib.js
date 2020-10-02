const sinon = require('sinon');

const { videosMock, filteredVideoMock } = require('./videos');

const getAllStub = sinon.stub();
getAllStub.withArgs('videos').resolves(videosMock);
const taqQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('videos', taqQuery).resolves(filteredVideoMock('Drama'));
const createStub = sinon.stub.resolves(videosMock[0].id);
class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }
  create(collection, data) {
    return createStub(collection, data);
  }
}
module.exports = {
  getAllStub,
  createStub,
  MongoLibMock,
};
