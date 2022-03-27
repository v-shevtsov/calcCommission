import { COMMISSION_TYPE, UNKNOWN_OPERATION_TYPE, USER_TYPES } from './constants/index.js';
import { getCommissionFeeByConfig } from './CommissionFeeByConfig.js';
import { isTheSameWeek } from './utils/index.js';

const transactionMap = new Map();

const cashOutJuridical = ({ operation }, config) => {
  const commissionFee = getCommissionFeeByConfig(
    operation,
    config,
  );

  return commissionFee < config[COMMISSION_TYPE.min].amount
    ? config[COMMISSION_TYPE.min].amount.toFixed(2)
    : commissionFee;
};

const cashOutNatural = (transaction, config) => {
  const userTransactions = transactionMap.get(transaction.user_id) ?? [];
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

  transactionMap.set(transaction.user_id, [...userTransactions, transaction]);
  return commissionFee;
};

export const cashOutTransaction = (
  transaction,
  cashOutJuridicalConfig,
  cashOutNaturalConfig,
) => {
  switch (transaction.user_type) {
    case USER_TYPES.juridical:
      return cashOutJuridical(transaction, cashOutJuridicalConfig);
    case USER_TYPES.natural:
      return cashOutNatural(transaction, cashOutNaturalConfig);
    default:
      return UNKNOWN_OPERATION_TYPE;
  }
};
