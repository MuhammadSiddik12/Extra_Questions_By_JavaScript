function findElement(arr, func) {
  let num = 0;
  let i=0;
  let len= arr.length;
  for (i;i<len;i++){
    num = arr[i]
    if (func(num)){
      return num
    }
  }
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);