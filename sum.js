// const numbers = [33, 56, 87, 12, 45, 32, 09, 90, 76];
// let sum = 0;
// for( let i =0; i <numbers.length; i++){
//      const element = numbers[i];
//      sum = sum+ element;
// }
// console.log(sum);

function arrayTotal (numbers){
     let sum = 0;
     for( let i =0; i <numbers.length; i++){
     const element = numbers[i];
     sum = sum+ element;
     }
     return sum;
}
const total = arrayTotal([32, 45, 62]);
console.log('array total', total);