const express = require('express');
const VideoService = require('../services/videos.js');
//const { videosMock } = require('../utils/mocks/videos');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

const videosApi = (app) => {
  const router = express.Router();
  const videoService = new VideoService();
  app.use('/api/videos', router);

  router.get('/', async function (req, res, next) {
    //obtengo videos segun las tag que serán enviadas en la url
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
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
  router.get(
    '/:videoId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
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
    }
  );
  router.post('/', validationHandler(createMovieSchema), async function (
    req,
    res,
    next
  ) {
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
  router.put(
    '/:videoId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function (req, res, next) {
      const { body: video } = req;
      const { videoId } = req.params;
      try {
        const updateVideoId = await videoService.updateVideo({
          videoId,
          video,
        });
        res.status(200).json({
          data: updateVideoId,
          message: 'Video updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );
  router.delete(
    '/:videoId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
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
    }
  );
};
module.exports = {
  videosApi,
};
