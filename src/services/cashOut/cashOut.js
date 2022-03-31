import { getCommissionFeeByConfig } from '../commissionFeeByConfig/commissionFeeByConfig.js';
import { isTheSameWeek } from '../../utils/date/index.js';
import { COMMISSION_TYPE, USER_TYPES } from '../../constants/types.js';
import { UNKNOWN_OPERATION_TYPE } from '../../constants/errors.js';
import { NUMBERS_AFTER_POINT } from '../../constants/constants.js';

export const cashOutJuridical = ({ operation }, config) => {
  const commissionFee = getCommissionFeeByConfig(
    operation,
    config,
  );

  return commissionFee < config[COMMISSION_TYPE.min].amount
    ? config[COMMISSION_TYPE.min].amount.toFixed(NUMBERS_AFTER_POINT)
    : commissionFee;
};

export const cashOutNatural = (transactions, config) => {
  const { transaction, transactionsMap } = transactions;
  const userTransactions = transactionsMap.get(transaction.user_id) ?? [];
  let commissionFee;

  if (transaction.operation.amount > config.week_limit.amount) {
    const amountTaxable = transaction.operation.amount - config.week_limit.amount;
    const operationTaxable = { ...transaction.operation, amount: amountTaxable };
    commissionFee = getCommissionFeeByConfig(operationTaxable, config);
  } else {
    commissionFee = '0.00';
  }

  if (userTransactions.length) {
    const transactionsOnThisWeek = userTransactions.filter(
      (item) => isTheSameWeek(item.date, transaction.date),
    );
    const totalAmount = transactionsOnThisWeek.reduce(
      (acc, currentTransaction) => acc + currentTransaction.operation.amount,
      0,
    );
    const isLimitExceeded = totalAmount > config.week_limit.amount;

    if (isLimitExceeded) {
      commissionFee = getCommissionFeeByConfig(transaction.operation, config);
    }
  }

  transactionsMap.set(transaction.user_id, [...userTransactions, transaction]);
  return commissionFee;
};

export const cashOutTransaction = (
  transactions,
  configs,
) => {
  switch (transactions.transaction.user_type) {
    case USER_TYPES.juridical:
      return cashOutJuridical(transactions.transaction, configs.juridicalConfig);
    case USER_TYPES.natural:
      return cashOutNatural(transactions, configs.naturalConfig);
    default:
      return UNKNOWN_OPERATION_TYPE;
  }
};
