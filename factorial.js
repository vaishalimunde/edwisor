/*
Complete the function below to find the factorial of a number 
If you don’t know what a factorial is, please follow this link - https://en.wikipedia.org/wiki/Factorial
sample input : findFactorial(4)
output - 24
*/

function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}

function run(number) {
    alert(fact(parseInt(number, 10)));
}