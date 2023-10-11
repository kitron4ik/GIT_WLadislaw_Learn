let chet = 0;
let NeChet = 0;
let num = 1;

for(i = 0; i<=100; i++) {
	if(i %2==0) {
		chet = chet + i;
	}
}

for(i = 0; i<=99; i++) {
	if(i %2 != 0) {
		NeChet = NeChet + i;
	}
}

for(i = 1; i<=20; i++) {
		num = num * i;
}

console.log("Сумма чётных чисел: ", chet);
console.log("Сумма не чётных чисел: ", NeChet);
console.log("Произведение чисел: ", num);
