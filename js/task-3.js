'use strict';

import users from './users.js';

const getUsersWithGender = (users, gender) => {
  const usersGender = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return usersGender;
};

console.log(getUsersWithGender(users, 'male'));
