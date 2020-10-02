const joi = require('@hapi/joi');
const videoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const videoTitleSchema = joi.string().max(80);
const videoYearSchema = joi.number().min(1888).max(2077);
const videorCoverSchema = joi.string().uri();
const videoDescriptionSchema = joi.string().max(300);
const videoDurationSchema = joi.number().min(1).max(300);
const videoContentRatingSchema = joi.string().max(5);
const videoSourceSchema = joi.string().uri();
const videoTaskSchema = joi.array().items(joi.string().max(50));

const createVideoSchema = {
  title: videoTitleSchema.required(),
  year: videoYearSchema.required(),
  cover: videorCoverSchema.required(),
  description: videoDescriptionSchema.required(),
  duration: videoDurationSchema.required(),
  contentRating: videoContentRatingSchema.required(),
  source: videoSourceSchema.required(),
  tags: videoTaskSchema,
};
const updateVideoSchema = {
  title: videoTitleSchema,
  year: videoYearSchema,
  cover: videorCoverSchema,
  description: videoDescriptionSchema,
  duration: videoDurationSchema,
  contentRating: videoContentRatingSchema,
  source: videoSourceSchema,
  tags: videoTaskSchema,
};
module.exports = {
  videoIdSchema,
  createVideoSchema,
  updateVideoSchema,
};
