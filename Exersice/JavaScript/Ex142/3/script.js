let a = [1,2,4,5,6,7,3,9,0,1,5,7]
for (let i = 0; i <= a.length; i++) {
	if(a[i] == 3) {
		console.log(i+1)
		break;
	}
}