import { CURRENCIES_SUPPORTED, UNSUPPORTED_CURRENCY_ERROR } from './constants/index.js';
import { getCommission, getRoundedAmount } from './utils/index.js';

export const getCommissionFeeByConfig = (operation, config) => {
  const { amount, currency } = operation;
  if (!CURRENCIES_SUPPORTED.includes(currency)) {
    return UNSUPPORTED_CURRENCY_ERROR;
  }

  const commissionFee = getCommission(amount, config.percents);
  return getRoundedAmount(commissionFee);
};
