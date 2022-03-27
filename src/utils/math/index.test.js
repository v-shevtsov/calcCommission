import { getCommission, getRoundedAmount } from './index.js';

describe('getRoundedAmount', () => {
  it('should return 0.03 if amount is 0.023', () => {
    expect(getRoundedAmount(0.023)).toBe('0.03');
  });

  it('should return 0.03 if amount is 0.021', () => {
    expect(getRoundedAmount(0.021)).toBe('0.03');
  });

  it('should return 0.03 if amount is 0.0200001', () => {
    expect(getRoundedAmount(0.0200001)).toBe('0.03');
  });

  it('should return 1.99 if amount is 1.99', () => {
    expect(getRoundedAmount(1.99)).toBe('1.99');
  });

  it('should return 0 if amount is 0', () => {
    expect(getRoundedAmount(0)).toBe('0.00');
  });
});

describe('getCommission', () => {
  it('should return 0.06 if amount 200, percent 0.03', () => {
    expect(getCommission(200, 0.03)).toBe(0.06);
  });

  it('should return 0.9 if amount 300, percent 0.3', () => {
    expect(getCommission(300, 0.1)).toBe(0.3);
  });

  it('should return 87 if amount 30000, percent 0.03', () => {
    expect(getCommission(5001, 0.5)).toBe(25.005);
  });
});
