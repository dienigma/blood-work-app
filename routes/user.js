const express = require('express')
const router = express.Router()
const db = require('../models')


// Show Route
router.get('/', (req,res) =>{
    db.User.find().exec()
    .then(data => res.json(data))
    .catch(err => res.send(err))
    
})

// create a user
router.post('/',(req,res)=>{
    db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

// show one user
router.get('/:id',(req,res)=>{
    db.User.findById(req.params.id).exec()
    .then(user=> res.json(user))
    .catch(err => res.send(err))
})

// Update / Edit the user.

router.put('/:id',(req,res)=>{
    db.User.findByIdAndUpdate({"_id": req.params.id}, req.body).exec()
    .then(user => res.json(user))
    .catch(err => res.send(err))
})

// Delete the user

router.delete('/:id', (req,res) => {
    db.User.findByIdAndDelete({"_id":req.params.id},req.body).exec()
    .then(res.json({
        message: "User deleted successfully"
    }))
    .catch(err => res.json(err))
})

module.exports = router