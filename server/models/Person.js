const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  location: String,
  status: String,
  id: mongoose.Schema.ObjectId,
  skills: Array,
  history: [{}],
})

module.exports = mongoose.model('Person', personSchema)
