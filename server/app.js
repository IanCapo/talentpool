var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var personRouter = require('./routes/person')
const fs = require('fs')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const uid = require('uid')

var app = express()

const mongoose = require('mongoose')
var options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
}

var mongodbUri =
  'mongodb://neuefische:neuefische2018@ds261540.mlab.com:61540/talentpoolnf'
mongoose.connect(
  mongodbUri,
  options,
)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
  console.log('mongoose connected')
})

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'build')))
app.use(
  bodyParser({
    keepExtensions: true,
    uploadDir: __dirname + '/public/uploads',
  }),
)
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }),
)
app.post('/image', (req, res) => {
  Object.keys(req.files).forEach(name => {
    const id = uid()
    const image = req.files[name]
    const ext = image.name.split('.')[1]

    fs.writeFile(__dirname + '/public/' + id + '.' + ext, image.data, err => {
      err ? res.end('error') : res.end('done')
    })
    // new Person({ image: id + ext })
  })
})

app.use('/person', personRouter)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app
