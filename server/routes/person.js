const express = require('express')
const router = express.Router()
var Person = require('../models/Person')
const path = require('path')
const fs = require('fs')

router.get('/', function(req, res) {
  Person.find({}).exec((err, data) => res.send(data))
})

// router.post('/', (req, res) => {
//   const person = req.body
//   new Person(person).save()
//   res.send('person added')
// })

// router.post('/person', (req, res) => {
//   console.log(req)
//   const file = req.files.file
//   const originalName = file.name
//   const fileName = `${uid(7)}.${originalName.split('.')[1]}`
//   const targetPath = path.resolve(__dirname, '../uploads', fileName)
//   fs.writeFile(targetPath, file.data, err => {
//     const person = req.body
//     if (err) {
//       res.end(err.message)
//     } else {
//       new Person({ ...person, photo: targetPath }).save(err => {
//         if (err) {
//           res.end(err.message)
//         }
//         res.json({ message: 'ok' })
//       })
//     }
//   })
// })

module.exports = router
