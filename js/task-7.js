'use strict';

import users from './users.js';

const calculateTotalBalance = users => {
  const totalBalance = users.reduce(
    (balance, users) => balance + users.balance,
    0,
  );
  return totalBalance;
};

console.log(calculateTotalBalance(users));
