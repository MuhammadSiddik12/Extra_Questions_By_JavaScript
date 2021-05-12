const a=[1,2,3]
function check(ele){
    if (ele instanceof Array){
        console.log('it is array')
    }else if (ele instanceof Object){
        console.log('it is object')
    }else{
        console.log('diffrent type')
    }
}
check(a)

// const a={}
// function check(ele){
//     if (Array.isArray(ele)){
//         console.log('it is array')
//     }else{
//         console.log('it is object')
//     }
// }
// check(a)