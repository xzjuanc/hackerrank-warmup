const warmup = require('./warmup/warmup.js'),
arrays = require('./arrays/arrays.js');



console.log('****SOCK MERCHANT****');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
warmup.sockMerchant(100,[10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log('TEST 2');
warmup.sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]);

console.log('****JUMPING ON THE CLOUDS****');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
warmup.jumpingOnClouds([0,0,1,0,0,1,0]);
console.log('TEST 2');
warmup.jumpingOnClouds([0,0,0,0,1,0]);

console.log('****REPEATED STRING****');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
warmup.repeatedString('aba',10);
console.log('TEST 2');
warmup.repeatedString('aba',16);
console.log('TEST 3');
warmup.repeatedString('aababa',3);
console.log('TEST 4')
warmup.repeatedString('d',590826798023);

console.log('****COUNTING VALLEYS****');
console.log('3 2 1 raaaaaaaaa');
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

console.log('****DISK SPACE ANALYSIS****');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
warmup.diskSpaceAnalysis(5,[8,2,4,6]);
console.log('TEST 2');
warmup.diskSpaceAnalysis(4,[8,2,4,6]);
console.log('TEST 3');
warmup.diskSpaceAnalysis(2,[8,2,4,6]);


console.log('****ARRAY LEFT ROTATION****');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.arrayLeftRotation('20 2','1 2 3 4 5');
console.log('TEST 2');
arrays.arrayLeftRotation('5 4','1 2 3 4 5');
console.log('TEST 3'),
arrays.arrayLeftRotation('20 10','41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51');
console.log('TEST 3'),
arrays.arrayLeftRotation('5 4','1 2 3 4 5');

console.log('****FIND DIGITS****');
console.log('3 2 1 raaaaaaaaa');
arrays.findDigits(12345);
arrays.findDigits(124);
arrays.findDigits(111);

console.log('****FIND DIGITS****');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.nimbleGame([0,2,3,0,6]);
console.log('TEST 2');
arrays.nimbleGame([0,0,0,0]);
console.log('TEST 3');
arrays.nimbleGame([1,1,2,2,2,4,4,4,4,4,4]);


console.log('Mini-Max SUM');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.miniMaxSum([1,2,3,4,5]);
console.log('TEST 2');
arrays.miniMaxSum([5,5,5,5,5]);

console.log('Birthday Cake Candles');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.birthdayCakeCandles([3,2,1,3]);

console.log('Grading Students');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.gradingStudents([4,73,67,38,33]);


console.log('Time Conversion');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.timeConversion("07:05:45PM");
arrays.timeConversion("12:40:22AM");
arrays.timeConversion("12:00:00AM");
arrays.timeConversion("12:45:54PM");

console.log('Divisible Sum Pairs');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.divisibleSumPairs(6,3,[1,3,2,6,1,2]);

console.log('Breaking Records');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.breakingRecords([10,5,20,20,4,5,2,25,1]);
arrays.breakingRecords([3,4,21,36,10,28,35,5,24,42]);
arrays.breakingRecords([17,45,41,60,17,41,76,43,51,40,89,92,34,6,64,7,37,81,32,50]);
arrays.breakingRecords([100,45,41,60,17,41,45,43,100,40,89,92,34,6,64,7,37,81,32,50]);

console.log('Migratory Birds');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.migratoryBirds([1,1,2,2,3]);

console.log('Picking Numbers');
console.log('3 2 1 raaaaaaaaa');
console.log('TEST 1');
arrays.pickingNumbers([1,1,2,2,4,4,5,5,5]);
console.log('TEST 2');
arrays.pickingNumbers([4,6,5,3,3,1]);

