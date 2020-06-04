'use strict';

import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.reduce((name, user) => {
    if (user.friends.includes(friendName)) {
      name.push(user.name);
    }
    return name;
  }, []);
  return usersWithFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
