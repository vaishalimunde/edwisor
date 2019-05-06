/*
Complete the function below that takes one number as input checks if the number entered is prime number or not? 
It should return true or false. 

sample input - isPrime(3)
output - true

*/

let isPrime = function (num){
    if (num <= 1)
   return false;

   if (num <= 3)
   return true;

   if (num%2 === 0 || num%3 === 0)
   return false;

   for (var i=5; i*i<=num; i=i+6)
   {
      if (num%i === 0 || num%(i+2) === 0)
      return false;
   }
   return true;
};
module.exports = { isPrime: isPrime };