let friday13Count = 0;
for (let month = 0; month <= 11; month++) {
    let date = new Date(now.getFullYear(), month, 13);
    if (date.getDay() === 5) {
        friday13Count++;
    }
}
console.log(friday13Count);

