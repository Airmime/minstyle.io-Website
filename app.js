var compression = require('compression');
var express = require('express');
var indexRouter = require('./routes/index');
var docRouter = require('./routes/doc');

var app = express();

/* GZIP compression */
app.use(compression());

/* Static ressources */
app.use(express.static(__dirname + '/public'));

/* View engine */
app.set('view engine', 'ejs');

/* Routes */
app.use('/', indexRouter);
app.use('/documentation', docRouter);

/* Server Config */
app.listen(8080);