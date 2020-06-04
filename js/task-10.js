'use strict';

import users from './users.js';

const getSortedUniqueSkills = users => {
  const sortedBySkills = users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);

      return allSkills;
    }, [])

    .filter((skill, index, skills) => {
      return index === skills.indexOf(skill);
    })

    .sort();
  return sortedBySkills;
};

console.log(getSortedUniqueSkills(users));
