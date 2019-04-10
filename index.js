const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))

const userRouter = require('./routes/user')
app.use('/users',userRouter)
app.listen(3000,()=> console.log(`Server Running`))