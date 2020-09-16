import express from 'express';
import { get } from 'lodash';

import githubService from '../utils/githubService';
import showcaseService from '../utils/showcaseService';

const router = express.Router();

const normalizeRepositories = (repositories) => {
  return repositories.map(
    ({ id, name, full_name, description, html_url, owner }) => ({
      id,
      name,
      fullName: full_name,
      description,
      url: html_url,
      ownerName: get(owner, 'login'),
      ownerAvatarUrl: get(owner, 'avatar_url'),
    }),
  );
};

router.get('/', async (_, res) => {
  const showcaseRepositories = await showcaseService.getRepositories();

  const repositories = await githubService.getRepositories(
    showcaseRepositories,
  );

  res.send(normalizeRepositories(repositories));
});

export default router;
