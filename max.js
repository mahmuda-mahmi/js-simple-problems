// const business = 500 ;
// const minister = 250 ;
// const army = 400;
// if (business > minister) {
//      console.log('Business person er pola is bigger');
// }
// else {
//      console.log('minister er pola is bigger');
// }

//compare 3
/* 
if(business > minister && business > army){
     console.log('business is bigger');
}
else if(minister > business && minister > army){
     console.log('minister
      is bigger');
}
else {
     console.log('army is bigger');
}
 */
function findLargest(first, second){
     if(first > second){
          return first;
     }
     else{
          return second;
     }
}
// const largest = findLargest(121, 134);
// console.log('largest is ', largest);



//
// var max = Math.max(business, minister, army);
// console.log('largest is', max);

// task 1: create a function that takes three numbers as input parameter and returns you the largest number of the  three
const business = 500 ;
const minister = 250 ;
const army = 700;

function largestNumber(num1, num2, num3){
     if(num1 > num2 && num1 > num3){
          return business;
     }
     else if(num2>num1 && num2>num3){
          return minister;
     }
     else {
          return army;
     }
}
const largestNum = largestNumber(business, minister, army)
console.log('largest is', largestNum);

//find the smallest of three numbers
function smallestNumber(num1, num2, num3){
     if(num1 < num2 && num1 < num3){
          return business;
     }
     else if(num2 < num1 && num2 < num3){
          return minister;
     }
     else {
          return army;
     }
}
const smallestNum = smallestNumber(business, minister, army)
console.log('smallest number is', smallestNum);
