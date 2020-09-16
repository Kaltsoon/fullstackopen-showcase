import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

export const REPOSITORY_LIMIT = 2;

export const {
  PORT,
  GITHUB_API_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  REPOSITORY_DATA_URL,
} = process.env;
