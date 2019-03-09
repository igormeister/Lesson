'use strict';

let emptyScalar;
console.log('empty scalar ' + typeof emptyScalar);
const emptyObject = null;
console.log('empty object ' + typeof emptyObject);
let count = NaN;
console.log('count ' + typeof NaN);
count = undefined + 1;
console.log(count);
console.log(Infinity, -Infinity, typeof Infinity);
const s = emptyObject === null ? 'empty null' : 'empty not null';
console.log(s);
