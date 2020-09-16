import { ApplicationError } from '../errors';
import logger from '../utils/logger';

const errorHandler = (err, _, res) => {
  logger.error(err);

  const normalizedError =
    err instanceof ApplicationError ? err : new ApplicationError();

  res.send(normalizedError);
};

export default errorHandler;
