const express = require('express')
const router = express.Router()
const db = require('../models')

// Show Route
router.get('/', (req,res) =>{
    db.Report.find()
    .then(data => res.render('reports'))
    .catch(err => res.send(err))
})

// create a Report
router.post('/',(req,res)=>{
    db.Report.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

// show one Report
router.get('/:id',(req,res)=>{
    db.Report.findById(req.params.id).exec()
    .then(data=> res.json(data))
    .catch(err => res.send(err))
})

// Update / Edit the Report.

router.put('/:id',(req,res)=>{
    db.Report.findByIdAndUpdate({"_id": req.params.id}, req.body).exec()
    .then(Report => res.json(Report))
    .catch(err => res.send(err))
})

// Delete the Report

router.delete('/:id', (req,res) => {
    db.Report.findByIdAndDelete({"_id":req.params.id},req.body).exec()
    .then(res.json({
        message: "Report deleted successfully"
    }))
    .catch(err => res.json(err))
})

module.exports = router