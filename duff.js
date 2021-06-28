/* */
console.time("duff");

var iterations = Math.floor(arr2.length / 8);
var remainder = arr2.length % 8;
var i = 0;

if (remainder > 0) {
  do {
    testVal++;
  } while (--remainder); // remainder must be greater than 0 here
}
remainder = parseInt(iterations / 8, 10);
if (remainder > 0) {
  // if iterations < 8 an infinite loop, added for safety in second printing
  do {
    process(arr2[i++]);
    process(arr2[i++]);
    process(arr2[i++]);
    process(arr2[i++]);
    process(arr2[i++]);
    process(arr2[i++]);
    process(arr2[i++]);
    process(arr2[i++]);
  } while (--remainder); // remainder must be greater than 0 here also
}

console.timeEnd("duff");
/*  */
