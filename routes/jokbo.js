var express = require('express');
var router = express.Router();

var dummy_data =
  [{
      "year": 2015,
      "semester": "spring",
      "professor": "최광무",
      "subject": "형식언어및오토마타",
  }];

router.get('/', function(req, res, next) {
  res.render('jokbo', {'jokbos': dummy_data, 'search': req.query.search});
});

router.get('/upload', function(req, res, next) {
  res.render('jokbo_upload');
});

module.exports = router;
