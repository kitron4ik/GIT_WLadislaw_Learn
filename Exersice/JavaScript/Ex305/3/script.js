let newYear = new Date(now.getFullYear() + 1, 0, 1);
let daysLeftToNewYear = Math.floor((newYear - now) / (1000 * 60 * 60 * 24));
console.log(daysLeftToNewYear);

