export const transactionsStoreMock = new Map();

export const configJuridical = { percents: 0.3, min: { amount: 0.5, currency: 'EUR' } };

export const configNatural = { percents: 0.3, week_limit: { amount: 1000, currency: 'EUR' } };

export const mockTransactionsCashOutZero = {
  transactionsMap: transactionsStoreMock,
  transaction: {
    date: '2016-02-15',
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: { amount: 1000.00, currency: 'EUR' },
  },
};

export const mockTransactionsCashOutLimit = {
  transactionsMap: transactionsStoreMock,
  transaction: {
    date: '2016-02-15',
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: { amount: 10000.00, currency: 'EUR' },
  },
};

export const mockTransactionsCashOutLimitJuridical = {
  transactionsMap: transactionsStoreMock,
  transaction: {
    date: '2016-02-15',
    user_id: 1,
    user_type: 'juridical',
    type: 'cash_out',
    operation: { amount: 10000.00, currency: 'EUR' },
  },
};
