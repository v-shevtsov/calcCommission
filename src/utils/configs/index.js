import { CONFIGS_URL } from '../../constants/configs.js';
import { fetchJSON } from '../http/index.js';

const getConfig = async (configKey) => fetchJSON(CONFIGS_URL[configKey]);

export const getConfigs = async () => {
  const configs = {};
  const configKeys = Object.keys(CONFIGS_URL);
  await Promise.all(configKeys.map(async (key) => {
    configs[key] = await getConfig(key);
  }));
  return configs;
};
