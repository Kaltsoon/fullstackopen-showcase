import { NotFoundError } from '../errors';

const notFoundHandler = (req, res) => {
  throw new NotFoundError(`The path ${req.path} is not found`);
};

export default notFoundHandler;
