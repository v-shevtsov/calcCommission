export const getRoundedAmount = (amount) => (Math.ceil(amount * 100) / 100).toFixed(2);

export const getCommission = (amount, percent) => (amount * percent) / 100;
