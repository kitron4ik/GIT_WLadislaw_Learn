let str = '';
for (let i = 0; i < 5; i++) {
	str += '-';
}
console.log(str);

str = '';
for (let i = 1; i < 10; i++) {
	str += i;
}
console.log(str);

str = '';
for (let i = 9; i > 0; i--) {
	str += i;
}
console.log(str);

str = '';
for (let i = 1; i < 10; i++) {
	str += '-';
	str += i;
}
str += '-';
console.log(str);