/* */
console.time("for");

for (let i = 0, iteration = arr.length; i < iteration; i++) {
  process(arr[i]);
}

console.timeEnd("for");
/*  */
