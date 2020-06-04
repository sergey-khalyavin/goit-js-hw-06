'use strict';

import users from './users.js';
const getUserNames = users => {
  const names = users.map(user => user.name);
  return names;
};

console.log(getUserNames(users));
