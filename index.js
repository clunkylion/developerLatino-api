const express = require('express');
const app = express();
const { config } = require('./config/index');
const { videosApi } = require('./routes/videos.js');

videosApi(app);
app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
