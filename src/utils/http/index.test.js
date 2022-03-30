jest.mock('node-fetch-cache');
const fetchMock = require('node-fetch-cache');
const { fetchJSON } = require('./index.js');

const mockJSON = '[{ "date": "2016-01-05" }]';

describe('fetchJSON', () => {
  it('should return mockJSON', async () => {
    fetchMock.default.mockImplementation(() => ({
      json: () => mockJSON,
    }));
    const returnedJSON = await fetchJSON('https://website.com');
    expect(returnedJSON).toBe(mockJSON);
  });
});
