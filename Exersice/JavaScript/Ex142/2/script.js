let a = [1,2,3,4,5,6,7,8,9,0,1,5,7]
for (let i = 0; i <= a.length; i++) {
	console.log(a[i])
	if(a[i] == 0) {
		break;
	}
}