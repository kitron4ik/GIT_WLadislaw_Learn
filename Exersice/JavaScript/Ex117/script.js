let x = 15;
if(x >=10 && x <= 99) {
    y = x.toString();
    let s = Number(y[0]) + Number(y[1])
    console.log(s);
}
else if (x <= 9) console.log("сумма цифр однозначна");
else  console.log("сумма цифр двузначна");

