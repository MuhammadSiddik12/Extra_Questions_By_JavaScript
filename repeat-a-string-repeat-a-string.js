function repeatStringNumTimes(str, num) {
    let result=''
    while (num>0){
        result+=str
        num--
    }
    return result
}
console.log(repeatStringNumTimes("abc", 3));