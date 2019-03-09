'use strict';

const person = {
  name: 'Igor',
  work: 'No-work',
  hight: '180',
  gender: 'Male',
};
person.age = 17;
for (const key in person) {
  console.log(key, person[key]);
}
