'use strict';

import users from './users.js';

const getUsersWithAge = (users, min, max) => {
  const usersWithAge = users.filter(user => user.age > min && user.age < max);
  return usersWithAge;
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
