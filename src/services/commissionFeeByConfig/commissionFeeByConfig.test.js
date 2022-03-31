import { getCommissionFeeByConfig } from './commissionFeeByConfig.js';
import { configCashIn } from '../../__mocks__/cashIn.js';

const mockTransactionUSD = { amount: 200.00, currency: 'USD' };

const mockTransactionGeneral = { amount: 200.00, currency: 'EUR' };

describe('getCommissionFeeByConfig', () => {
  it('should return "Only supported currency: EUR." if currency USD', () => {
    expect(getCommissionFeeByConfig(mockTransactionUSD, configCashIn)).toBe('Only supported currency: EUR.');
  });

  it('should return 0.06 if amount 200.00', () => {
    expect(getCommissionFeeByConfig(mockTransactionGeneral, configCashIn)).toBe('0.06');
  });
});
