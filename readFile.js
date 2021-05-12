let fs = require('fs')
fs.readFile('input.txt',function (err,data){
    if (err){
        console.log(err.message)
        return
    }console.log(data.toString());
})
console.log('Program Finished');