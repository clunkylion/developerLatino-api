const express = require('express');
const UserVideoService = require('../services/userVideos');
const validationHandler = require('../utils/middleware/validationHandler');

const { videoIdSchema } = require('../utils/schemas/videos');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserVideoSchema } = require('../utils/schemas/UserVideos');
const { func } = require('@hapi/joi');

function userVideoApi(app) {
  const router = express.Router();
  app.user('/api/user-videos', router);
  const userVideosService = new UserVideoService();
  router.get('/', validationHandler({ userId: userIdSchema }), 'query'),
    async function (req, res, next) {
      const { userId } = req.query;
      try {
        const userVideos = await userVideosService.getUserVideo({ userId });
        res.status(200).json({
          data: userVideos,
          message: 'User Videos Listed',
        });
      } catch (error) {
        next(error);
      }
    };
}
