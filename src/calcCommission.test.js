import { calcCommission } from './calcCommission.js';

const fetchMock = require('node-fetch-cache');

jest.mock('node-fetch-cache');

describe('calcCommission', () => {
  const mockConfig = {
    percents: 0.03,
    max: {
      amount: 5,
      currency: 'EUR',
    },
    min: {
      amount: 5,
      currency: 'EUR',
    },
    week_limit: {
      amount: 1000,
      currency: 'EUR',
    },
  };

  fetchMock.default.mockImplementation(() => ({
    json: () => mockConfig,
  }));
  const logSpy = jest.spyOn(console, 'log');

  it('should called console.log 9 times', async () => {
    await calcCommission();
    expect(logSpy).toHaveBeenCalledTimes(9);
  });

  it('should be called with an order of 0.06, 5.00, 8.70, 0.30, 0.03, 0.03, 5.00, 0.00, 0.00', async () => {
    expect(logSpy).toHaveBeenNthCalledWith(1, '0.06');
    expect(logSpy).toHaveBeenNthCalledWith(2, '5.00');
    expect(logSpy).toHaveBeenNthCalledWith(3, '8.70');
    expect(logSpy).toHaveBeenNthCalledWith(4, '0.30');
    expect(logSpy).toHaveBeenNthCalledWith(5, '0.03');
    expect(logSpy).toHaveBeenNthCalledWith(6, '0.03');
    expect(logSpy).toHaveBeenNthCalledWith(7, '5.00');
    expect(logSpy).toHaveBeenNthCalledWith(8, '0.00');
    expect(logSpy).toHaveBeenNthCalledWith(9, '0.00');
  });

  it('should last called is 0.00', async () => {
    expect(logSpy).toHaveBeenLastCalledWith('0.00');
  });
});
