import { cashOutJuridical, cashOutNatural, cashOutTransaction } from './cashOut.js';
import {
  configJuridical, configNatural,
  mockTransactionsCashOutLimit, mockTransactionsCashOutLimitJuridical,
  mockTransactionsCashOutZero,
  transactionsStoreMock,
} from '../../__mocks__/cashOut.js';

describe('cashOutJuridical', () => {
  const mockTransactionGeneral = {
    operation: { amount: 300.00, currency: 'EUR' },
  };

  const mockTransactionMin = {
    operation: { amount: 10.00, currency: 'EUR' },
  };

  it('should return 0.90 if amount 300.00', () => {
    expect(cashOutJuridical(mockTransactionGeneral, configJuridical)).toBe('0.90');
  });

  it('should return 0.50 if amount 10.00', () => {
    expect(cashOutJuridical(mockTransactionMin, configJuridical)).toBe('0.50');
  });
});

describe('cashOutNatural', () => {
  afterEach(() => {
    transactionsStoreMock.clear();
  });

  it('should return 0.00 if amount 1000.00', () => {
    expect(cashOutNatural(mockTransactionsCashOutZero, configNatural)).toBe('0.00');
  });

  it('should return 27.00 if amount 10000.00', () => {
    expect(cashOutNatural(mockTransactionsCashOutLimit, configNatural)).toBe('27.00');
  });

  it('should return 27.00 and 30.00', () => {
    expect(cashOutNatural(mockTransactionsCashOutLimit, configNatural)).toBe('27.00');
    expect(cashOutNatural(mockTransactionsCashOutLimit, configNatural)).toBe('30.00');
  });
});

describe('cashOutTransaction', () => {
  const configsNatural = {
    naturalConfig: configNatural,
  };

  const configsJuridical = {
    juridicalConfig: configJuridical,
  };

  afterEach(() => {
    transactionsStoreMock.clear();
  });

  it('should return 27.00 if user_type "natural" and amount 10 000', () => {
    expect(cashOutTransaction(mockTransactionsCashOutLimit, configsNatural)).toBe('27.00');
  });

  it('should return 30.00 if user_type "juridical" and amount 10 000', () => {
    expect(cashOutTransaction(mockTransactionsCashOutLimitJuridical, configsJuridical)).toBe('30.00');
  });
});
