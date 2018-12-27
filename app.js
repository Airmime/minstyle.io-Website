var compression = require('compression');
var express = require('express');
var i18n=require("i18n-express"); 
var session = require('express-session')
const favicon = require('express-favicon');

var app = express();

/* GZIP compression */
app.use(compression());

/* Static ressources */
app.use(express.static(__dirname + '/public'));

/* Favicon */
app.use(favicon(__dirname + '/public/favicon.png'));

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
//HOME
app.get('/', function(req, res, next) {
  res.render('index');
})

//DOCUMENTATION
.get('/doc', function(req, res, next) {
  res.render('doc');
})
.get('/doc/get-started', function(req, res, next) {
  res.render('doc/get-started');
})
.get('/doc/grid-responsive', function(req, res, next) {
  res.render('doc/grid-responsive');
})
.get('/doc/google-font', function(req, res, next) {
  res.render('doc/google-font');
})
.get('/doc/typographie', function(req, res, next) {
  res.render('doc/typographie');
})
.get('/doc/heading', function(req, res, next) {
  res.render('doc/heading');
})
.get('/doc/buttons', function(req, res, next) {
  res.render('doc/buttons');
})
.get('/doc/blockquotes', function(req, res, next) {
  res.render('doc/blockquotes');
})
.get('/doc/tables', function(req, res, next) {
  res.render('doc/tables');
})
.get('/doc/alerts', function(req, res, next) {
  res.render('doc/alerts');
})
.get('/doc/lists', function(req, res, next) {
  res.render('doc/lists');
})
.get('/doc/forms', function(req, res, next) {
  res.render('doc/forms');
})
.get('/doc/badges', function(req, res, next) {
  res.render('doc/badges');
})
.get('/doc/progress-bar', function(req, res, next) {
  res.render('doc/progress-bar');
})
.get('/doc/cards', function(req, res, next) {
  res.render('doc/cards');
})
.get('/doc/menu', function(req, res, next) {
  res.render('doc/menu');
})
.get('/doc/box', function(req, res, next) {
  res.render('doc/box');
})

//THEMES
.get('/themes', function(req, res, next) {
  res.render('themes');
})

//PREVIEW
.get('/themes/preview/:template', function(req, res, next) {
  res.render('preview',{template: req.params.template});
});

/* Server Config */
app.listen(8080);