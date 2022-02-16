const warmup = require('./warmup/warmup.js');

console.log('****SOCK MERCHANT****');
console.log('TEST 1');
warmup.sockMerchant(100,[10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log('TEST 2');
warmup.sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]);

console.log('****JUMPING ON THE CLOUDS****');
console.log('TEST 1');
warmup.jumpingOnClouds([0,0,1,0,0,1,0]);
console.log('TEST 2');
warmup.jumpingOnClouds([0,0,0,0,1,0]);

console.log('****REPEATED STRING****');
console.log('TEST 1');
warmup.repeatedString('aba',10);
console.log('TEST 2');
warmup.repeatedString('aba',16);
console.log('TEST 3');
warmup.repeatedString('aababa',3);
console.log('TEST 4')
warmup.repeatedString('d',590826798023);

console.log('****COUNTING VALLEYS****');
console.log('TEST 1');
warmup.countingValleys(8,'UDDDUDUU');
console.log('TEST 2');
warmup.countingValleys(100,'UDUDDUUUDUDUDUUDUUDDDDDUDUDDDDUUDDUDDUUUUDUUDUDDDDUDUDUUUDDDUUUDUDDUUDDDUUDDUDDDUDUUDUUDUUDUDDDUUUUU');
console.log('TEST 3');
warmup.countingValleys(100,'DDUDUDDUDDUDDUUUUDUDDDUUDDUUDDDUUDDUUUUUUDUDDDDUDDUUDUUDUDUUUDUUUUUDDUDDDDUDDUDDDDUUUUDUUDUUDUUDUDDD');
console.log('TEST 4');
warmup.countingValleys(100,'DDUUDDDUDUUDUDDDUUDDUDDDUDDDUDUUDDUUDDDUDDDUDDDUUUDUDDDUDUDUDUUDDUDUDUDUDUUUUDDUDDUUDUUDUUDUUUUUUUUU');
console.log('TEST 5');
warmup.countingValleys(10,'DUDDDUUDUU');

