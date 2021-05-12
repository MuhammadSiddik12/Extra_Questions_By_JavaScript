// const express = require('express')
// const app = express()
// const users=[
//     {name:'siddik',age:19},
//     {name:'subha',age:23}
// ]

// const post ={post:'this is a post'}
// app.get('/',(req,res) => {
//     res.status(200).send({
//         name:'Muhammad Siddik',
//         age:19
//     })
// })
// app.get('/users',(req,res)=> {
//     res.status(200).send(users).send(post)

// })

// app.get('/users/:name',(req,res)=>{
//     const {name} = req.params;
//     const user = users.find((user)=> users.name === name)
//     if (user) res.status(200).send(users)
//     else res.status(404).send('not found')
// })
// app.get('/post',(req,res)=>{
//     res.status(200).send(post)
// })
// app.listen(3000,() => {
//     console.log('server is running om port 3000')
// })

// http://api.openweathermap.org/data/2.5/weather?q=Noida&appid=12163a331ab780b1f7af8a43b44d24c1