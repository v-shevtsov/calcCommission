import fs from 'fs';

export const readFromFile = (path, encoding = 'utf8') => fs.readFileSync(path, encoding);
