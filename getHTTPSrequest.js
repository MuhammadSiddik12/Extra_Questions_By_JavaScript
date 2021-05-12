// const axios= require("axios");
// const fs = require('fs');
// axios.get('https://merakilearn.org/api/courses')
// .then(response => {
//     let data=response.data
//     let full_info=[]
//     for (let x of data['availableCourses']){
//             let obj={}
//             for (let y of Object.keys(x)){
//                 obj[y]=x[y]  
//             }full_info.push(obj)
//     }fs.writeFile('saral.json',JSON.stringify(full_info),function(err){
//         if (err) throw err;
//         console.log('saved')
//     })})
// .catch(error => {
//     console.log('Error:',error)
// })