const fetchMock = require('node-fetch-cache');
const { getConfig, getConfigs } = require('./index.js');
const { CONFIGS_URL } = require('../constants/configs.js');

jest.mock('node-fetch-cache');

const mockConfig = {
  percents: 0.03,
  max: {
    amount: 5,
    currency: 'EUR',
  },
};

fetchMock.default.mockImplementation(() => ({
  json: () => mockConfig,
}));

describe('getConfig', () => {
  it('should return config', async () => {
    const config = await getConfig('cashInConfig');
    expect(config).toBe(mockConfig);
  });
});

describe('getConfigs', () => {
  it('should return configs array with the same length of CONFIGS_URL', async () => {
    const generalConfigKeys = Object.keys(CONFIGS_URL);
    const configs = await getConfigs();
    const returnedConfigsKeys = Object.keys(configs);
    expect(returnedConfigsKeys.length).toBe(generalConfigKeys.length);
  });
});
