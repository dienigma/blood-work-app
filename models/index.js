const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ths19',{useNewUrlParser: true})

module.exports.User = require('./users')
module.exports.Report = require('./reports')