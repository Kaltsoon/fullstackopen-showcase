import fs from 'fs';
import path from 'path';

import repositories from '../data/repositories';
import { REPOSITORY_LIMIT } from './config';

const DATA_PATH = path.join(__dirname, '..', 'data', 'repositories.json');

if (repositories.length > REPOSITORY_LIMIT) {
  const compressed = repositories.slice(-REPOSITORY_LIMIT);

  fs.writeFileSync(DATA_PATH, JSON.stringify(compressed, null, 2));
}
