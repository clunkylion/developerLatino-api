const MongoLib = require('../lib/mongo');
class userVideoService {
  constructor() {
    (this.collection = 'user-videos'), (this.mongoDB = new MongoLib());
  }
  async getUserVideo({ userId }) {
    const query = userId && { userId };
    const userVideos = await this.mongoDB.getAll(this.collection, query);
    return userVideos || [];
  }
  async createUserVideo({ userVideo }) {
    const createUserVideo = await this.mongoDB.create(
      this.collection,
      userVideo
    );
    return createUserVideo;
  }
  async deleteUserVideo({ userVideoId }) {
    const deleteUserVideo = await this.mongoDB.delete(
      this.collection,
      userVideoId
    );
    return deleteUserVideo;
  }
}
module.exports = userVideoService;
