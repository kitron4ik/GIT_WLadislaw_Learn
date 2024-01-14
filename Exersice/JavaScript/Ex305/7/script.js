let isLeapCurrentYear = (now.getFullYear() % 4 === 0 && now.getFullYear() % 100 !== 0) || (now.getFullYear() % 400 === 0);
console.log(isLeapCurrentYear);

