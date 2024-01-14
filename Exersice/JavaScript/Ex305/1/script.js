let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let secondsPassed = Math.floor((now - startOfDay) / 1000);
console.log(secondsPassed);

