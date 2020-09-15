const callFunctionWithCache = async (cache, cacheKey, fn) => {
  const cachedPromise = cache.get(cacheKey);

  if (cachedPromise) {
    return cachedPromise;
  }

  const promise = fn();

  cache.set(cacheKey, promise);

  try {
    const result = await promise;

    return result;
  } catch (e) {
    cache.del(cacheKey);

    throw e;
  }
};

export default callFunctionWithCache;
