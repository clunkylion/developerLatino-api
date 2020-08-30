const express = require('express');

const { videosMock } = require('../utils/mocks/videos');

const videosApi = (app) => {
  const router = express.Router();
  app.use('/api/videos', router);
  router.get('/', async function (req, res, next) {
    try {
      const videos = await Promise.resolve(videosMock);
      res.status(200).json({
        data: videos,
        message: 'Videos listed',
      });
    } catch (error) {
      next(error);
    }
  });
  router.get('/:videoId', async function (req, res, next) {
    try {
      const videos = await Promise.resolve(videosMock[0]);
      res.status(200).json({
        data: videos,
        message: 'Videos reatrived',
      });
    } catch (error) {
      next(error);
    }
  });
  router.post('/', async function (req, res, next) {
    try {
      const createVideoId = await Promise.resolve(videosMock[0].id);
      res.status(201).json({
        data: createVideoId,
        message: 'Video Create',
      });
    } catch (error) {
      next(error);
    }
  });
  router.put('/:videoId', async function (req, res, next) {
    try {
      const updateVideoId = await Promise.resolve(videosMock[0].id);
      res.status(200).json({
        data: updateVideoId,
        message: 'Video updated',
      });
    } catch (error) {
      next(error);
    }
  });
  router.delete('/:videoId', async function (req, res, next) {
    try {
      const deleteVideoId = await Promise.resolve(videosMock[0].id);
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
