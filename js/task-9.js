'use strict';

import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  const namesSortedByFriends = [...users]
    .sort(function(prevUser, nextUser) {
      return prevUser.friends.length - nextUser.friends.length;
    })
    .map(user => user.name);
  return namesSortedByFriends;
};

console.log(getNamesSortedByFriendsCount(users));
