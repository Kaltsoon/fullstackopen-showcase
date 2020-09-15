import express from 'express';

import 'express-async-errors';

import morgan from 'morgan';

import { PORT } from './config';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import notFoundHandler from './middlewares/notFoundHandler';
import logger from './utils/logger';

const app = express();

app.use(morgan('tiny'))
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server listening to port ${PORT}`);
});

