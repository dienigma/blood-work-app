const express = require('express')
const router = express.Router()

const credentials = {
    email: "chinmay@email.com",
    password: 123
}

var data = {
    name: "Mr. Chinmay Joshi",
    title: "Diabetes Report",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum integer. Et malesuada fames ac turpis egestas integer eget. Nunc mi ipsum faucibus vitae aliquet nec. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et tortor consequat id porta nibh venenatis."

}

router.get('/login',(req,res) => {
    res.render('login', {credentials: credentials})
})

router.post('/login',(req, res)=>{
    req.params.email === credentials.email && req.params.password === credentials.password ? res.redirect('/reports') : res.send("Login Failed")
})
router.get("/reports",(req,res) => {
    res.render('reports', {data: data})
})
module.exports = router