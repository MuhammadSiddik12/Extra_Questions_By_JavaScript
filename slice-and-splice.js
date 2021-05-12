function frankenSplice(arr1, arr2, n) {
    var arr3=[...arr2]
    let i=0;
    let len=arr1.length;
    for (i;i<len;i++){
        arr3.splice(n,0,arr1[i])
        n++
}
    return arr3;}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));