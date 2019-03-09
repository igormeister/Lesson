'use strict';

const num1 = 5;
const num2 = 10.5;
const num3 = 'hello';
const num4 = true;
const person = {
  name: 'Igor',
  work: 'No-work',
  hight: '180',
  gender: 'Male',
};
const cities = ['Kiev', 'Lviv', 'London', 'Kharkiv'];
cities.unshift('Odessa');
cities.push('Lugansk');
console.log(cities);
console.log('Shift ' + cities.shift());
console.log('Pop ' + cities.pop());

console.log('num1', typeof num1);
console.log('num2', typeof num2);
console.log('num3', typeof num3);
console.log('num4', typeof num4);
console.log('person', typeof person, Array.isArray(person));
console.log('cities', typeof cities, Array.isArray(cities));
