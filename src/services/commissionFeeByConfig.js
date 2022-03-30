import { getCommission, getRoundedAmount } from '../utils/math/index.js';
import { CURRENCIES_SUPPORTED } from '../constants/types.js';
import { UNSUPPORTED_CURRENCY_ERROR } from '../constants/errors.js';

export const getCommissionFeeByConfig = (operation, config) => {
  const { amount, currency } = operation;
  if (!CURRENCIES_SUPPORTED.includes(currency)) {
    return UNSUPPORTED_CURRENCY_ERROR;
  }

  const commissionFee = getCommission(amount, config.percents);
  return getRoundedAmount(commissionFee);
};
