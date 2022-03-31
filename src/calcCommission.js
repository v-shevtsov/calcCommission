import { parseJsonFileFromParam } from './utils/files/index.js';
import { TRANSACTION_TYPES } from './constants/types.js';
import { cashInTransaction } from './services/cashIn/cashIn.js';
import { cashOutTransaction } from './services/cashOut/cashOut.js';
import { getConfigs } from './api/configs/index.js';
import { UNKNOWN_TRANSACTION } from './constants/errors.js';

export async function calcCommission() {
  const {
    cashInConfig,
    cashOutJuridicalConfig,
    cashOutNaturalConfig,
  } = await getConfigs();

  const transactionsStore = new Map();

  const transactionsList = parseJsonFileFromParam();
  transactionsList.forEach((transaction) => {
    if (transaction.type === TRANSACTION_TYPES.cash_in) {
      const commissionFee = cashInTransaction(transaction, cashInConfig);
      console.log(commissionFee);
      return;
    }

    if (transaction.type === TRANSACTION_TYPES.cash_out) {
      const transactions = { transaction, transactionsMap: transactionsStore };
      const configs = {
        juridicalConfig: cashOutJuridicalConfig,
        naturalConfig: cashOutNaturalConfig,
      };
      const commissionFee = cashOutTransaction(transactions, configs);
      console.log(commissionFee);
      return;
    }

    console.log(UNKNOWN_TRANSACTION);
  });
}
