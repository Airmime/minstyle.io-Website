var compression = require('compression');
var express = require('express');
var i18n=require("i18n-express"); 
var session = require('express-session')

var app = express();

/* GZIP compression */
app.use(compression());

/* Static ressources */
app.use(express.static(__dirname + '/public'));

/* View engine */
app.set('view engine', 'ejs');

/* Session */
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

/* Translation */
app.use(i18n({
  translationsPath: __dirname + '/i18n', // <--- use here. Specify translations files path.
  siteLangs: ["en","fr"],
  textsVarName: 'translation',
}));

/* Routes */
app.get('/', function(req, res, next) {
  res.render('index');
})
.get('/doc', function(req, res, next) {
  res.render('doc');
})
.get('/doc/get-started', function(req, res, next) {
  res.render('doc/get-started');
});

/* Server Config */
app.listen(8080);