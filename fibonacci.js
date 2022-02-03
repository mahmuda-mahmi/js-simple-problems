/* 1, 2, 3, 4, 5 , 6 , 7 , 8
1, 3, 5, 7, 9, 11
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
 */
/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
nth = (n-a)th + (n-2)th
i th = (i-1)th + (i-2)th
*/
/* const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
     fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

/* function fibonacciSeries(num) {
     const fibo = [0, 1];
     for (let i = 2; i <= num; i++) {
          fibo[i] = fibo[i - 1] + fibo[i - 2];
     }
     return fibo;
}
const fiboSeries = fibonacciSeries(34);
console.log(fiboSeries); */

function fibonacciSeries(num) {
     console.log(typeof num);
     if (typeof num != 'number') {
          return 'Please give a number';
     }
     if(num < 2){
          return 'Please give a number greater than 1';
     }
     const fibo = [0, 1];
     for (let i = 2; i <= num; i++) {
          fibo[i] = fibo[i - 1] + fibo[i - 2];
     }
     return fibo;
}
const fiboSeries = fibonacciSeries('13');
console.log(fiboSeries);