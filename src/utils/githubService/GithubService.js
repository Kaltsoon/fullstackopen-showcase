import pMap from 'p-map';

import callFunctionWithCache from '../callFunctionWithCache';

class GithubService {
  constructor({ httpClient, cache }) {
    this.httpClient = httpClient;
    this.cache = cache;
  }

  async callWithCache(cacheKey, fn) {
    return callFunctionWithCache(this.cache, cacheKey, fn);
  }

  async getRepositories(repositories) {
    const data = await pMap(
      repositories,
      ({ username, repository }) => {
        return this.getRepository(username, repository).catch(() => undefined);
      },
      { concurrency: 10, stopOnError: false },
    );

    return data.filter(Boolean);
  }

  async getRepository(username, repository) {
    const cacheKey = `repository.${username}.${repository}`;

    const { data } = await this.callWithCache(cacheKey, () => {
      return this.httpClient.get(`/repos/${username}/${repository}`);
    });

    return data;
  }
}

export default GithubService;
