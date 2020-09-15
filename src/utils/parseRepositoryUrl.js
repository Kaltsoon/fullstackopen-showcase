const parseRepositoryUrl = (url) => {
  const pathname = new URL(url).pathname;
  const [, owner, repository] = pathname.split('/');

  return {
    owner,
    repository,
  };
};

export default parseRepositoryUrl;
