import express from 'express';

import getShowcaseRepositories from '../utils/getShowcaseRepositories';
import githubService from '../utils/githubService';

const router = express.Router();

router.get('/', async (req, res) => {
  const showcaseRepositories = getShowcaseRepositories();
  
  const repositories = await githubService.getRepositories(
    showcaseRepositories,
  );

  res.send(repositories);
});

export default router;
