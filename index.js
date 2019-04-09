const express = require('express')
const app = express()
const path = require('path')




const userRouter = require('./routes/user')
app.use('/user',userRouter)
app.listen(3000,()=> console.log(`Server Running`))