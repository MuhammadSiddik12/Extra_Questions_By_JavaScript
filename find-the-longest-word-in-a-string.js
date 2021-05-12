function findLongestWordLength(str) {
    let str2=str.split(' ')
    let long=0
    for (let i=0;i<str2.length;i++){
        if ((str2[i].length) > long){
            long=str2[i].length
        }
    }
    return long;
  }
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
