function largestOfFour(arr) {
let i=0;
let arr1=[]
let len=arr.length
for (i;i<len;i++){
    var max=arr[i][0]
    for (let j=0;j<arr[i].length;j++){
    if (arr[i][j]>max){
        max=arr[i][j]
    }
}arr1.push(max)
}
return arr1;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);