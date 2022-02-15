const warmup = require('./warmup/warmup.js');

console.log('****SOCK MERCHANT****');
console.log('TEST 1');
warmup.sockMerchant(100,[10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log('TEST 2');
warmup.sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]);

console.log('****REPEATED STRING****');