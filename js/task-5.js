'use strict';

import users from './users.js';

const getUserWithEmail = (users, email) => {
  const usersWithEmail = users.find(user => user.email === email);
  return usersWithEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
