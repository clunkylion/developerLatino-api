const express = require('express');
const VideoService = require('../services/videos.js');
//const { videosMock } = require('../utils/mocks/videos');

const videosApi = (app) => {
  const router = express.Router();
  const videoService = new VideoService();
  app.use('/api/videos', router);
  router.get('/', async function (req, res, next) {
    //obtengo videos segun las tag que serán enviadas en la url
    const { tags } = req.query;

    try {
      const videos = await videoService.getVideos({ tags });
      res.status(200).json({
        data: videos,
        message: 'Videos listed',
      });
    } catch (error) {
      next(error);
    }
  });
  router.get('/:videoId', async function (req, res, next) {
    const { videoId } = req.params;
    try {
      const videos = await videoService.getVideo({ videoId });
      res.status(200).json({
        data: videos,
        message: 'Videos reatrived',
      });
    } catch (error) {
      next(error);
    }
  });
  router.post('/', async function (req, res, next) {
    const { body: video } = req;
    try {
      const createVideoId = await videoService.createVideo({ video });
      res.status(201).json({
        data: createVideoId,
        message: 'Video Create',
      });
    } catch (error) {
      next(error);
    }
  });
  router.put('/:videoId', async function (req, res, next) {
    const { body: video } = req;
    const { videoId } = req.params;
    try {
      const updateVideoId = await videoService.updateVideo({ videoId, video });
      res.status(200).json({
        data: updateVideoId,
        message: 'Video updated',
      });
    } catch (error) {
      next(error);
    }
  });
  router.delete('/:videoId', async function (req, res, next) {
    const { videoId } = req.params;
    try {
      const deleteVideoId = await videoService.deleteVideo({ videoId });
      res.status(200).json({
        data: deleteVideoId,
        message: 'Video deleted',
      });
    } catch (error) {
      next(error);
    }
  });
};
module.exports = {
  videosApi,
};
