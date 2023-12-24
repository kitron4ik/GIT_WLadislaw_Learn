let num = 17; 
let isPrime = true; 

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${num} - простое число`);
} else {
  console.log(`${num} - не простое число`);
}