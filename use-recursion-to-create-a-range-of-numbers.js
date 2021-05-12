function rangeOfNumbers(startNum, endNum) {
  if (startNum - endNum === 0){
    return [startNum]
  }else{
      var array = rangeOfNumbers(startNum , endNum -1)
      array.push(endNum)
      return array
  }

  ;
};