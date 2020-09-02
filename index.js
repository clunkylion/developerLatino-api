const express = require('express');
const app = express();
const { config } = require('./config/index');
const { videosApi } = require('./routes/videos.js');

//add error middleware
const {
  logErrors,
  errorHandler,
  wrapErrror,
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
//body parser middleware
app.use(express.json());
//routes
videosApi(app);
//catch 404 error
app.use(notFoundHandler);
//los middlewares de errores siempre deben ir al final de las rutas
app.use(logErrors);
app.use(wrapErrror);
app.use(errorHandler);
app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
