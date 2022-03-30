import { getCommissionFeeByConfig } from './commissionFeeByConfig.js';
import { COMMISSION_TYPE } from '../constants/types.js';
import { NUMBERS_AFTER_POINT } from '../constants/constants.js';

export const cashInTransaction = ({ operation }, config) => {
  const commissionFee = getCommissionFeeByConfig(
    operation,
    config,
  );

  return commissionFee > config[COMMISSION_TYPE.max].amount
    ? config[COMMISSION_TYPE.max].amount.toFixed(NUMBERS_AFTER_POINT)
    : commissionFee;
};
