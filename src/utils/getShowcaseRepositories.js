import repositoryData from '../../data/repositories.json';
import isValidRepositoryUrl from './isValidRepositoryUrl.js';
import parseRepositoryUrl from './parseRepositoryUrl.js';
import { REPOSITORY_LIMIT } from '../config';

const repositories = repositoryData
  .slice(-REPOSITORY_LIMIT)
  .reverse()
  .map(({ url }) => url)
  .filter(isValidRepositoryUrl)
  .map(parseRepositoryUrl);

const getShowcaseRepositories = () => {
  return repositories;
};

export default getShowcaseRepositories;
