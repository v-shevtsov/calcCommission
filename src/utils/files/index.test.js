import { parseJsonFileFromParam } from './index.js';

const mockInput = [
  {
    date: '2016-01-05', user_id: 1, user_type: 'natural', type: 'cash_in', operation: { amount: 200.00, currency: 'EUR' },
  },
  {
    date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
  },
  {
    date: '2016-01-06', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 30000, currency: 'EUR' },
  },
  {
    date: '2016-01-07', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 1000.00, currency: 'EUR' },
  },
  {
    date: '2016-01-07', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 100.00, currency: 'EUR' },
  },
  {
    date: '2016-01-10', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 100.00, currency: 'EUR' },
  },
  {
    date: '2016-01-10', user_id: 2, user_type: 'juridical', type: 'cash_in', operation: { amount: 1000000.00, currency: 'EUR' },
  },
  {
    date: '2016-01-10', user_id: 3, user_type: 'natural', type: 'cash_out', operation: { amount: 1000.00, currency: 'EUR' },
  },
  {
    date: '2016-02-15', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
  },
];

const mockInputTest = [
  {
    date: '2016-01-05', user_id: 1, user_type: 'natural', type: 'cash_in', operation: { amount: 200.00, currency: 'EUR' },
  },
  {
    date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
  },
];

describe('parseJsonFileFromParam', () => {
  afterEach(() => {
    process.argv = [];
  });

  it('should return inputTest.json value', () => {
    process.argv = ['node', 'app', './src/utils/files/inputTest.json'];
    expect(parseJsonFileFromParam()).toEqual(mockInputTest);
  });

  it('should return input.json value', () => {
    process.argv = ['node', 'app'];
    expect(parseJsonFileFromParam()).toEqual(mockInput);
  });
});
