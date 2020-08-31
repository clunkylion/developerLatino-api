const { videosMock } = require('../utils/mocks/videos');

class VideosService {
  async getVideos() {
    const videos = await Promise.resolve(videosMock);
    return videos || [];
  }
  async getVideo() {
    const videos = await Promise.resolve(videosMock[0]);
    return videos || {};
  }
  async createVideo() {
    const createVideoId = await Promise.resolve(videosMock[0].id);
    return createVideoId || {};
  }
  async updateVideo() {
    const updateVideoId = await Promise.resolve(videosMock[0].id);
    return updateVideoId;
  }
  async deleteVideo() {
    const deleteVideoId = await Promise.resolve(videosMock[0].id);
    return deleteVideoId;
  }
}
module.exports = VideosService;
