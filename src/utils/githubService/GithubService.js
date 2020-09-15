import pMap from 'p-map';

class GithubService {
  constructor({ httpClient, cache }) {
    this.httpClient = httpClient;
    this.cache = cache;
  }
  
  async getWithCache(cacheKey, fn) {
    const cachedPromise = this.cache.get(cacheKey);

    if (cachedPromise) {
      return cachedPromise;
    }

    const promise = fn();

    this.cache.set(cacheKey, promise);

    try {
      const result = await promise;

      return result;
    } catch (e) {
      this.cache.del(cacheKey);

      throw e;
    }
  }

  async getRepositories(repositories) {
    const data = await pMap(repositories, ({ username, repository }) => {
      return this.getRepository(username, repository)
        .catch(() => undefined);
    }, { concurrency: 10, stopOnError: false });

    return data.filter(Boolean);
  }
  
  async getRepository(username, repository) {
    const cacheKey = `repository.${username}.${repository}`;

    const { data } = await this.getWithCache(cacheKey, () => {
      return this.httpClient.get(`/repos/${username}/${repository}`);
    });

    return data;
  }
}

export default GithubService;