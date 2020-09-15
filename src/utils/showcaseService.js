import axios from 'axios';
import LRU from 'lru-cache';

import callFunctionWithCache from './callFunctionWithCache';
import { REPOSITORY_LIMIT, REPOSITORY_DATA_URL } from '../config';
import isValidRepositoryUrl from './isValidRepositoryUrl';
import parseRepositoryUrl from './parseRepositoryUrl';

const normalizeRepositories = (repositories) => {
  return repositories
    .slice(-REPOSITORY_LIMIT)
    .reverse()
    .map(({ url }) => url)
    .filter(isValidRepositoryUrl)
    .map(parseRepositoryUrl);
};

class ShowcaseService {
  constructor({ cache, httpClient, dataUrl }) {
    this.cache = cache;
    this.httpClient = httpClient;
    this.dataUrl = dataUrl;
  }

  callWithCache(cacheKey, fn) {
    return callFunctionWithCache(this.cache, cacheKey, fn);
  }

  async getRepositories() {
    const { data } = await this.callWithCache('repositories', () =>
      this.httpClient.get(this.dataUrl),
    );

    return normalizeRepositories(data);
  }
}

const CACHE_MAX_AGE = 1000 * 60 * 5;

export default new ShowcaseService({
  httpClient: axios.create(),
  cache: new LRU({ max: 10, maxAge: CACHE_MAX_AGE }),
  dataUrl: REPOSITORY_DATA_URL,
});
