import { getCommissionFeeByConfig } from './CommissionFeeByConfig.js';
import { COMMISSION_TYPE } from './constants/index.js';

export const cashInTransaction = ({ operation }, config) => {
  const commissionFee = getCommissionFeeByConfig(
    operation,
    config,
  );

  return commissionFee > config[COMMISSION_TYPE.max].amount
    ? config[COMMISSION_TYPE.max].amount.toFixed(2)
    : commissionFee;
};
