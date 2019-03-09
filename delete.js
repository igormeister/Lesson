'use strict';

const person = {
  name: 'Igor',
  work: 'No-work',
  hight: '180',
  gender: 'Male',
};
delete person.name;
console.log(person);
delete person.size;
console.log(person);

