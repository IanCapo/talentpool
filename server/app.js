var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var personRouter = require('./routes/person')
var fs = require('fs')
var Person = require('./models/Person')
var bodyParser = require('body-parser')
var fileUpload = require('express-fileupload')
var uid = require('uid')

var app = express()

var mongoose = require('mongoose')

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
app.use(express.static('www'))
app.use(express.static(path.join(__dirname, 'build')))
app.use(
  bodyParser({
    limit: '50mb',
    keepExtensions: true,
    uploadDir: __dirname + '../public/uploads',
  }),
)
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }),
)

app.post('/person', (req, res) => {
  var tempPath = req.files[0].path
  console.log('hello world')
  var str = uid.sync(7)
  var extension = req.files[0].originalname.split('.').pop()
  console.log('files received: ' + str)
  str = str + '.' + extension
  var TARGET_PATH = path.resolve(__dirname, '../public/uploads/')
  var targetPath = path.join(TARGET_PATH, str)

  var is = fs.createReadStream(tempPath)
  var os = fs.createWriteStream(targetPath)
  is.pipe(os)
  // file write error
  is.on('error', function(err) {
    if (err) {
      console.log(err)
    }
  })
  // file end
  is.on('end', function() {
    //delete file from temp folder
    fs.unlink(tempPath, function(err) {
      if (err) {
        return res.send(500, 'Something went wrong')
      }
    })
  })
  var x = '/uploads/' + str
  imgs.unshift({
    imageName: str,
    photo: x,
    extension: '.png',
    created: Date.now(),
  })
  res.json({ message: 'ok' })
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
