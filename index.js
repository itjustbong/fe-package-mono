const dayjs = require('dayjs');
const a = require('a');

console.log(`Today's date: ${dayjs().format()}`);
console.log(`From package a: ${a.getMessage()}`);
