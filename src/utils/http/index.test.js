const fetchMock = require('node-fetch-cache');
const { fetchJSON } = require('./index.js');

jest.mock('node-fetch-cache');

const mockJSON = '{"percents":0.03,"max":{"amount":5,"currency":"EUR"}}';

describe('fetchJSON', () => {
  it('should return mockJSON', async () => {
    fetchMock.default.mockImplementation(() => ({
      json: () => mockJSON,
    }));
    const returnedJSON = await fetchJSON('https://website.com');
    expect(returnedJSON).toBe(mockJSON);
  });
});
