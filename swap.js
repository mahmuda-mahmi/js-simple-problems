var first = 5 ;
var second = 7;
console.log(first, second);
//first approach
// var tempt = first;
// first = second ;
// second = tempt;
// console.log(first, second);

// destructuring
[first, second] = [ second, first];
console.log(first, second); // destruction method is, they swap the values using array. they swap values between themselves.