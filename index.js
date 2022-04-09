const Express=require('express')
const app=Express()

app.use('/',((req, res) => {
    res.send('<h1>Welcome</h1>')
}))

app.listen(3344,()=>{
    console.log('App Server Started on Port 3344')
})