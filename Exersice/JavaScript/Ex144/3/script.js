let arr = [1,2,-5,3,-4,5,6,7,8,9,-1,-2,-3,-4];

let posArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    posArr.push(arr[i]);
  }
}

console.log(posArr); 