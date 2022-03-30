import { getCommissionFeeByConfig } from './commissionFeeByConfig.js';

const config = {
  percents: 0.03,
  max: {
    amount: 5,
    currency: 'EUR',
  },
};

const mockTransactionUSD = { amount: 200.00, currency: 'USD' };

const mockTransactionGeneral = { amount: 200.00, currency: 'EUR' };

describe('getCommissionFeeByConfig', () => {
  it('should', () => {
    expect(getCommissionFeeByConfig(mockTransactionUSD, config)).toBe('Only supported currency: EUR.');
  });

  it('should', () => {
    expect(getCommissionFeeByConfig(mockTransactionGeneral, config)).toBe('0.06');
  });
});
