'use strict';

let var1;
let var2;

var1 = 3;
var2 = var1;
var1--;
var2++;
console.log(var1, var2);
const object1 = {
  count: 5,
};
const object2 = object1;
object1.count = 6;
console.log(object1.count, object2.count);
