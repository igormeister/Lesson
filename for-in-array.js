'use strict';

const array = [5, 6, 4, 3, 2, 1];
array.field = 'hello';
array[-10]='hello1';
array[1]=666;
var i=0;
for (const key in array){
  console.log(key, array[key]);
}
for (const value of array){
  i++;
  if(i === 2){
    continue;
  }
  if(i === 5){
    break;
  }
  console.log(value);
}