const joi = require('@hapi/joi');
const { videoIdSchema } = require('./videos');
const { userIdSchema } = require('./users');
const userVideoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserVideoSchema = {
  userId: userIdSchema,
  videoId: videoIdSchema,
};
module.exports = {
  userVideoIdSchema,
  createUserVideoSchema,
};
