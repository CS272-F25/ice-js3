const grades = ["A", "A", "AB", "C", "B"];

/* WITHOUT EDITING THE ABOVE CODE,
   make the program print:
   AB
   ["A", "B", "C"]
*/

grades.pop(); // B
grades.pop(); // C
grades.pop(); // AB
grades.pop(); // A
grades.push("B");
grades.push("C");
grades.push("AB");

// Don't edit the below code
const last = grades.pop();
console.log(last); // should print AB
console.log(grades); // should print ["A", "B", "C"]
