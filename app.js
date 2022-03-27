import { getConfigs, parseJsonFileFromParam } from './src/utils/index.js';
import { TRANSACTION_TYPES } from './src/constants/index.js';
import { cashInTransaction } from './src/CashIn.js';
import { cashOutTransaction } from './src/CashOut.js';

async function calcCommission() {
  const {
    cashInConfig,
    cashOutJuridicalConfig,
    cashOutNaturalConfig,
  } = await getConfigs();
  const transactions = parseJsonFileFromParam();
  transactions.forEach((transaction) => {
    if (transaction.type === TRANSACTION_TYPES.cash_in) {
      const commissionFee = cashInTransaction(transaction, cashInConfig);
      console.log(commissionFee);
      return;
    }

    if (transaction.type === TRANSACTION_TYPES.cash_out) {
      const commissionFee = cashOutTransaction(
        transaction,
        cashOutJuridicalConfig,
        cashOutNaturalConfig,
      );
      console.log(commissionFee);
      return;
    }

    console.log('Unknown transaction');
  });
}

calcCommission();
