// 1. find smallest number of an array
let smallNum = [23, 56, 78, 45, 12, 98, 67]
let min = Math.min(...smallNum);
// console.log(min);

// 2. find smallest number of three using a function
function smallestNum(num1, num2, num3) {
     if (num1 < num2 && num1 < num3) {
          return num1;
     }
     else if (num2 < num1 && num2 < num3) {
          return num2;
     }
     else {
          return num3;
     }
}
const small = smallestNum(34, 67, 108);
// console.log('Smallest number is:', small);

// 3. find the avg of an array
// let marks = [24, 78, 60, 45, 70];
function findAvg(marks) {
     let sum = 0;
     for (let i = 0; i < marks.length; i++) {
          const element = marks[i];
          sum = sum + element;
          // return sum;
     }
     return sum / marks.length;
}
let numAvg = findAvg([34, 76, 98]);
// console.log(numAvg);

// 4. find the area of a rectangle
// let area = 0;
function findArea(height, width) {
     area = height * width
     return area;
}
let newArea = findArea(10, 20);
// console.log('Area of this place is :', area);

// 5. find second largest number of an array

// first attempt
const array = [23, 13, 98, 56, 43, 56, 45, 45, 8, 98, 98, 98];
console.log(array);
array.sort((a, b) => b - a);
console.log(array);
let res = array[0]
for( i=0; i<=array.length; i++) {
     if(res != array[i]){
          res= array[i];
          break;
     }
}
console.log('Second largest number is', res)