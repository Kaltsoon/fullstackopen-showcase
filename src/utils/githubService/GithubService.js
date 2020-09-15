import pMap from 'p-map';

import callFunctionWithCache from '../callFunctionWithCache';

class GithubService {
  constructor({ httpClient, cache }) {
    this.httpClient = httpClient;
    this.cache = cache;
  }

  callWithCache(cacheKey, fn) {
    return callFunctionWithCache(this.cache, cacheKey, fn);
  }

  async getRepositories(repositories) {
    const data = await pMap(
      repositories,
      ({ owner, repository }) => {
        return this.getRepository(owner, repository).catch(() => undefined);
      },
      { concurrency: 10, stopOnError: false },
    );

    return data.filter(Boolean);
  }

  async getRepository(owner, repository) {
    const cacheKey = `repository.${owner}.${repository}`;

    const { data } = await this.callWithCache(cacheKey, () => {
      return this.httpClient.get(`/repos/${owner}/${repository}`);
    });

    return data;
  }
}

export default GithubService;
