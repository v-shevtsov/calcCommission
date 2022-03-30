import { cashOutJuridical, cashOutNatural, cashOutTransaction } from './cashOut.js';

const transactionsMapMock = new Map();

const mockTransactionGeneral = {
  operation: { amount: 300.00, currency: 'EUR' },
};

const mockTransactionMin = {
  operation: { amount: 10.00, currency: 'EUR' },
};

const mockTransactionsCashOutZero = {
  transactionsMap: transactionsMapMock,
  transaction: {
    date: '2016-02-15',
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: { amount: 1000.00, currency: 'EUR' },
  },
};

const mockTransactionsCashOutLimit = {
  transactionsMap: transactionsMapMock,
  transaction: {
    date: '2016-02-15',
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: { amount: 10000.00, currency: 'EUR' },
  },
};

const mockTransactionsCashOutLimitJuridical = {
  transactionsMap: transactionsMapMock,
  transaction: {
    date: '2016-02-15',
    user_id: 1,
    user_type: 'juridical',
    type: 'cash_out',
    operation: { amount: 10000.00, currency: 'EUR' },
  },
};

const configJuridical = { percents: 0.3, min: { amount: 0.5, currency: 'EUR' } };

const configNatural = { percents: 0.3, week_limit: { amount: 1000, currency: 'EUR' } };

const configsNatural = {
  naturalConfig: configNatural,
};

const configsJuridical = {
  juridicalConfig: configJuridical,
};

describe('cashOutJuridical', () => {
  it('should return 0.90 if amount 200', () => {
    expect(cashOutJuridical(mockTransactionGeneral, configJuridical)).toBe('0.90');
  });

  it('should return 0.90 if amount 200', () => {
    expect(cashOutJuridical(mockTransactionMin, configJuridical)).toBe('0.50');
  });
});

describe('cashOutNatural', () => {
  afterEach(() => {
    transactionsMapMock.clear();
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
  afterEach(() => {
    transactionsMapMock.clear();
  });

  it('should return 27.00 and call CashOutNatural', () => {
    expect(cashOutTransaction(mockTransactionsCashOutLimit, configsNatural)).toBe('27.00');
  });

  it('should return 30.00 and call cashOutJuridical', () => {
    expect(cashOutTransaction(mockTransactionsCashOutLimitJuridical, configsJuridical)).toBe('30.00');
  });
});
