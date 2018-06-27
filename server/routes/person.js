const express = require('express')
const router = express.Router()
var Person = require('../models/Person')
const path = require('path')
const fs = require('fs')
const uid = require('uid')

router.get('/', function(req, res) {
  Person.find({}).exec((err, data) => res.send(data))
})

router.get('/person', (req, res) =>
  Person.find({}).exec((err, data) => res.send(data)),
)

router.get('/person/:id', (req, res) => {
  console.log(req.params.id)
  return Person.findOne({ _id: req.params.id }).exec((err, data) =>
    res.send(data),
  )
})

// router.post('/', (req, res) => {
//   const person = req.body
//   new Person(person).save()
//   res.send('person added')
// })

router.post('/', (req, res) => {
  const file = req.files && req.files.file
  const person = req.body

  if (file) {
    const originalName = file.name
    const fileName = `${uid(7)}.${originalName.split('.')[1]}`
    const targetPath = path.resolve(__dirname, '../assets/uploads', fileName)
    fs.writeFile(targetPath, file.data, err => {
      if (err) {
        res.end(err.message)
      } else {
        savePerson(res, person, fileName)
      }
    })
  } else {
    savePerson(res, person)
  }
})

function savePerson(res, person, fileName) {
  const skills = person.skills.split(',')
  const photo = fileName ? { photo: `/uploads/${fileName}` } : {}
  new Person({ ...person, skills, ...photo }).save(err => {
    if (err) {
      res.end(err.message)
    }
    res.json({ message: 'ok' })
  })
}

router.put('/person', (req, res) =>
  Person.findOneAndUpdate({ _id: req.body._id }, req.body).exec((err, data) =>
    res.send(`${req.body.name} updated`),
  ),
)

module.exports = router
