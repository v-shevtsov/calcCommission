import fs from 'fs';

export const readFromFile = (path, encoding = 'utf8') => fs.readFileSync(path, encoding);

export const parseJsonFileFromParam = (
  defaultParam = 2,
  defaultFileName = 'input.json',
) => {
  const nodePath = process.argv[defaultParam] ?? defaultFileName;
  const inputFileJSON = readFromFile(nodePath);
  return JSON.parse(inputFileJSON);
};
