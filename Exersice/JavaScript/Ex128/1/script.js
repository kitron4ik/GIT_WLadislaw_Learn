let x = 15;
let y = 2;
let rest = x % y;

if (rest === 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком ' + rest);
}