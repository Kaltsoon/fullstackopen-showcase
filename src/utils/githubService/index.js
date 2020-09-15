import axios from 'axios';
import LRU from 'lru-cache';

import {
  GITHUB_API_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  REPOSITORY_LIMIT,
} from '../../config';

import GithubHttpClient from './GithubHttpClient';
import GithubService from './GithubService';

const githubHttpClient = new GithubHttpClient({
  clientId: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  httpClient: axios.create({
    baseURL: GITHUB_API_URL,
  }),
});

const CACHE_MAX_AGE = 1000 * 60 * 60 * 6;

export default new GithubService({
  httpClient: githubHttpClient,
  cache: new LRU({
    max: REPOSITORY_LIMIT,
    maxAge: CACHE_MAX_AGE,
  }),
});
