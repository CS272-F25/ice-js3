/* find the:
   - maximum value
   - minimum value
   - average (arithmetic mean)
   
   - median
   - number of unique values
   - number of occurrences of EACH unique value
*/

const data = [
  97, 43, 17, 72, 20, 31, 9, 66, 6, 30, 2, 71, 56, 74, 41, 20, 23, 7, 23, 5, 48,
  94, 24, 81, 1, 33, 9, 51, 98, 50, 71, 1, 5, 83, 10, 2, 3, 26, 67, 14, 17, 38,
  66, 38, 62, 42, 37, 53, 34, 61, 4, 63, 93, 66, 97, 82, 18, 3, 96, 83, 20, 79,
  7, 93, 90, 29, 18, 53, 48, 61, 50, 10, 92, 87, 54, 39, 66, 91, 49, 46, 36, 6,
  12, 97, 74, 93, 57, 12, 52, 58, 25, 78, 98, 26, 69, 100, 81, 3, 76, 67,
];

let max = 0;
let min = Infinity;
let sum = 0;

for (const num of data) {
  if (num < min) {
    min = num;
  }
  if (num > max) {
    max = num;
  }
  sum = sum + num;
}

console.log(`max is ${max}`);
console.log(`min is ${min}`);
console.log(`average is ${(sum / data.length).toFixed(2)}`);

/* for median: we did not talk about sorting! There are built-in sort
   capabilities in JS; you don't need to implement quicksort or something.
*/

const sortedData = data.toSorted();

const medianIndexLow = Math.floor(data.length / 2);
const medianIndexHigh = Math.ceil(data.length / 2);
const median = (sortedData[medianIndexLow] + sortedData[medianIndexHigh]) / 2;

console.log(`median is ${median}`);

// you could also now find the min and max easily - first and last elements!

const countByValue = {};

for (const num of data) {
  if (countByValue[num] === undefined) {
    countByValue[num] = 1;
  } else {
    countByValue[num] = countByValue[num] + 1;
  }
}

// number of unique values
// we haven't talked about this in class yet, but there are functions that
// allow you to convert objects into arrays:

const numUniqueValues = Object.keys(countByValue).length;

// number of occurrences of each unique value:
// option 1:
for (const key of Object.keys(countByValue)) {
  console.log(`${key}: ${countByValue[key]} time(s)`);
}

// ADVANCED options (we haven't covered in class!)
// option 2:
// for (const [key, value] of Object.entries(countByValue)) {
//   console.log(`${key}: ${value} time(s)`);
// }

// option 3:
// for (const key in countByValue) {
//   console.log(`${key}: ${countByValue[key]} time(s)`);
// }

// option 4:
// console.log("Counts by value:");
// console.log(JSON.stringify(countByValue, null, 2));
