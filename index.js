const express = require('express');
const app = express();
const { config } = require('./config/index');
const { videosApi } = require('./routes/videos.js');

//add error middleware
const { logErrors, errorHandler } = require('./utils/middleware/errorHandler');
//body parser middleware
app.use(express.json());
videosApi(app);
//los middlewares de errores siempre deben ir al final de las rutas
app.use(logErrors);
app.use(errorHandler);
app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
