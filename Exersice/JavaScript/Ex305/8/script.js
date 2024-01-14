let previousLeapYear = now.getFullYear();
while (!((previousLeapYear % 4 === 0 && previousLeapYear % 100 !== 0) || (previousLeapYear % 400 === 0))) {
    previousLeapYear--;
}
console.log(previousLeapYear);

