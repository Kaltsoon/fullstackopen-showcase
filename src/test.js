import repositoryData from '../data/repositories.json';

import isValidRepositoryUrl from './utils/isValidRepositoryUrl';

for (let repository of repositoryData) {
  if (!isValidRepositoryUrl(repository.url)) {
    throw new Error(`${repository.url} is not a valid GitHub repository url`);
  }
}