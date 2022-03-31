import { cashInTransaction } from './cashIn.js';
import { configCashIn } from '../../__mocks__/cashIn.js';

describe('cashInTransaction', () => {
  const mockTransactionGeneral = {
    operation: { amount: 200.00, currency: 'EUR' },
  };

  const mockTransactionMax = {
    operation: { amount: 300000.00, currency: 'EUR' },
  };

  it('should return 0.06 if amount 200', () => {
    expect(cashInTransaction(mockTransactionGeneral, configCashIn)).toBe('0.06');
  });

  it('should return 5.00 if amount 300000', () => {
    expect(cashInTransaction(mockTransactionMax, configCashIn)).toBe('5.00');
  });
});
