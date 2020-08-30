require('dotenv').config();
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 4005,
};
module.exports = { config };
