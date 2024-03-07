function findPrimeInFibonacci(n) {
  if (typeof n !== "number" || n < 0) {
    return "Pozitif tam sayı giriniz";
  }
  if (n === 0) {
    return 0;
  }
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  let primeNumbers = fibonacci.filter((number) => isPrime(number));
  return primeNumbers;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(findPrimeInFibonacci(0)); // 0
console.log(findPrimeInFibonacci(1)); // []
console.log(findPrimeInFibonacci(3)); // [2]
console.log(findPrimeInFibonacci(5)); // [2, 3]
console.log(findPrimeInFibonacci(10)); // [2, 3, 5, 13]
console.log(findPrimeInFibonacci(-6)); // Pozitif tam sayı giriniz
console.log(findPrimeInFibonacci("abc")); // Pozitif tam sayı giriniz
