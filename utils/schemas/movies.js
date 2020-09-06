const joi = require('@hapi/joi');
const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077);
const movierCoverSchema = joi.string().uri();
const movieDescriptionSchema = joi.string().max(300);
const movieDurationSchema = joi.number().min(1).max(300);
const movieContentRatingSchema = joi.string().max(5);
const movieSourceSchema = joi.string().uri();
const movieTaskSchema = joi.array().items(joi.string().max(50));

const createMovieSchema = {
  title: movieTitleSchema.required(),
  year: movieYearSchema.required(),
  cover: movierCoverSchema.required(),
  description: movieDescriptionSchema.required(),
  duration: movieDurationSchema.required(),
  contentRating: movieContentRatingSchema.required(),
  source: movieSourceSchema.required(),
  tags: movieTaskSchema,
};
const updateMovieSchema = {
  title: movieTitleSchema,
  year: movieYearSchema,
  cover: movierCoverSchema,
  description: movieDescriptionSchema,
  duration: movieDurationSchema,
  contentRating: movieContentRatingSchema,
  source: movieSourceSchema,
  tags: movieTaskSchema,
};
module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
};
