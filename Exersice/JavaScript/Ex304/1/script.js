for (let year = 2000; year <= new Date().getFullYear(); year++) {
    let date = new Date(year, 0, 1);

    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(year + '-01-01');
    }
}

