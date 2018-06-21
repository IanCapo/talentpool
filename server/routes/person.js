const express = require('express')
const router = express.Router()
var Person = require('../models/Person')

router.get('/', function(req, res) {
  Person.find({}).exec((err, data) => res.send(data))
})

router.post('/', (req, res) => {
  const person = req.body
  new Person(person).save()
  res.send('person added')
})

module.exports = router
