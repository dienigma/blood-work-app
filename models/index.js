const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dienigma:Cmj2018!@testclusterone-umiol.mongodb.net/test?retryWrites=true')

module.exports.User = require('./users')
module.exports.Report = require('./reports')