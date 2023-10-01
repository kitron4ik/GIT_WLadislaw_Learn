let age = 17;
let res;

if (age >= 18) {
	if (age <= 23) {
	res = 'от 18 до 23';
	} else {
	res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);