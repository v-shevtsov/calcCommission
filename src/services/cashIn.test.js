import { cashInTransaction } from './cashIn.js';

const mockTransactionGeneral = {
  operation: { amount: 200.00, currency: 'EUR' },
};

const mockTransactionMax = {
  operation: { amount: 300000.00, currency: 'EUR' },
};

const config = {
  percents: 0.03,
  max: {
    amount: 5,
    currency: 'EUR',
  },
};

describe('cashInTransaction', () => {
  it('should return 0.06 if amount 200', () => {
    expect(cashInTransaction(mockTransactionGeneral, config)).toBe('0.06');
  });

  it('should return 5.00 if amount 300000', () => {
    expect(cashInTransaction(mockTransactionMax, config)).toBe('5.00');
  });
});
