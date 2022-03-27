import fetch from 'node-fetch';
import { CONFIGS_URL } from '../../constants/index.js';

export const fetchJSON = async (url, options = {}) => {
  const response = await fetch(url, options);
  return response.json();
};

export const getConfigs = async () => {
  const configs = {};
  const configKeys = Object.keys(CONFIGS_URL);
  await Promise.all(configKeys.map(async (key) => {
    configs[key] = await fetchJSON(CONFIGS_URL[key]);
  }));
  return configs;
};
