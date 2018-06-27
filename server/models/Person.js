const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  location: String,
  status: String,
  id: mongoose.Schema.ObjectId,
  skills: [],
  history: [{}],
  photo: String,
  file: String,
})

module.exports = mongoose.model('Person', personSchema)
