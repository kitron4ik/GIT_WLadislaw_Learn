let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for(let i of arr) {
	if(i % 2 == 0) {
		sum+=i;
	}
}
console.log(sum);
