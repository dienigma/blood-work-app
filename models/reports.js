const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    title:String,
    conent:String,
    patientName:String
})

const Report = mongoose.model('Report',reportSchema)

module.exports = Report