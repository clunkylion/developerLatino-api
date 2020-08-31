//const { videosMock } = require('../utils/mocks/videos');
const MongoLib = require('../lib/mongo');
//const { query } = require('express');
class VideosService {
  constructor() {
    (this.collection = 'videos'), (this.mongoDB = new MongoLib());
  }
  async getVideos({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const videos = await this.mongoDB.getAll(this.collection, query);
    return videos || [];
  }
  async getVideo({ videoId }) {
    const videos = await this.mongoDB.get(this.collection, videoId);
    return videos || {};
  }
  async createVideo({ video }) {
    const createVideoId = await this.mongoDB.create(this.collection, video);
    return createVideoId;
  }
  async updateVideo({ videoId, video } = {}) {
    const updateVideoId = await this.mongoDB.update(
      this.collection,
      videoId,
      video
    );
    return updateVideoId;
  }
  async deleteVideo({ videoId }) {
    const deleteVideoId = await this.mongoDB.delete(this.collection, videoId);
    return deleteVideoId;
  }
}
module.exports = VideosService;
