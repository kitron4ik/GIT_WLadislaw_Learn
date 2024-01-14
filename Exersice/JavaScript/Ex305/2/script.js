let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - 1;
let secondsLeft = Math.floor((endOfDay - now) / 1000);
console.log(secondsLeft);

