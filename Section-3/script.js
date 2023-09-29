const number = 30;
let primeArray = [];
function isPrime(number){
   for(let i = 2 ; i <30 ;i++){
    if(number % i == 0 && number !== i){
      return false
    }
   }
   return true
}
const prime = (number) => {
for(let i = 1; i <30 ;i++){
   let primeNumber = isPrime(i)
   if(primeNumber == true){
    primeArray.push(i)
   }
}
  return primeArray
};
console.log(prime())