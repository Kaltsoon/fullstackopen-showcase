const parseRepositoryUrl = (url) => {
  const pathname = new URL(url).pathname;
  const [, username, repository] = pathname.split('/');

  return {
    username,
    repository,
  };
};

export default parseRepositoryUrl;
