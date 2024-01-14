let nextLeapYear = now.getFullYear();
do {
    nextLeapYear++;
} while (!((nextLeapYear % 4 === 0 && nextLeapYear % 100 !== 0) || (nextLeapYear % 400 === 0)));
console.log(nextLeapYear);

