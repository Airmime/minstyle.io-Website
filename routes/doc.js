/* INDEX ROUTES */
var express = require('express');
var router = express.Router();

/* Home page. */
router.get('/', function(req, res, next) {
  res.render('doc');
});

module.exports = router;
